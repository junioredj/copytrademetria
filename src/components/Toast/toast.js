import { toast } from "react-toastify";

export const notify = (mensage) => toast(mensage, {theme: "dark", autoClose: 3000 });
export const notifySucess = (mensage) => toast.success(mensage, {theme: "dark", autoClose: 3000 });
export const notifyError = (mensage) => toast.error(mensage, {theme: "dark", autoClose: 3000 });
export const notifyWarn = (mensage) => toast.warn(mensage, {theme: "dark", autoClose: 3000 });