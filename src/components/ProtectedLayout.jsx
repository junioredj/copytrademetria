
import { Navigate } from "react-router-dom";
import { getUserLocalStorage } from "../context/AuthProvider/util";

export const ProtectedLayout = ({children}) => {
    const user = getUserLocalStorage()

    if(!user){
       
       return <Navigate to="/signin"/>;
    }

    return children;
};