import axios from "axios";
export const Api = axios.create({
    // URL da Api de Autenticação //
    baseURL: "http://apitradersdash.infinityfreeapp.com/api/",//"http://164.90.255.137/api/",
});
