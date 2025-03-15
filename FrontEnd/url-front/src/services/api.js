import axios from "axios";


const API = axios.create({
    baseURL: "http://localhost:5000",
});

export const shortenURL = async (originalUrl) => {
    try{
        const response = await API.post("/url/shorten", {url: originalUrl});
        return response.data;

    }catch(error){
        console.log("Error shortening URL:", error.response ? error.response.data : error.message);
        return null;
    }
};

export default API;