import React, { useEffect, useState } from "react";
import { Api } from "../../../services/api";

export async function getDaysCalendar(email, date = null)
{
    var formData = new FormData();
    formData.append("email", email);
    formData.append("date", date);

    const request = await Api.post("calendario-trades.php", formData);

    return request.request.response;
}