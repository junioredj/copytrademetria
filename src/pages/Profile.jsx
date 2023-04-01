import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserCircle, XCircle, FloppyDisk } from "phosphor-react";

import { UserRequest, GetResultYears, UserUpdate, UserDelete, getUserLocalStorage, setUserLocalStorage } from "../context/AuthProvider/util";

import ImageProfile from '../img/avatar-placeholder.webp';
import { useAuth } from "../context/AuthProvider/useAuth";
import {notifySucess, notifyError} from "../components/Toast/toast";

const dataT = {
    name: getUserLocalStorage().nome,
    surname: getUserLocalStorage().sobrenome,
    email: getUserLocalStorage().email,
    pass: '',
}

export function Profile() {
    const navigate = useNavigate();
    const auth = useAuth();

    const [userData, setUserData] = useState(dataT);

    // async function getData(){
    //     const response = await UserRequest(2);
    //     setUserData(response.data)
    // }

    const {register, handleSubmit, formState:{ errors, isSubmitting, } } = useForm({
        mode: 'all',
        defaultValues: {
            name: userData.name,
            surname: userData.surname,
            email: userData.email,
            pass: userData.pass,
        }
    });

    const userUpdate = async ( data ) => {
        
        const response = UserUpdate( data );
        


        return response;
    }

    function userDelete(){
        UserDelete(2);
        auth.logout( () => navigate('/') );
    }

    const onSubmit = async (values) => {
        // const data =  await userUpdate(values);

        

        const promise = await new Promise( (resolve) => setTimeout(() => {
            userUpdate(values).then(response=>{
                const objeto = JSON.parse(response);
                if(objeto.update == "true")
                {
                    console.log(objeto.update);
                    const payload = {
                    email: objeto.email,
                    nome: objeto.nome,
                    sobrenome: objeto.sobrenome,
                    };
                    setUserLocalStorage(payload);
    
                    notifySucess('Dados atualizados com sucesso!')
                    resolve('helo');
    
                }
                else
                {
                    notifyError('Erro ao atualizar dados!')
                }
            });
        }, 3000))

        setUserData(values);

    }

    return (
        <>
            <div className="s-profile">
                <div className="container">
                    <div className="page-title">
                        <h4>Perfil</h4>
                    </div>
                    <div className="user-edit">
                        <div className="left-area">
                            <div className="image-profile">
                                <img src={ImageProfile} alt="Image de Perfil" width="32px"/>
                            </div>
                            <h4>{userData.name}</h4>
                            <span>{userData.email}</span>
                            {/* <button>Escolher foto</button> */}
                        </div>
                        <div className="right-area">
                            <div className="title-section">
                                <UserCircle size={24}/>
                                <h6>Dados do Pessoais</h6>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)} className="form-content">
                                <div className="input-content">
                                    <div className="input-box">
                                        <label htmlFor="name">Nome</label>
                                        <input
    
                                            type="text" 
                                            name="name" 
                                            id="name"
                                            {...register('name')} />
                                    </div>
                                    <div className="input-box">
                                        <label htmlFor="surname">Sobrenome</label>
                                        <input 
                                        type="text" 
                                        name="surname" 
                                        id="surname"
                                        {...register('surname')} />
                                    </div>
                                </div>
                                <div className="input-content">
                                    <div className="input-box">
                                        <label htmlFor="email">E-mail</label>
                                        <input 
                                        disabled
                                        type="email" 
                                        name="email" 
                                        id="email"
                                        value={getUserLocalStorage().email}
                                        {...register('email')} />
                                    </div>
                                    <div className="input-box">
                                        <label htmlFor="pass">Password</label>
                                        <input 
                                        type="password" 
                                        name="pass" 
                                        id="pass" 
                                        placeholder="Digite uma nova senha"
                                        {...register('pass')} />
                                    </div>
                                </div>
                                <div className="input-button">
                                    <button type="submit" onClick={userUpdate} className="btn-primary green">
                                        <FloppyDisk /> 
                                        {isSubmitting ? 'Salvando dados...' : 'Salvar dados'}
                                    </button>
                                    <button onClick={userDelete} className="btn-primary">
                                        <XCircle /> Encerrar conta
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}