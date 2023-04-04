import { Api } from "../../../services/api";

export async function getDaysCalendar(email, date = null)
{
    var formData = new FormData();
    formData.append("email", email);
    formData.append("date", date);

    const request = await Api.post("calendario-trades.php", formData);
    console.log(request.request.response)

    return request.request.response;

}