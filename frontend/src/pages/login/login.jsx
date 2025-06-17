import "./login.css";

export default function Login() {
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
                    <form className="login__content__form">
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
                            <button className="button-secondary" type="button">
                                Criar conta
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}
