import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID CNlqETvEpLiy0ayEWpDPEItq_3EVvkvxKBtcDhV1xN8"
    }
})