import React, { useEffect, useState } from "react";
import { Api } from "../../../services/api";



export async function Filter(date, type, lado, codigo, tag, email)
{
    var formData = new FormData();
    formData.append("date", date);//imagefile.files[0]
    formData.append("type", type);
    formData.append("lado", lado);
    formData.append("tag", tag);
    formData.append("codigo", codigo);
    formData.append("email", email);

    const request = await Api.post("simulador-resultados.php", formData);

    return request.request.response;
}

export async function GetTags(email)
{
    var formData = new FormData();
    formData.append("email", email);

    const request = await Api.post("get-tags-simulador.php", formData);

    return request.request.response;
}
