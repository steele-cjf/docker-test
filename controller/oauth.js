
// https://sso-dev.thingsmatrix.cn/oauth/token?client_id=inner-node-service&client_secret=7W8oSS4yaa24wEafDh7rAO79z2t&grant_type=client_credentials
const OAUTH_URL = `https://sso-dev.thingsmatrix.cn/oauth/token?client_id=inner-node-service&client_secret=7W8oSS4yaa24wEafDh7rAO79z2t&grant_type=client_credentials`
const { post } = require('../lib/axios')


async function oauth(req, res, next) {
    post(OAUTH_URL).then((data) => {
        res.send(data)
    }).
        catch(error => {
            const { response } = error
            const { status, data } = response
            if (status === 401) {
                console.log('401')
                res.send(data)
            } else if (status === 500) {
                res.send(data)
            } else {
                res.send(data)
            }
        })
}

module.exports = oauth