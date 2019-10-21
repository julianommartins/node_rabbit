# node_rabbit
Example node + rabbitmq


# install rabbit mq

Install docker in order to have a rabit instance. After install docker, run the commands

1- docker pull rabbitmq

2- docker run -d --hostname my-rabbit --name rabbit13 -p 8080:15672 -p 5672:5672 -p 25676:25676 rabbitmq:3-management

Check if rabbit is running by openning: http://localhost:8080/

Default user and password is guest

More about rabbit configure -> https://hub.docker.com/_/rabbitmq

# running tests

1- In this project, run:
npm -i

2- Now, you can go to 1 or more terminals and run many workers with the command

node worker.js

The workers will keep listening for rabbit messages.

3- Run the app that will send messages to rabbit with:

node app.js

Every time that you run the app, some worker will recebive the message. As rabbit work using round robin, its impossible to tell what worker will receive what message

