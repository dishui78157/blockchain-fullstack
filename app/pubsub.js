const redis = require('redis');

const CHANNELS = {
    TEST: 'TEST',
};

class PubSub {
    constructor() {
        this.publisher = redis.createClient({legacyMode: true});
        this.subscriber = redis.createClient({legacyMode: true});

       // this.publisher.connect();
       // this.subscriber.connect();

        this.subscriber.subscribe(CHANNELS.TEST);

        this.subscriber.on(
            'message', 
            (channel, message) => this.handleMessage(channel, message)
        );
    }

    handleMessage(channel, message) {
        console.log(`Message received. Channel: ${channel}. Message: ${message}.`);
    }   
}

const testPubSub = new PubSub();
testPubSub.publisher.publish(CHANNELS.TEST, 'foo');