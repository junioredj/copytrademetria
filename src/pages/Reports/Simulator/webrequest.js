import React, { useEffect, useState } from "react";
import { Api } from "../../../services/api";



export async function Filter(date, type, lado, codigo, tag)
{
    var formData = new FormData();
    formData.append("date", date);//imagefile.files[0]
    formData.append("type", type);
    formData.append("lado", lado);
    formData.append("tag", tag);
    formData.append("codigo", codigo);

    const request = await Api.post("simulador-resultados.php", formData);

    return request.request.response;
}