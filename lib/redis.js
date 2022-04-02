
const { createClient } = require('redis')
const { REDIS_PORT, REDIS_URL } = require('../config/redis')

class RedisHelper {
    client = null
    constructor() {
        this.init()
    }
    async init() {
        this.client = createClient(REDIS_PORT, REDIS_URL);
        global.redisClient = this.client
        await this.client.connect();
        this.client.on('error', (err) => console.log('Redis Client Error', err));
    }
    getRedisClient() {
        return global.redisClient || this.client
    }
}

const redis = new RedisHelper()

module.exports = redis