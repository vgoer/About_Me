import axios from "axios"


const instance = axios.create({
    // 最小url
    baseURL: 'xxx/api',
    // 超时
    timeout: 1000,
    // 请求头部
    headers: {
        "Content-Type": "application/json;charset=utf-8",
    }
})


instance.interceptors.request.use(
    (config) => {
        return config
    },

    (error) => {
        return Promise.reject(error)
    }
)



instance.interceptors.response.use(
    (res) => {


        return res
    },
    (error) => {
        return Promise.reject(error)
    }
)


export default instance