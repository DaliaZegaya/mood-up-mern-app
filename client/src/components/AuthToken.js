import axios from "axios";

const jwtInterceptor = axios.create( {
    baseURL: "https://mood-up-server.onrender.com/"
} )


jwtInterceptor.defaults.headers.common['authorization'] = JSON.parse(res)

export default jwtInterceptor;