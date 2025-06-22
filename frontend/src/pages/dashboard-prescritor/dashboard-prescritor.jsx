import "../../styles/colors.css";
import "../../styles/fonts.css";
import "../../styles/button.css";
import "../../styles/input.css";
import "./dashboard-prescritor.css";
import { useNavigate } from "react-router";

export default function DashboardPrescritor() {
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();

        navigate("/login");
    };

    const handleNewConsult = (e) => {
        e.preventDefault();

        navigate("/consulta");
    }

    const handleNewPrescription = (e) => {
        e.preventDefault();

        navigate("/prescricao");
    }


    return (
        <div className="dashboard-prescritor">
            <header className="dashboard-header">
                <img src="/images/logotipo-icon.svg" alt="Logo" className="logo" />
                <div className="dashboard-header__user">
                    <span>Dr. Maria Santos - CRM 12345</span>
                    <button className="button-secondary" onClick={handleLogout}>Sair</button>
                </div>
            </header>

            <main className="dashboard-main">
                <div className="dashboard-welcome">
                    <h1>Painel do Prescritor!</h1>
                    <p>Gerencie seus pacientes, consultas e acompanhe a evolução dos tratamentos.</p>
                </div>

                {/* Estatísticas Rápidas */}
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-number">24</div>
                        <div className="stat-label">Pacientes Ativos</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">8</div>
                        <div className="stat-label">Consultas Hoje</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">12</div>
                        <div className="stat-label">Fichas Pendentes</div>
                    </div>
                    <div className="stat-card warning">
                        <div className="stat-number">3</div>
                        <div className="stat-label">Alertas Clínicos</div>
                    </div>
                </div>

                {/* Ações Rápidas */}
                <section className="dashboard-actions">
                    <h2>Ações Rápidas</h2>
                    <div className="actions-grid">
                        <button className="action-button">
                            <span className="action-icon">👥</span>
                            <span>Novo Paciente</span>
                        </button>
                        <button className="action-button" onClick={handleNewConsult}>
                            <span className="action-icon">📋</span>
                            <span>Nova Consulta</span>
                        </button>
                        <button className="action-button" onClick={handleNewPrescription}>
                            <span className="action-icon">💊</span>
                            <span>Nova Prescrição</span>
                        </button>
                        <button className="action-button">
                            <span className="action-icon">📅</span>
                            <span>Agenda</span>
                        </button>
                        <button className="action-button">
                            <span className="action-icon">⚙️</span>
                            <span>Configurações</span>
                        </button>
                    </div>
                </section>

                <div className="dashboard-grid">
                    {/* Agendamentos do Dia */}
                    <section className="dashboard-card">
                        <div className="card-header">
                            <h2>Agendamentos de Hoje</h2>
                            <span className="card-badge">8 consultas</span>
                        </div>
                        <div className="card-content">
                            <div className="agendamento-item">
                                <div className="agendamento-time">09:00</div>
                                <div className="agendamento-info">
                                    <h3>João Silva</h3>
                                    <p>Consulta de acompanhamento</p>
                                    <span className="agendamento-tipo">Presencial</span>
                                </div>
                            </div>
                            <button className="button-secondary">Iniciar</button>
                            <div className="agendamento-item">
                                <div className="agendamento-time">10:30</div>
                                <div className="agendamento-info">
                                    <h3>Ana Costa</h3>
                                    <p>Primeira consulta</p>
                                    <span className="agendamento-tipo">Telemedicina</span>
                                </div>
                            </div>
                            <button className="button-secondary">Iniciar</button>
                        </div>
                        <div className="card-footer">
                            <button className="button">Ver todos os agendamentos</button>
                        </div>
                    </section>

                    {/* Fichas Pendentes */}
                    <section className="dashboard-card">
                        <div className="card-header">
                            <h2>Fichas Pendentes de Análise</h2>
                            <span className="card-badge warning">12 pendentes</span>
                        </div>
                        <div className="card-content">
                            <div className="ficha-item">
                                <div className="ficha-info">
                                    <h3>Maria Santos</h3>
                                    <p>Acompanhamento semanal</p>
                                    <span className="ficha-data">Enviado há 2 dias</span>
                                </div>
                                <div className="ficha-priority high">Alta</div>
                            </div>
                            <button className="button-secondary">Analisar</button>
                            <div className="ficha-item">
                                <div className="ficha-info">
                                    <h3>Pedro Lima</h3>
                                    <p>Escala de ansiedade</p>
                                    <span className="ficha-data">Enviado há 1 dia</span>
                                </div>
                                <div className="ficha-priority medium">Média</div>
                            </div>
                            <button className="button-secondary">Analisar</button>
                        </div>
                        <div className="card-footer">
                            <button className="button">Ver todas as fichas</button>
                        </div>
                    </section>

                    {/* Alertas Clínicos */}
                    <section className="dashboard-card alert-card">
                        <div className="card-header">
                            <h2>Alertas Clínicos</h2>
                            <span className="card-badge danger">3 alertas</span>
                        </div>
                        <div className="card-content">
                            <div className="alert-item critical">
                                <div className="alert-icon">⚠️</div>
                                <div className="alert-info">
                                    <h3>Roberto Silva</h3>
                                    <p>Relatou efeitos adversos graves</p>
                                    <span className="alert-time">Há 30 minutos</span>
                                </div>
                            </div>
                            <button className="button">Verificar</button>
                            <div className="alert-item warning">
                                <div className="alert-icon">⚡</div>
                                <div className="alert-info">
                                    <h3>Fernanda Costa</h3>
                                    <p>Não preencheu acompanhamento há 2 semanas</p>
                                    <span className="alert-time">Há 2 horas</span>
                                </div>
                            </div>
                            <button className="button-secondary">Contatar</button>
                            <div className="alert-footer">
                                <button className="button">Ver todos os alertas</button>
                            </div>
                        </div>
                    </section>

                    {/* Pacientes Recentes */}
                    <section className="dashboard-card">
                        <div className="card-header">
                            <h2>Pacientes Recentes</h2>
                            <span className="card-badge">Últimas atividades</span>
                        </div>
                        <div className="card-content">
                            <div className="paciente-item">
                                <div className="paciente-avatar">JS</div>
                                <div className="paciente-info">
                                    <h3>João Silva</h3>
                                    <p>Última consulta: 10/01/2025</p>
                                    <span className="paciente-status ativo">Tratamento ativo</span>
                                </div>
                            </div>
                            <button className="button-secondary">Ver prontuário</button>
                            <div className="paciente-item">
                                <div className="paciente-avatar">AC</div>
                                <div className="paciente-info">
                                    <h3>Ana Costa</h3>
                                    <p>Última consulta: 08/01/2025</p>
                                    <span className="paciente-status acompanhamento">Em acompanhamento</span>
                                </div>
                            </div>
                            <button className="button-secondary">Ver prontuário</button>
                        </div>
                        <div className="card-footer">
                            <button className="button">Ver todos os pacientes</button>
                        </div>
                    </section>
                </div>


            </main>
        </div>
    );
}