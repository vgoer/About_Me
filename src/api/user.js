import instance from "../utils/axios";


const api_user_login = (data) => {
    return instance({
        url:"/v1/login",
        method: 'post',
        data
    })
}



export {
    api_user_login,
    
}