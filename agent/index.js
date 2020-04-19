const redis = require('redis');
const util  = require('util');
const os = require('os');
const si = require('systeminformation');

// Calculate metrics.
// TASK 1:
class Agent
{
    memoryLoad()
    {
       return os.freemem() / os.totalmem() * 100;
    }
    async cpu()
    {
       let load = await si.currentLoad();
       return load.avgload;
    }

    async networkStats() {
        return si.networkStats();
    }
}

(async () => 
{
    // Get agent name from command line.
    let args = process.argv.slice(2);
    main(args[0]);

})();


async function main(name)
{
    let agent = new Agent();

    let connection = redis.createClient(6379, '192.168.44.92', {})
    connection.on('error', function(e)
    {
        console.log(e);
        process.exit(1);
    });
    let client = {};
    client.publish = util.promisify(connection.publish).bind(connection);

    // Push update ever 1 second
    setInterval(async function()
    {
        let netStats = await agent.networkStats();

        let payload = {
            memoryLoad: agent.memoryLoad(),
            cpu: await agent.cpu(),
            network_rx_sec: netStats[0].rx_sec,
            network_tx_sec: netStats[0].tx_sec
        };
        let msg = JSON.stringify(payload);
        await client.publish(name, msg);
        console.log(`${name} ${msg}`);
    }, 1000);

}



