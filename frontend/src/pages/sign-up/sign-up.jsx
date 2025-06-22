import { useState } from "react";
import { useNavigate } from "react-router";
import "./sign-up.css";

export default function SignUp() {
    const navigate = useNavigate();
    const [userType, setUserType] = useState("");
    const [cpf, setCpf] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/login");
    };
    const handleCpf = (e) => {
        let value = e.target.value.replace(/\D/g, "");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        setCpf(value);
    };

    return (
        <div className="sign-up">
            <section className="form__content">
                <div className="form__content-wrapper">
                    <img
                        alt="Logotipo 2AG"
                        className="form__content__logo"
                        src="/images/logotipo-horizontal.svg"
                    />
                    <h2 className="form__content__title">Cadastro de Usuário</h2>
                    <form className="form__content__form" onSubmit={handleSubmit}>
                        <div className="form__content__form__input-group">
                            <label>Tipo de Usuário *</label>
                            <div>
                                <input
                                    type="radio"
                                    id="paciente"
                                    name="userType"
                                    value="paciente"
                                    checked={userType === "paciente"}
                                    onChange={() => setUserType("paciente")}
                                />
                                <label htmlFor="paciente">Paciente</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="prescritor"
                                    name="userType"
                                    value="prescritor"
                                    checked={userType === "prescritor"}
                                    onChange={() => setUserType("prescritor")}
                                />
                                <label htmlFor="prescritor">Prescritor</label>
                            </div>
                        </div>
                        {userType && (
                            <>
                                <div className="form__content__form__input-group">
                                    <label htmlFor="nomeCompleto">Nome Completo *</label>
                                    <input
                                        id="nomeCompleto"
                                        name="nomeCompleto"
                                        type="text"
                                        required={true}
                                        placeholder="Digite seu nome completo" />
                                </div>
                                <div className="form__content__form__input-group">
                                    <label htmlFor="cpf">CPF:</label>
                                    <input
                                        type="text"
                                        id="cpf"
                                        name="cpf"
                                        value={cpf}
                                        onChange={handleCpf}
                                        placeholder="000.000.000-00"
                                        maxLength="14"
                                    />
                                </div>
                                <div className="form__content__form__input-group">
                                    <label htmlFor="email">E-mail *</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required={true}
                                        placeholder="seu@email.com"
                                    />
                                </div>
                                <div className="form__content__form__input-group">
                                    <label htmlFor="dataNascimento">Data de Nascimento *</label>
                                    <input
                                        id="dataNascimento"
                                        name="dataNascimento"
                                        type="date"
                                        required={true}
                                    />
                                </div>
                                <div className="form__content__form__input-group">
                                    <label htmlFor="telefone">Telefone *</label>
                                    <input
                                        id="telefone"
                                        name="telefone"
                                        type="tel"
                                        required={true}
                                        placeholder="(00) 00000-0000"
                                    />
                                </div>
                                <div className="form__content__form__input-group">
                                    <label htmlFor="endereco">Endereço *</label>
                                    <input
                                        id="endereco"
                                        name="endereco"
                                        type="text"
                                        required={true}
                                        placeholder="Rua, número, bairro, cidade, estado"
                                    />
                                </div>
                                <div className="form__content__form__input-group">
                                    <label htmlFor="senha">Senha *</label>
                                    <input
                                        id="senha"
                                        name="senha"
                                        type="password"
                                        required={true}
                                        placeholder="Digite sua senha"
                                    />
                                </div>
                                <div className="form__content__form__input-group">
                                    <label htmlFor="confirmarSenha">Confirmar Senha *</label>
                                    <input
                                        id="confirmarSenha"
                                        name="confirmarSenha"
                                        type="password"
                                        required={true}
                                        placeholder="Confirme sua senha"
                                    />
                                </div>
                            </>
                        )}
                        {userType === "paciente" && (
                            <div className="form__content__form__input-group">
                                <label htmlFor="codigoProfissional">Código do Profissional *</label>
                                <input
                                    id="codigoProfissional"
                                    name="codigoProfissional"
                                    type="text" required={true}
                                    placeholder="Código fornecido pelo profissional"
                                />
                                <p className="text-sm text-muted-foreground">
                                    Digite o código fornecido pelo seu profissional de saúde para estabelecer o vínculo.
                                </p>
                            </div>
                        )}
                        {userType === "prescritor" && (
                            <>
                                <div className="form__content__form__input-group">
                                    <label htmlFor="profissao">Profissão *</label>
                                    <input
                                        id="profissao"
                                        name="profissao"
                                        type="text"
                                        required={true}
                                        placeholder="Ex: Médico, Enfermeiro, Psicólogo"
                                    />
                                </div>
                                <div className="form__content__form__input-group">
                                    <label htmlFor="tipoRegistro">Tipo de Registro *</label>
                                    <select id="tipoRegistro" name="tipoRegistro" required={true}>
                                        <option value="">Selecione o tipo</option>
                                        <option value="crm">CRM - Conselho Regional de Medicina</option>
                                        <option value="coren">COREN - Conselho Regional de Enfermagem</option>
                                        <option value="crbm">CRBM - Conselho Regional de Biomedicina</option>
                                        <option value="crp">CRP - Conselho Regional de Psicologia</option>
                                        <option value="crf">CRF - Conselho Regional de Farmácia</option>
                                        <option value="crefito">CREFITO - Conselho Regional de Fisioterapia</option>
                                        <option value="cro">CRO - Conselho Regional de Odontologia</option>
                                        <option value="crn">CRN - Conselho Regional de Nutrição</option>
                                    </select>
                                </div>
                                <div className="form__content__form__input-group">
                                    <label htmlFor="numeroRegistro">Número do Registro Profissional *</label>
                                    <input
                                        id="numeroRegistro"
                                        name="numeroRegistro"
                                        type="text"
                                        required={true}
                                        placeholder="Ex: 123456"
                                    />
                                </div>
                                <div className="form__content__form__input-group">
                                    <label htmlFor="codigoUnico">Código Único do Profissional *</label>
                                    <input
                                        id="codigoUnico"
                                        name="codigoUnico"
                                        type="text"
                                        required={true}
                                        placeholder="Código único gerado automaticamente" disabled
                                    />
                                    <p className="text-sm text-muted-foreground">
                                        Este código será gerado automaticamente e utilizado pelos seus pacientes para estabelecer vínculo.
                                    </p>
                                </div>
                            </>
                        )}
                        {userType && (
                            <div className="form__content__form__actions">
                                <button type="submit">Cadastrar</button>
                            </div>
                        )}
                    </form>
                </div>
            </section>
            <section className="sign__art">
                <img
                    alt="Logotipo 2AG"
                    className="sign__art__top-left"
                    src="/images/logotipo-icon.svg"
                />
                <img
                    alt="Logotipo 2AG"
                    className="sign__art__top-right"
                    src="/images/logotipo-icon.svg"
                />
                <img
                    alt="Logotipo 2AG"
                    className="sign__art__center"
                    src="/images/logotipo-vertical.svg"
                />
                <img
                    alt="Logotipo 2AG"
                    className="sign__art__bottom-left"
                    src="/images/logotipo-icon.svg"
                />
                <img
                    alt="Logotipo 2AG"
                    className="sign__art__bottom-right"
                    src="/images/logotipo-icon.svg"
                />
            </section>
        </div>
    );
}
