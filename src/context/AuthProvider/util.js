import { Api } from "../../services/api";
import React, { useEffect, useState } from "react";
import { notifyError, notifySucess } from "../../components/Toast/toast";

// Adicionar e ler o Local Storage
export function setUserLocalStorage(user) {
  localStorage.setItem("u", JSON.stringify(user));
}
export function getUserLocalStorage() {
  const json = localStorage.getItem("u");

  if (!json) {
    return "null";
  }

  const user = JSON.parse(json);
  return user ?? "null";
}

export async function LoginRequest(email, password) {
  const request = await Api.post("signin.php", {
    email: email,
    password: password,
  });

  return request.request.response;
}

export async function RegisterRequest(username, email, password) {
    const request = await Api.post("signup.php", {
      nome: username,
      email: email,
      password: password,
    });

    return request.data;
}

export async function UserRequest(id) {
  try {
    const request = await Api.get(`users/${id}`);

    return request.data;
  } catch (error) {
    return error;
  }
}

export async function UserUpdate({ name, surname, email, pass }) {
  try {
    const request = await Api.put("update-cliente.php", {
      name,
      surname,
      email,
      pass,
    });

    return request.data;
  } catch (error) {
    return error;
  }
}

export async function UserDelete(id) {
  try {
    const request = await Api.delete(`users/${id}`);

    return;
  } catch (error) {
    return error;
  }
}

export async function GetTrades(email) {
  try {
    //Buscando os dados da api
    const [data, setData] = useState([]);

    var dados = [];
    useEffect(() => {
      const controller = new AbortController();
      const handleFetch = async () => {
        return new Promise(async function (resolve, reject) {
          try {
            const resposta = await Api.get(
              "listar-operacoes.php?email=" + email,
              { signal: controller.signal }
            )
              .then((response) => {
                setData(response.data);
                dados.push(response.data);
                resolve(data.json());
              })
              .catch(() => {
                console.log("Erro");
              });
          } catch (error) {}
        });
      };

      handleFetch();

      return () => {
        controller.abort();
      };
    }, []);
    return data;
  } catch (error) {
    return error;
  }
}
export async function GetEvolucaoPatrimonial(email) {
  const [resultArray, setResultArray] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const handleFetch = async () => {
      try {
        const resposta = await Api.get(
          "evolucao-patrimonial.php?email=" + email,
          { signal: controller.signal }
        ).then((response) => setResultArray(response.data));
      } catch (error) {}
    };

    handleFetch();

    return () => {
      controller.abort();
    };
  }, []);

  return resultArray;
}
export async function GetResultYears(email) {
  const [resultArray, setResultArray] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const handleFetch = async () => {
      try {
        const resposta = await Api.get("get-result-year.php?email=" + email, {
          signal: controller.signal,
        }).then((response) => setResultArray(response.data));
      } catch (error) {}
    };

    handleFetch();

    return () => {
      controller.abort();
    };
  }, []);

  //console.log(resultArray);
  return resultArray;
}
export async function ImportOperations(email, tags) {
  try {
    var formData = new FormData();
    var imagefile = document.querySelector("#import-file");
    formData.append("file", imagefile.files[0]);
    formData.append("email", email);
    formData.append("tags", tags);

    const request = await Api.post("importar.php", formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    notifySucess("Importado com sucesso!")
    return request.request.response;
  } catch (error) {
    notifyError("Erro ao importar, tente novamente!")
  }
}
