import "../../styles/colors.css";
import "../../styles/fonts.css";
import "../../styles/button.css";
import "../../styles/input.css";
import "./dashboard-paciente.css";

export default function DashboardPaciente() {
    return (
        <div className="dashboard-paciente">
            <header className="dashboard-header">
                <div className="dashboard-header__logo">
                <img src="/images/logotipo-icon.svg" alt="Logo" className="logo" />
                <span>Paciente</span>
                    </div>
                <div className="dashboard-header__user">
                    <span>Olá, João Silva</span>
                    <button className="button-secondary">Sair</button>
                </div>
            </header>

            <main className="dashboard-main">
                <div className="dashboard-welcome">
                    <h1>Bem-vindo ao seu painel</h1>
                    <p>Acompanhe seu tratamento e mantenha-se em dia com suas consultas e escalas.</p>
                </div>

                <div className="dashboard-grid">
                    {/* Próximas Consultas */}
                    <section className="dashboard-card">
                        <div className="card-header">
                            <h2>Próximas Consultas</h2>
                            <span className="card-badge">1 agendadas</span>
                        </div>
                        <div className="card-content">
                            <div className="consulta-item">
                                <div className="consulta-info">
                                    <h3>Dr. Maria Santos</h3>
                                    <p>Consulta de acompanhamento</p>
                                    <span className="consulta-data">15/01/2025 - 14:30</span>
                                </div>
                                <button className="button-secondary">Ver detalhes</button>
                            </div>
                        </div>
                    </section>

                    {/* Status de Formulários */}
                    <section className="dashboard-card">
                        <div className="card-header">
                            <h2>Status de Formulários</h2>
                            <span className="card-badge warning">1 pendente</span>
                        </div>
                        <div className="card-content">
                            <div className="formulario-item">
                                <div className="formulario-info">
                                    <h3>Acompanhamento Semanal</h3>
                                    <p>Registre sua evolução desta semana</p>
                                </div>
                                <button className="button">Preencher</button>
                            </div>
                        </div>
                    </section>

                    {/* Lembretes de Escalas */}
                    <section className="dashboard-card">
                        <div className="card-header">
                            <h2>Lembretes de Escalas</h2>
                            <span className="card-badge">2 escalas</span>
                        </div>
                        <div className="card-content">
                            <div className="escala-item">
                                <div className="escala-info">
                                    <h3>Escala de Hamilton</h3>
                                    <p>Avaliação de ansiedade</p>
                                    <span className="escala-frequencia">Semanal - Próxima: 20/01</span>
                                </div>
                                <button className="button-secondary">Preencher</button>
                            </div>
                            <div className="escala-item">
                                <div className="escala-info">
                                    <h3>Índice de Qualidade do Sono</h3>
                                    <p>Avaliação do padrão de sono</p>
                                    <span className="escala-frequencia">Mensal - Próxima: 01/02</span>
                                </div>
                                <button className="button-secondary">Preencher</button>
                            </div>
                        </div>
                    </section>

                    {/* Prescrições Ativas */}
                    <section className="dashboard-card">
                        <div className="card-header">
                            <h2>Prescrições Ativas</h2>
                            <span className="card-badge">2 ativas</span>
                        </div>
                        <div className="card-content">
                            <div className="prescricao-item">
                                <div className="prescricao-info">
                                    <h3>CBD Full Spectrum 5%</h3>
                                    <p>2 gotas, 2x ao dia</p>
                                    <span className="prescricao-numero">Prescrição #2024-001</span>
                                </div>
                                <button className="button-secondary">Ver detalhes</button>
                            </div>
                            <div className="prescricao-item">
                                <div className="prescricao-info">
                                    <h3>THC Isolado 2.5%</h3>
                                    <p>1 gota antes de dormir</p>
                                    <span className="prescricao-numero">Prescrição #2024-002</span>
                                </div>
                                <button className="button-secondary">Ver detalhes</button>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Ações Rápidas */}
                <section className="dashboard-actions">
                    <h2>Ações Rápidas</h2>
                    <div className="actions-grid">
                        <button className="action-button">
                            <span className="action-icon">📋</span>
                            <span>Acompanhamento Semanal</span>
                        </button>
                        <button className="action-button">
                            <span className="action-icon">📊</span>
                            <span>Ver Escalas</span>
                        </button>
                        <button className="action-button">
                            <span className="action-icon">💊</span>
                            <span>Minhas Prescrições</span>
                        </button>
                        <button className="action-button">
                            <span className="action-icon">📅</span>
                            <span>Agendar Consulta</span>
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}

