// importing rabbit lib
var amqp = require('amqplib/callback_api');

// connecting
amqp.connect('amqp://localhost:5672', function (err, conn) {

    // creating channel
    conn.createChannel(function (err, ch) {
        // chanel name
        var q = 'hello';
        // message content
        var msg = 'Hello World 123!';
        // queue to be used
        ch.assertQueue(q, {
            durable: false
        });
        // sending
        ch.sendToQueue(q, new Buffer(msg));
        console.log(" [x] Sent %s", msg);
    });
    setTimeout(function () {
        conn.close();
        process.exit(0)
    }, 500);
});