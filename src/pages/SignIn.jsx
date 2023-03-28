import { useState, useEffect } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import LogoHeader from "../img/logo.png";

import { useAuth } from "../context/AuthProvider/useAuth";

import { Footer } from "../components/Footer";
import { Input } from "../components/Form/Input";
import { Button } from "../components/Form/Button";

import {notifySucess, notifyError} from "../components/Toast/toast";

const SigninSchema = yup
  .object({
    email: yup
      .string()
      .email("E-mail invalido!")
      .required("E-mail obrigatório!"),
    password: yup
      .string()
      .min(8, "A senha precisar conter de 8 à 18 digitos!")
      .max(18, "A senha precisar conter de 8 à 18 digitos!")
      .required("Este campo é obrigatório!"),
  })
  .required("Senha obrigatória!");

export function SignIn({ openModal }) {




    async function onSubmit({email, password}) {

      /*var promise = new Promise( (resolve) => setTimeout(() => {
        return resolve({resolve: Authenticated(email, password)});
      }, 500))

      const printAddress = async () => {
        const a = await promise;
        console.log(a);
      };
      
      printAddress();*/

      const p = Promise.resolve(Authenticated(email, password));

      p.then(value => {
        console.log(value); // 👉️ "bobbyhadz.com"

        if(value == true)
        {
            navigate("/");
        }


      }).catch(err => {
        console.log(err);
      });
        
    }

  const [errorMessage, setErrorMessage] = useState("");

  const auth = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(SigninSchema),
  });

  async function Authenticated(email, password) {
    const retorno = await auth.signin(email, password);
    const objeto = JSON.parse(retorno);
    if (objeto.login == "false") {
      notifyError("E-mail ou senha incorretos!");
      reset();
      return false;
    } 
    else if (objeto.login == "true"){
        notifySucess('Login efetuado com sucesso!')
        // setTimeout(() => navigate("/"), 500)
        // navigate("/"); 
        return true;
    } 


    
    
  }

  return (
    <>
      <div className="container-sign">
        <div className="signin">
          <section className="content">
            <header>
            <div className="logo">
                <Link to="/dashboard">
                  <img  src={LogoHeader} alt="Logo Dashboard" />
                </Link>
              </div>
            </header>
            <main className="form-content">
              <h4>Bem-vindo(a) ao Dashboard</h4>
              <span className="result-red">{errorMessage}</span>
              <form onSubmit={handleSubmit(onSubmit)} className="form">
                <Input
                  label="E-mail"
                  type="email"
                  id="email-signin"
                  placeholder="Seu e-mail"
                  {...register("email")}
                  error={errors.email}
                />
                <Input
                  label="Senha"
                  type="password"
                  id="senha-signin"
                  placeholder="Sua senha"
                  {...register("password")}
                  error={errors.password}
                />

                <div className="submit-box">
                  <button type="submit" disabled={isSubmitting} className='btn-primary'>
                      {isSubmitting? 'Entrando...' : 'Entrar'}
                  </button>
                  <button type="button" onClick={openModal}>
                    esqueceu a senha?
                  </button>
                </div>
              </form>
            </main>
            <footer>
              <span>Ainda não tem uma conta? </span>
              <Link to={"/signup"} className="link-signup">
                {" "}
                Criar Conta
              </Link>
            </footer>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}
