import axios from "axios";

const axiosIns = axios.create({
    baseURL: process.env.VUE_APP_BASE_API_URL,
    // responseType: "application/json",
});

axiosIns.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("access_token");
        if (token) {
            console.log("YJ",token);
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    // (error) => {
    //     if (error.response.status === 500) {
    //         this.$toast.error("Something went wrong, please try again later");
    //     }
    // }
);
export default axiosIns;

