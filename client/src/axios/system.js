import axios from "axios";

var baseURL = 'http://localhost:5000/api/system'

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:5000/api/system'
} else {
    baseURL = 'https://toker.team/api/system'
}

const instance = axios.create({
    baseURL,
})

instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default {
    getBottomALert: (token) =>
        instance({
            method: 'GET',
            url: `/getBottomALert`,
            headers: {
                Authorization: `Bearer ${token}`
            },
        }),
}