import { useNavigate } from "react-router";
import "./login.css";

export default function Login() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        /** validação provisória até ser criado a validação também de usuário no backend */
        if (email.includes("paciente")) {
            navigate("/dashboard-paciente");
        } else {
            navigate("/dashboard-prescritor");
        }
    };

    const handleSignUp = (e) => {
        e.preventDefault();

        navigate("/sign-up")
    }

    return (
        <div className="login">
            <section className="login__art">
                <img
                    alt="Logotipo 2AG"
                    className="login__art__top-left"
                    src="/images/logotipo-icon.svg"
                />
                <img
                    alt="Logotipo 2AG"
                    className="login__art__top-right"
                    src="/images/logotipo-icon.svg"
                />
                <img
                    alt="Logotipo 2AG"
                    className="login__art__center"
                    src="/images/logotipo-vertical.svg"
                />
                <img
                    alt="Logotipo 2AG"
                    className="login__art__bottom-left"
                    src="/images/logotipo-icon.svg"
                />
                <img
                    alt="Logotipo 2AG"
                    className="login__art__bottom-right"
                    src="/images/logotipo-icon.svg"
                />
            </section>
            <section className="login__content">
                <div className="login__content-wrapper">
                    <img
                        alt="Logotipo 2AG"
                        className="login__content__logo"
                        src="/images/logotipo-horizontal.svg"
                    />
                    <h2 className="login__content__title">Login</h2>
                    <form className="login__content__form" onSubmit={handleSubmit}>
                        <div className="login__content__form__input-group">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required={true}
                            />
                        </div>
                        <div className="login__content__form__input-group">
                            <label htmlFor="password">Senha</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required={true}
                            />
                        </div>
                        <div className="login__content__form__actions">
                            <button type="submit">Entrar</button>
                            <button className="button-secondary" type="button" onClick={handleSignUp}>
                                Criar conta
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}