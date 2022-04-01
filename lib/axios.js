var axios = require('axios')

function post(url, data) {
    return new Promise(async (resolve, reject) => {
        await axios.post(url, data)
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
function get(url, data) {
    return new Promise(async (resolve, reject) => {
        await axios.get(url, data)
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