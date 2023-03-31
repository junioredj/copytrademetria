import React, { useEffect, useState } from "react";
import { Api } from "../../../services/api";

export async function getHistorical(email)
{
    var formData = new FormData();
    formData.append("email", email);

    const request = await Api.post("get-historical-trades.php", formData);
    return request.request.response;
}