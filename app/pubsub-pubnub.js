const PubNub = require('pubnub');

const credentials = {
    publishKey: 'pub-c-8f4de0d4-108a-4254-a626-d6bd4f59139c',
    subscribeKey: 'sub-c-436f3130-6ad8-4543-ad14-2fa8ddb32698',
    secretKey: 'sec-c-OTlhZWYzOTMtNDg3Yi00ZGZlLWJhZDYtZGY5OGRmM2FlMTg5'
};

const CHANNELS = {
    TEST: 'TEST',
};

class PubSub {
    constructor() {
        this.pubnub = new PubNub(credentials);
       // this.pubnub.subscribe({ channels: [CHANNELS.TEST] });
        this.pubnub.subscribe({ channels: Object.values(CHANNELS) });
        this.pubnub.addListener(this.listener());
    }
    listener() {
        return {
            message: messageObject => {
                const { channel, message } = messageObject;
                console.log(`Message received. Channel: ${channel}. Message: ${message}`);
            }
        }
    }
    publish({ channel, message }) {
        this.pubnub.publish({ channel, message });
    } 
}
//const testPubSub = new PubSub();
//testPubSub.pubnub.publish({ channel: CHANNELS.TEST, message: 'hello pubnub' });
module.exports = PubSub;
