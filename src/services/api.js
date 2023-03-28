import axios from "axios";
export const Api = axios.create({
    // URL da Api de Autenticação //
    baseURL: "https://tradersdash.com.br/api/",//"http://164.90.255.137/api/",
});
