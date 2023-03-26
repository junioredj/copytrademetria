import { toast } from "react-toastify";

export const notify = (mensage) => toast(mensage, {theme: "dark"});
export const notifySucess = (mensage) => toast.success(mensage, {theme: "dark"});
export const notifyError = (mensage) => toast.error(mensage, {theme: "dark"});
export const notifyWarn = (mensage) => toast.warn(mensage, {theme: "dark"});