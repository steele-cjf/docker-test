
const { createClient } = require('redis')

async function init() {
    const client = createClient(6379, '127.0.0.1');

    client.on('error', (err) => console.log('Redis Client Error', err));

    await client.connect();
}

init()