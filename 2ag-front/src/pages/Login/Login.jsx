import React, {useState} from "react";
import './Login.css';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import logo from '../../assets/logotipo-horizontal.svg';
import logosim from '../../assets/logotipo-simbolo.svg';
import logovertical from '../../assets/logotipo-vertical.svg';


    export default function Login(){
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const handleSubmit = (event) => {
            event.preventDefault();
            console.log("Tentativa de login com:");
            console.log({email, password});
        };
            return (

                    <div className="login-container">

                        <div className="logo-container">
                            <div className="logo-head">
                                <img src={logosim} alt ="Logo simbolo da empresa" className="logo-left"/>
                                <img src={logosim} alt ="Logo simbolo da empresa" className="logo-right"/>

                            </div>
                            <div className="logo-center">
                                <img src={logovertical} alt ="Logotipo vertical"/>

                            </div>
                            <div className="logo-footer">
                                <img src={logosim} alt ="Logo simbolo da empresa" className="logo-left"/>
                                <img src={logosim} alt ="Logo simbolo da empresa" className="logo-right"/>


                            </div>

                        </div>

                        <div className="login-form-wrapper">
                        <div className="login-header">
                            <img src={logo} alt="Logo da empresa" className="logo-int"/>
                            <h2 className="form-title">Login</h2>
                            <p className="form-subtitle">Boas vindas!</p>
                        </div>

                        <form className="login-form">
                            <div className="input-group">
                                <label htmlFor="email">Email</label>
                                <input id="email" name="email" type="email" placeholder="fulano.beltrano@gmail.com" required />
                            </div>

                            <div className="input-group">
                                <label htmlFor="password">Senha</label>
                                <input id="password" name="password" type="password" placeholder="********" required />
                            </div>

                            <div className="form-extra-options">
                                <label className="remember-me">
                                    <input type="checkbox" />
                                    Remember me
                                </label>
                                <a href="#" className="forgot-password-link">Esqueceu a senha?</a>
                            </div>


                            <button type="submit" className="btn btn-primary">Login</button>
                            <button type="button" className="btn btn-secondary">Sign Up</button>

                            <div className="separator">Ou</div>

                            <button type="button" className="btn btn-social">
                                <FcGoogle size={22} />
                                Continuar com Google
                            </button>
                            <button type="button" className="btn btn-social">
                                <FaFacebook size={22} color="#1877F2" />
                                Continuar com Facebook
                            </button>
                        </form>
                    </div>
                </div>
            );
        }