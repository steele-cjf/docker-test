// redis 配置
const REDIS_CF = {
    port: 6379,
    host: '127.0.0.1'
}

// mongodbd 配置
const MONGODB_CF = {
    port: 27017,
    host: '119.91.119.120',
    user: 'tmxer',
    password: 'thingsmatrix',
    database: 'test'
}

// 后台服务器api
const OAUTH_CF = {
    url: `https://sso-dev.thingsmatrix.cn/oauth/token?client_id=inner-node-service&client_secret=7W8oSS4yaa24wEafDh7rAO79z2t&grant_type=client_credentials`,
    token_key: 'ACCESS_TOKEN'
}

module.exports = {
    REDIS_CF,
    MONGODB_CF,
    OAUTH_CF
}