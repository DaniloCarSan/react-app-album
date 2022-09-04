import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const api = axios.create({
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
