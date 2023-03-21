import {Link, useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAuth } from '../context/AuthProvider/useAuth';

import { Footer } from "../components/Footer";
import { Button } from "../components/Form/Button";
import { Input } from "../components/Form/Input";

const SignupSchema = yup.object({
    username: yup.string().required("Nome obrigatório"),
    email: yup.string().email("E-mail invalido!")
    .required("E-mail obrigatório!"),
    password: yup.string().min(8, "A senha precisar conter de 8 à 18 digitos!").max(18, "A senha precisar conter de 8 à 18 digitos!").required("Este campo é obrigatório!"),
}).required('Senha obrigatória!')

export function SignUp(){

    const auth = useAuth();
    const navigate = useNavigate();

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(SignupSchema),
    });

    async function Registed (values){
        try {
            await auth.signup(values.username, values.email, values.password);

            navigate('/signin');

        } catch (error) {
            alert(error);
        }
    };

    return (
        <>
            <div className="container-sign">
                <div className="signup">
                    <section className="content">
                        <header>
                            <h2>Dashboard</h2>
                        </header>
                        <main className="form-content">
                            <h6>Comece com uma conta gratuita!</h6>

                            <form onSubmit={handleSubmit(Registed)} className="form">
                                <Input 
                                    label='Nome'
                                    type='text'
                                    id='name-signup'
                                    placeholder='Seu nome'
                                    {...register('username')}
                                    error={errors.username}
                                />

                                <Input 
                                    label='E-mail'
                                    type='email'
                                    id='email-signup'
                                    placeholder='Seu e-mail'
                                    {...register('email')}
                                    error={errors.email}
                                />

                                <Input 
                                    label='Senha'
                                    type='password'
                                    id='senha-signup'
                                    placeholder='Sua senha'
                                    {...register('password')}
                                    error={errors.password}
                                />

                                <div className="submit-box-signup">
                                    <Button type='submit' name='Criar Conta' />
                                </div>
                            </form>
                        </main>
                        <footer>
                            <span>Já tem uma conta?  </span>
                            <Link to={'/signin'} className='link-signup' > Acesse sua Conta</Link>
                        </footer>
                    </section>
                </div>
            </div>
            <Footer/>
        </>
    );
}