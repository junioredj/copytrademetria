import React, { useEffect, useState } from "react";
import { Api } from "../../../services/api";

export async function getDayTrade(email)
{
    var formData = new FormData();
    formData.append("email", email);

    const request = await Api.post("relatorio-daytrade.php", formData);
    return request.request.response;
}