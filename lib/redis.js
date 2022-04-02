
const { createClient } = require('redis')


class RedisHelper {
    client = null
    constructor() {
        this.init()
    }
    async init() {
        this.client = createClient(6379, '127.0.0.1');
        await this.client.connect();
        this.client.on('error', (err) => console.log('Redis Client Error', err));
    }
    getRedisClient() {
        return this.client
    }
}

const redis = new RedisHelper()

module.exports = redis