var axios = require('axios')

const instance = axios.create({
    timeout: 3000,
});

function post(url, data, config) {
    return new Promise(async (resolve, reject) => {
        await instance.post(url, data, config)
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
function get(url, data, config) {
    return new Promise(async (resolve, reject) => {
        await instance.get(url, data, config)
            .then(function (response) {
                const { status, data } = response
                if (Number(status) === 200) {
                    resolve(data)
                } else {
                    reject(response)
                }
            }).catch((e) => {
                // const { response } = e
                // console.log('response: ', response);
                // 401 500 错误等
                reject(e)
            })
    })
}

module.exports = { post, get }