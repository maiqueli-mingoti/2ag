import React, {useState} from "react";
import './Login.css';

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
                <h2>Sing up</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="nome"
                        placeholder="Nome"
                        value={name}
                        onChange={(e) => setName (e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Login</button>
                    <button type="submit">Sing up</button>
                    <button type="submit">Google</button>


                </form>

            </div>
        );
    }