# HW #4 Monitoring
In this assignment, I explored a few different technologies used to build a basic monitoring infrastructure including:

1. vue.js - UI library to implement databinding between server metrics and HTML components
2. socket.io - JavaScript library that simplifies WebSockets programming for receiving real-time server metric updates
3. systeminformation - Node.js library for system and OS information
4. Redis Pub/Sub - using `PUBLISH` and `SUBSCRIBE` commands for clients to subscribe and receive server metric updates
5. siege - an http load testing and benchmarking utility


# Questions

1. Compare a channel deployment model with a ring deployment model.

_Ans:_ 

A channel deployment model promotes code changes to one or more channels until that particular code change is ready 
for release.

A ring deployment model pushes changes in phases to environments/users often based on risk and adaptability 
to change. For example, developers or automated integration environments might receive changes early, but end users
might receive changes after the code has reached a high level of stability.

Some differences between the models are that a ring deployment model attempts to control the "blast radius" of code
changes, so if a defect is found, the number of systems or users impacted can be controlled. A channel deployment
model gives freedom to the end user to subscribe to particular channels based on risk tolerance.

2. Identify 2 situations where an expand/contract deployment could be useful.

_Ans:_

3. What are some tradeoffs associated with dark launches?

_Ans:_


4. Describe the Netflix style green-blue deployment. What can canary analysis tell us?

_Ans:_


# Screencast
