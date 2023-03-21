import axios from "axios";
export const Api = axios.create({
    // URL da Api de Autenticação //
    baseURL: "http://localhost/react/dash-trademetria-main/api",
});
