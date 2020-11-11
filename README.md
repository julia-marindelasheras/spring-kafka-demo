# Connections Demo Event Driven Microservices with Spring Cloud Stream

First approach to implement an Event driven architecture within Connections, using  Spring Cloud Stream to simplify things. 

## The Problem
 
We want to connect our microservices to use a common messaging services (either on-premises or in the cloud).

## The Solution

I am trying Spring Cloud Stream to take care of the messaging platform integration, because unifies lots of popular messaging platforms behind one easy to use API including RabbitMQ, Apache Kafka, Amazon Kinesis, Google PubSub, Solace PubSub+, Azure Event Hubs, and Apache RocketMQ.
We are interesting on Apache Kafka but things can change in NCR.

## Previously install

What do we need installed on our PC?

1. [Java 11][java]
2. [Docker][docker-for-mac] (to run Kafka locally)
3. [Git][git-install] (optional)

## Running The Demo

First, clone the code repository from GitHub. To do this (if you have Git installed) open a new terminal window and issue the following command. 

```bash
git clone git@gitlab.ncredinburgh.com:juliamarin/spring-kafka-demo.git
```

Upon inspection of the code you'll notice that this repository consists of three microservices. 

1. The `ess-terminal` microservice (in the `/ess-terminal` folder). This microservice acts as a source of event messages. These events are terminals added and removed similar to what you’d see in the real world of ESS. Each terminal has a “name”, an “channel”, and a “status”.
    
2. The `ess-agent` microservice (in the `/ess-agent` folder). This microservice acts as an agent and tries to synchronize, changing the status of terminal if required.
    
3. The `ess-vitality-ui` microservice (in the `/ess-vitality-ui` folder). This microservice acts as UI for the status of terminal.
                                                                                              
### Step 1: Start the Messaging Servers

In a fresh terminal window, go to the root folder of the project and issue the following command.

```bash
./start-servers.sh
```
### Step 2: Generate Terminals Events
In a fresh terminal window, go to the root folder of the project ess-terminal, 

```bash
cd ess-terminal
```
and then issue the following command

```bash
./mvnw clean package spring-boot:run -DskipTests=true -Pkafka
```
Leave this microservice running.

### Step 3: Changing Terminals Status
In a fresh terminal window, go to the root folder of the project ess-agent, 

```bash
cd ess-agent
```
and then issue the following command

```bash
./mvnw clean package spring-boot:run -DskipTests=true -Pkafka
```
Agent app is reading from the messaging platform and changing the status of the terminal every second .
The statuses are ACTIVE, ERROR, PENDING.
### Step 3: Stop 
For the ess-terminal and ess-agent apps:

If you press Ctrl-C. The application will come to a halt, and the event processing will stop.

For the messaging server
```bash
./stop-servers.sh
```