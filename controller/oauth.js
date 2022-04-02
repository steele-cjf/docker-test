
// https://sso-dev.thingsmatrix.cn/oauth/token?client_id=inner-node-service&client_secret=7W8oSS4yaa24wEafDh7rAO79z2t&grant_type=client_credentials
const OAUTH_URL = `https://sso-dev.thingsmatrix.cn/oauth/token?client_id=inner-node-service&client_secret=7W8oSS4yaa24wEafDh7rAO79z2t&grant_type=client_credentials`
const { post } = require('../lib/axios')

const ACCESS_TOKEN = 'access_token'



async function handleOAuth(data) {
    const { access_token, expires_in
    } = data
    const redisClient = global.redisClient
    const value = "Bearer " + access_token;
    await redisClient.set(ACCESS_TOKEN, value, {
        EX: expires_in
    });
}

async function hasOAuth() {
    const redisClient = global.redisClient
    return await redisClient.get(ACCESS_TOKEN)
}

async function oauth(req, res, next) {
    const isOAuth = await hasOAuth()

    if (!isOAuth) {
        post(OAUTH_URL).then(async (data) => {
            await handleOAuth(data)
            next()
        }).
            catch(error => {
                const { response } = error
                const { status, data } = response
                if (status === 401) {
                    res.send(data)
                } else if (status === 500) {
                    res.send(data)
                } else {
                    res.send(data)
                }
            })
    } else {
        next()
    }

}

module.exports = oauth