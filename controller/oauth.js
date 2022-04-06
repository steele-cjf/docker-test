
const { OAUTH_CF } = require('../config')
const { post } = require('../lib/axios')

const { ACCESS_TOKEN, url } = OAUTH_CF



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
        post(url).then(async (data) => {
            await handleOAuth(data)
            next()
        }).
            catch(error => {
                const { response } = error
                if (response) {
                    const { status, data } = response
                    if (Number(status) === 401) {
                        res.send(data)
                    } else if (Number(status) === 500) {
                        res.send(data)
                    } else {
                        res.send(data)
                    }
                } else {
                    res.send(500)
                }

            })
    } else {
        next()
    }

}

module.exports = oauth