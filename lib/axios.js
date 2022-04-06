var axios = require('axios')

const instance = axios.create({
    timeout: 3000,
});


function ajaxFn(method, url, data, config) {
    return new Promise(async (resolve, reject) => {
        await instance[method](url, data, config)
            .then(function (response) {
                const { status, data } = response
                if (Number(status) === 200) {
                    resolve(data)
                } else {
                    reject(response)
                }
            }).catch((e) => {
                // const { response } = e
                // console.log('response: ', e);
                // 401 500 错误等
                reject(e)
            })
    })
}

function httpPost(url, data, config) {
    return ajaxFn('post', url, data, config)
}
function httpGet(url, data, config) {
    return ajaxFn('get', url, data, config)
}

module.exports = { httpPost, httpGet }