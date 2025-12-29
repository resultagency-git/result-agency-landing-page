import axios from "axios";

import globalData from "../global/indnex";

const generalApi = axios.create({
    baseURL: globalData.apiUrl,
    headers: {
        "Content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": `${globalData.apiUrl}`,
    },
});

generalApi.interceptors.request.use((config) => {
    // @ts-ignore
    config.headers.authorization = `Bearer ${localStorage.getItem(
        "cdp_token"
    )}`;

    return config;
});

export default generalApi;
