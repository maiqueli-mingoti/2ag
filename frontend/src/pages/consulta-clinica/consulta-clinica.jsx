import "../../styles/colors.css";
import "../../styles/fonts.css";
import "../../styles/button.css";
import "../../styles/input.css";
import "./consulta-clinica.css";
import { useState } from "react";

export default function ConsultaClinica() {
    const [abaAtiva, setAbaAtiva] = useState('observacoes');
    return (
        <div className="consulta-clinica">
            <header className="consulta-header">
                <div className="header-left">
                    <img src="/images/logotipo-icon.svg" alt="Logo" className="logo" />
                </div>
                <nav className="header-nav">
                    <button className="button-secondary">Voltar</button>
                </nav>
            </header>

            <main className="consulta-main">
                <div className="consulta-title">
                    <h1>Consulta</h1>
                    <p>João Silva - Consulta: 15/01/2025</p>
                </div>
                <div className="consulta-layout">
                    {/* Sidebar com informações do paciente */}
                    <aside className="consulta-sidebar">
                        <div className="paciente-card">
                            <div className="paciente-avatar">JS</div>
                            <div className="paciente-info">
                                <h2>João Silva</h2>
                                <p>45 anos • Masculino</p>
                                <p>CPF: 123.456.789-00</p>
                                <p>Telefone: (11) 99999-9999</p>
                            </div>
                        </div>

                        <div className="historico-section">
                            <h3>Histórico Recente</h3>
                            <div className="historico-item">
                                <div className="historico-date">08/01/2025</div>
                                <div className="historico-content">
                                    <p>Acompanhamento semanal</p>
                                    <span>Melhora nos sintomas de ansiedade</span>
                                </div>
                            </div>
                            <div className="historico-item">
                                <div className="historico-date">01/01/2025</div>
                                <div className="historico-content">
                                    <p>Primeira consulta</p>
                                    <span>Prescrição inicial CBD 5%</span>
                                </div>
                            </div>
                        </div>

                        <div className="prescricoes-ativas">
                            <h3>Prescrições Ativas</h3>
                            <div className="prescricao-item">
                                <h4>CBD Full Spectrum 5%</h4>
                                <p>2 gotas, 2x ao dia</p>
                                <span className="prescricao-numero">#2024-001</span>
                            </div>
                        </div>
                    </aside>

                    {/* Conteúdo principal da consulta */}
                    <div className="consulta-content">
                        <div className="consulta-tabs">
                            <button
                                className={`tab-button ${abaAtiva === 'observacoes' ? 'active' : ''}`}
                                onClick={() => setAbaAtiva('observacoes')}
                            >
                                Observações
                            </button>
                            <button
                                className={`tab-button ${abaAtiva === 'objetivos' ? 'active' : ''}`}
                                onClick={() => setAbaAtiva('objetivos')}
                            >
                                Objetivos
                            </button>
                            <button
                                className={`tab-button ${abaAtiva === 'arquivos' ? 'active' : ''}`}
                                onClick={() => setAbaAtiva('arquivos')}
                            >
                                Arquivos
                            </button>
                            <button
                                className={`tab-button ${abaAtiva === 'escalas' ? 'active' : ''}`}
                                onClick={() => setAbaAtiva('escalas')}
                            >
                                Escalas
                            </button>
                        </div>

                        {/* Aba de Observações */}
                        <div className={`tab-content ${abaAtiva === 'observacoes' ? 'active' : ''}`}>
                            <div className="observacoes-section">
                                <h3>Observações Clínicas</h3>
                                <div className="form-group">
                                    <label htmlFor="queixa-principal">Queixa Principal</label>
                                    <textarea
                                        id="queixa-principal"
                                        placeholder="Descreva a queixa principal do paciente..."
                                        rows="3"
                                    ></textarea>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exame-fisico">Exame Físico</label>
                                    <textarea
                                        id="exame-fisico"
                                        placeholder="Registre os achados do exame físico..."
                                        rows="4"
                                    ></textarea>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="evolucao">Evolução do Tratamento</label>
                                    <textarea
                                        id="evolucao"
                                        placeholder="Descreva a evolução desde a última consulta..."
                                        rows="4"
                                    ></textarea>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="pressao">Pressão Arterial</label>
                                        <input
                                            id="pressao"
                                            type="text"
                                            placeholder="120/80 mmHg"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="peso">Peso (kg)</label>
                                        <input
                                            id="peso"
                                            type="number"
                                            placeholder="70"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="altura">Altura (cm)</label>
                                        <input
                                            id="altura"
                                            type="number"
                                            placeholder="175"
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="observacoes-gerais">Observações Gerais</label>
                                    <textarea
                                        id="observacoes-gerais"
                                        placeholder="Outras observações relevantes..."
                                        rows="3"
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        {/* Aba de Objetivos */}
                        <div className={`tab-content ${abaAtiva === 'objetivos' ? 'active' : ''}`}>
                        <div className="tab-content">
                            <div className="objetivos-section">
                                <h3>Objetivos Terapêuticos</h3>
                                <div className="objetivo-item">
                                    <div className="form-group">
                                        <label htmlFor="objetivo-1">Objetivo Principal</label>
                                        <input
                                            id="objetivo-1"
                                            type="text"
                                            placeholder="Ex: Reduzir ansiedade em 50%"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="prazo-1">Prazo</label>
                                        <input
                                            id="prazo-1"
                                            type="date"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="metrica-1">Métrica de Avaliação</label>
                                        <select id="metrica-1">
                                            <option>Escala de Hamilton</option>
                                            <option>Escala de Beck</option>
                                            <option>Qualidade do Sono</option>
                                            <option>Autorrelato</option>
                                        </select>
                                    </div>
                                </div>
                                <button className="button-secondary">+ Adicionar Objetivo</button>
                            </div>
                        </div>
                        </div>

                        {/* Aba de Arquivos */}
                        <div className={`tab-content ${abaAtiva === 'arquivos' ? 'active' : ''}`}>
                            <div className="arquivos-section">
                                <h3>Arquivos e Documentos</h3>
                                <div className="upload-area">
                                    <div className="upload-icon">📁</div>
                                    <p>Arraste arquivos aqui ou clique para selecionar</p>
                                </div>
                                <button className="button-secondary">Selecionar Arquivos</button>
                                <div className="arquivos-lista">

                                </div>
                            </div>
                        </div>

                        {/* Aba de Escalas */}
                        <div className={`tab-content ${abaAtiva === 'escalas' ? 'active' : ''}`}>
                        <div className="escalas-section">
                                <h3>Escalas Clínicas</h3>
                                <div className="escala-item">
                                    <div className="escala-info">
                                        <h4>Escala de Hamilton (Ansiedade)</h4>
                                        <p>Última aplicação: 08/01/2025</p>
                                        <span className="escala-resultado">Pontuação: 18 (Ansiedade moderada)</span>
                                    </div>
                                    <div className="escala-actions">
                                        <button className="button-secondary">Ver histórico</button>
                                        <button className="button">Aplicar novamente</button>
                                    </div>
                                </div>
                                <div className="escala-item">
                                    <div className="escala-info">
                                        <h4>Índice de Qualidade do Sono</h4>
                                        <p>Última aplicação: 01/01/2025</p>
                                        <span className="escala-resultado">Pontuação: 12 (Qualidade ruim)</span>
                                    </div>
                                    <div className="escala-actions">
                                        <button className="button-secondary">Ver histórico</button>
                                        <button className="button">Aplicar novamente</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Ações da consulta */}
                        <div className="consulta-actions">
                            <div className="actions-left">
                                <button className="button-secondary">Salvar Rascunho</button>
                                <span className="auto-save">Salvo automaticamente às 14:35</span>
                            </div>
                            <div className="actions-right">
                                <button className="button-secondary">Nova Prescrição</button>
                                <button className="button">Finalizar Consulta</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

