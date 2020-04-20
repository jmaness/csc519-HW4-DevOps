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

One situation where expand/contract deployment could be useful is when a system consists of multiple services which
need to be updated but also remain highly available. Often the dependency across multiple services is within shared 
data, so expand/contract deployment allows data schema and content to change in a predictable, consistent, lossless 
way.

Another situation where expand/contract deployment is useful is with deploying canary releases with experimental
features. With a flexible database schema, canary features can be deployed and undeployed if necessary without 
impacting the availibity of the system.



3. What are some tradeoffs associated with dark launches?

_Ans:_ Some tradeoffs include:

* Exposing untested code to end users
* Additional complexity managing combinations of feature flags which also might not have been tested.
* Inconsistent experience across all users.
* Technical debt where code for unused features remains in the codebase


4. Describe the Netflix style green-blue deployment. What can canary analysis tell us?

_Ans:_ The Netflix style green-blue deployment is a deployment strategy involving two sets of production infrastructure:
* `green` - active infrastructure running stable code processing application requests
* `blue` - failover infrastructure used to deploy new code (either the whole system or individudal services which can
           transition to "green".

A canary analysis is a statistical analysis of the quality of a new code change deployed on one or a small subset of 
production instances. If the canary analysis reports a high stastistical value against baseline measures, then the 
change can more confidently deployed on more production instances. 


# Screencast
