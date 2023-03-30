import axios from "axios";
export const Api = axios.create({
    // URL da Api de Autenticação //
    baseURL: "https://tradersdash.com.br/api/",//"http://localhost/tradersdash/api/",//
});
