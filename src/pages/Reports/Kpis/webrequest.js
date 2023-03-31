import React, { useEffect, useState } from "react";
import { Api } from "../../../services/api";

export async function getDesempenho(email)
{
    var formData = new FormData();
    formData.append("email", email);

    const request = await Api.post("desempenho.php", formData);

    return request.request.response;
}