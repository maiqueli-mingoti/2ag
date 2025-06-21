import "../../styles/colors.css";
import "../../styles/fonts.css";
import "../../styles/button.css";
import "../../styles/input.css";
import "./prescricao.css";

export default function Prescricao() {
    return (
        <div className="prescricao">
            <header className="prescricao-header">
                <div className="prescricao-header__nav">
                    <button className="button-secondary">← Voltar</button>
                    <img
                        alt="Logotipo 2AG"
                        className="prescricao-header__logo"
                        src="/images/logotipo-horizontal.svg"
                    />
                </div>
                <div className="prescricao-header__info">
                    <h1>Nova Prescrição</h1>
                    <p>João Silva - Consulta: 15/01/2025</p>
                </div>
            </header>

            <main className="prescricao-main">
                <div className="prescricao-layout"> {/* Dados do paciente*/}
                    <aside className="prescricao-sidebar">
                        <div className="paciente-card">
                            <div className="paciente-avatar">JS</div>
                            <div className="paciente-info">
                                <h2>João Silva</h2>
                                <p>45 anos • Masculino</p>
                                <p>Peso: 75kg • Altura: 175cm</p>
                            </div>
                        </div>


                    </aside>

                    {/* Formulário de prescrição */}
                    <div className="prescricao-content">
                        <form className="prescricao-form">
                            <div className="form-section">
                                <h3>Informações da Prescrição</h3>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="numero-controle">Número de Controle</label>
                                        <input
                                            id="numero-controle"
                                            type="text"
                                            value="2025-003"
                                            readOnly
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="data-prescricao">Data da Prescrição</label>
                                        <input
                                            id="data-prescricao"
                                            type="date"
                                            value="2025-01-15"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-section">
                                <h3>Medicamento</h3>

                                <div className="form-group">
                                    <label htmlFor="formulacao">Formulação</label>
                                    <select id="formulacao">
                                        <option value="">Selecione a formulação</option>
                                        <option value="isolado">CBD Isolado</option>
                                        <option value="broad">CBD Broad Spectrum</option>
                                        <option value="full">CBD Full Spectrum</option>
                                        <option value="thc-isolado">THC Isolado</option>
                                        <option value="thc-cbd">THC + CBD</option>
                                    </select>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="concentracao">Concentração (%)</label>
                                        <select id="concentracao">
                                            <option value="">Selecione</option>
                                            <option value="2.5">2,5%</option>
                                            <option value="5">5%</option>
                                            <option value="10">10%</option>
                                            <option value="15">15%</option>
                                            <option value="20">20%</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="volume">Volume (ml)</label>
                                        <select id="volume">
                                            <option value="">Selecione</option>
                                            <option value="10">10ml</option>
                                            <option value="30">30ml</option>
                                            <option value="50">50ml</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="form-section">
                                <h3>Posologia</h3>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="dosagem">Dosagem Inicial</label>
                                        <input
                                            id="dosagem"
                                            type="text"
                                            placeholder="Ex: 2 gotas"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="frequencia">Frequência</label>
                                        <select id="frequencia">
                                            <option value="">Selecione</option>
                                            <option value="1x">1x ao dia</option>
                                            <option value="2x">2x ao dia</option>
                                            <option value="3x">3x ao dia</option>
                                            <option value="sos">Se necessário</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="horario">Horário</label>
                                        <input
                                            id="horario"
                                            type="text"
                                            placeholder="Ex: Manhã e noite"
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="via-administracao">Via de Administração</label>
                                    <select id="via-administracao">
                                        <option value="">Selecione</option>
                                        <option value="sublingual">Sublingual</option>
                                        <option value="oral">Oral</option>
                                        <option value="topica">Tópica</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-section">
                                <h3>Protocolo de Escalonamento</h3>

                                <div className="escalonamento-item">
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="semana-1">Semana 1</label>
                                            <input
                                                id="semana-1"
                                                type="text"
                                                placeholder="Ex: 1 gota, 2x ao dia"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="observacao-1">Observação</label>
                                            <input
                                                id="observacao-1"
                                                type="text"
                                                placeholder="Observações para esta fase"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="escalonamento-item">
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="semana-2">Semana 2</label>
                                            <input
                                                id="semana-2"
                                                type="text"
                                                placeholder="Ex: 2 gotas, 2x ao dia"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="observacao-2">Observação</label>
                                            <input
                                                id="observacao-2"
                                                type="text"
                                                placeholder="Observações para esta fase"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <button type="button" className="button-secondary">+ Adicionar Semana</button>
                            </div>

                            <div className="form-section">
                                <h3>Instruções Específicas</h3>

                                <div className="form-group">
                                    <label htmlFor="instrucoes">Instruções de Uso</label>
                                    <textarea
                                        id="instrucoes"
                                        rows="4"
                                        placeholder="Instruções detalhadas para o paciente sobre como usar o medicamento..."
                                    ></textarea>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="precaucoes">Precauções e Contraindicações</label>
                                    <textarea
                                        id="precaucoes"
                                        rows="3"
                                        placeholder="Precauções importantes e contraindicações..."
                                    ></textarea>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="efeitos-esperados">Efeitos Esperados</label>
                                    <textarea
                                        id="efeitos-esperados"
                                        rows="3"
                                        placeholder="Descreva os efeitos esperados do tratamento..."
                                    ></textarea>
                                </div>
                            </div>

                            <div className="form-section">
                                <h3>Acompanhamento</h3>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="proxima-consulta">Próxima Consulta</label>
                                        <input
                                            id="proxima-consulta"
                                            type="date"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="duracao-tratamento">Duração do Tratamento</label>
                                        <select id="duracao-tratamento">
                                            <option value="">Selecione</option>
                                            <option value="30">30 dias</option>
                                            <option value="60">60 dias</option>
                                            <option value="90">90 dias</option>
                                            <option value="continuo">Contínuo</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="escalas-acompanhamento">Escalas de Acompanhamento</label>
                                    <div className="checkbox-group">
                                        <label className="checkbox-item">
                                            <input type="checkbox" />
                                            <span>Escala de Hamilton (Ansiedade)</span>
                                        </label>
                                        <label className="checkbox-item">
                                            <input type="checkbox" />
                                            <span>Índice de Qualidade do Sono</span>
                                        </label>
                                        <label className="checkbox-item">
                                            <input type="checkbox" />
                                            <span>Escala de Beck (Depressão)</span>
                                        </label>
                                        <label className="checkbox-item">
                                            <input type="checkbox" />
                                            <span>Mini-Mental</span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="prescricao-actions">
                                <div className="actions-left">
                                    <button type="button" className="button-secondary">Salvar Rascunho</button>
                                    <button type="button" className="button-secondary">Visualizar</button>
                                </div>
                                <div className="actions-right">
                                    <button type="button" className="button-secondary">Cancelar</button>
                                    <button type="submit" className="button">Emitir Prescrição</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}