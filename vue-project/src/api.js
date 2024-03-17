import axios from "axios";

const apiService = axios.create({
    baseURL: 'https://your-base-url.com', // Ganti dengan baseURL yang sesuai
    withCredentials: true
});

export default apiService;
