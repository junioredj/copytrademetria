import { createContext, useEffect, useState } from "react";
import {
  notifyError,
  notifySucess,
  notifyWarn,
} from "../../components/Toast/toast";
import { Api } from "../../services/api";
import {
  getUserLocalStorage,
  LoginRequest,
  RegisterRequest,
  setUserLocalStorage,
} from "./util";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const user = getUserLocalStorage();

    if (user) {
      // Api.get(`users/${user.token}`).then( response => {
      //     console.log(response.data);
      // })

      setUser(user);
    }
  }, []);

  async function signin(email, password) {
    try {
      const response = await LoginRequest(email, password);

      const objeto = JSON.parse(response);

      if (objeto.login == "true") {
        console.log("FOI");
        const payload = {
          token: response.token,
          email,
          nome: objeto.nome,
          sobrenome: objeto.sobrenome,
        };
        setUserLocalStorage(payload);
        setUser(payload);

        return response;
      } else {
        return response;
      }
    } catch (error) {
      notifyError("Não foi possível efetuar o login, tente novamente!");
    }
  }

  const signup = async (username, email, password) => {
    const response = await RegisterRequest(username, email, password);
    if (response.register == "true") {
      notifySucess("Cadastrado com sucesso, faça login para continuar!");
      return response;
    } else {
      if (response.duplicate == "true") {
        notifyWarn("E-mail ja cadastrado!");
      }
    }
  };

  const logout = (callback) => {
    setUser(null);
    setUserLocalStorage(null);
    callback();
  };

  return (
    <AuthContext.Provider
      value={{ ...user, ...errorMessage, signin, signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
