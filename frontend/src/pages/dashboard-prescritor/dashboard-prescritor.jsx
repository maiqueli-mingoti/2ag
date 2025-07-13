import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/colors.css";
import "../../styles/fonts.css";
import "../../styles/button.css";
import "../../styles/input.css";
import "./dashboard-prescritor.css";

function parseJwt(token) {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
        return null;
    }
}

export default function DashboardPrescritor() {
    const navigate = useNavigate();

    const [prescritorInfo, setPrescritorInfo] = useState(null);
    const [dashboardData, setDashboardData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem("authToken");
            if (!token) {
                setError("Token de autenticação não encontrado.");
                setIsLoading(false);
                navigate("/login");
                return;
            }

            const decodedToken = parseJwt(token);
            const userId = decodedToken?.id;

            if (!userId) {
                setError("Não foi possível obter o ID do usuário a partir do token.");
                setIsLoading(false);
                return;
            }

            try {
                const [prescritorResponse, dashboardResponse] = await Promise.all([
                    fetch(`http://localhost:8080/prescritor/${userId}`, {
                        headers: { "Authorization": `Bearer ${token}` }
                    } ),
                    fetch(`http://localhost:8080/dashboard/prescritor/${userId}`, {
                        headers: { "Authorization": `Bearer ${token}` }
                    } )
                ]);

                if (!prescritorResponse.ok) {
                    throw new Error(`Falha ao buscar dados do prescritor (Erro ${prescritorResponse.status})`);
                }
                if (!dashboardResponse.ok) {
                    throw new Error(`Falha ao buscar dados do painel (Erro ${dashboardResponse.status})`);
                }

                const prescritorData = await prescritorResponse.json();
                const dashboardApiData = await dashboardResponse.json();

                setPrescritorInfo(prescritorData);
                setDashboardData(dashboardApiData);

            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [navigate]);


    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem("authToken");
        navigate("/login");
    };

    const handleNewConsult = (e) => { e.preventDefault(); navigate("/consulta"); };
    const handleNewPrescription = (e) => { e.preventDefault(); navigate("/prescricao"); };
    const handleAgenda = (e) => { e.preventDefault(); navigate("/agendamento-prescritor"); };
    const handleNotificacoes = (e) => { e.preventDefault(); navigate("/notificacoes-prescritor"); };
    const handleSignup = (e) => { e.preventDefault(); navigate("/sign-up"); };
    const handlePaciente = (e) => { e.preventDefault(); navigate("/lista-paciente"); };

    if (isLoading) {
        return <div className="dashboard-loading"><h1>Carregando dados do painel...</h1></div>;
    }

    if (error) {
        return <div className="dashboard-error"><h1>Erro ao carregar o painel</h1><p>{error}</p><button onClick={() => navigate('/login')}>Voltar ao Login</button></div>;
    }

    return (
        <div className="dashboard-prescritor">
            <header className="dashboard-header">
                <img src="/images/logotipo-icon.svg" alt="Logo" className="logo" />
                <div className="dashboard-header__user">
                    <span>{prescritorInfo?.name || 'Nome do Doutor'} - {prescritorInfo?.registryType || 'CRM'} {prescritorInfo?.registryNumber || '00000'}</span>
                    <button className="button-secondary" onClick={handleNotificacoes}>Notificações</button>
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
                    <div className="stat-card" onClick={handlePaciente}>
                        <div className="stat-number">{dashboardData?.stats?.pacientesAtivos ?? 0}</div>
                        <div className="stat-label">Pacientes Ativos</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">{dashboardData?.stats?.consultasHoje ?? 0}</div>
                        <div className="stat-label">Consultas Hoje</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">{dashboardData?.stats?.fichasPendentes ?? 0}</div>
                        <div className="stat-label">Fichas Pendentes</div>
                    </div>
                    <div className="stat-card warning">
                        <div className="stat-number">{dashboardData?.stats?.alertasClinicos ?? 0}</div>
                        <div className="stat-label">Alertas Clínicos</div>
                    </div>
                </div>

                {/* Ações Rápidas */}
                <section className="dashboard-actions">
                    <h2>Ações Rápidas</h2>
                    <div className="actions-grid">
                        <button className="action-button" onClick={handleSignup}>
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
                        <button className="action-button" onClick={handleAgenda}>
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
                            <span className="card-badge">{dashboardData?.agendamentos?.length ?? 0} consultas</span>
                        </div>
                        <div className="card-content">
                            {dashboardData?.agendamentos?.length > 0 ? (
                                dashboardData.agendamentos.map(agendamento => (
                                    <div key={agendamento.id} className="agendamento-item-wrapper">
                                        <div className="agendamento-item">
                                            <div className="agendamento-time">{agendamento.horario}</div>
                                            <div className="agendamento-info">
                                                <h3>{agendamento.nomePaciente}</h3>
                                                <p>{agendamento.tipoConsulta}</p>
                                                <span className={`agendamento-tipo ${agendamento.modalidade?.toLowerCase()}`}>{agendamento.modalidade}</span>
                                            </div>
                                        </div>
                                        <button className="button-secondary">Iniciar</button>
                                    </div>
                                ))
                            ) : (
                                <p>Nenhum agendamento para hoje.</p>
                            )}
                        </div>
                        <div className="card-footer">
                            <button className="button" onClick={handleAgenda}>Ver todos os agendamentos</button>
                        </div>
                    </section>

                    {/* Fichas Pendentes */}
                    <section className="dashboard-card">
                        <div className="card-header">
                            <h2>Fichas Pendentes de Análise</h2>
                            <span className="card-badge warning">{dashboardData?.fichasPendentes?.length ?? 0} pendentes</span>
                        </div>
                        <div className="card-content">
                            {dashboardData?.fichasPendentes?.length > 0 ? (
                                dashboardData.fichasPendentes.map(ficha => (
                                    <div key={ficha.id} className="ficha-item-wrapper">
                                        <div className="ficha-item">
                                            <div className="ficha-info">
                                                <h3>{ficha.nomePaciente}</h3>
                                                <p>{ficha.tipo}</p>
                                                <span className="ficha-data">{ficha.dataEnvio}</span>
                                            </div>
                                            <div className={`ficha-priority ${ficha.prioridade?.toLowerCase()}`}>{ficha.prioridade}</div>
                                        </div>
                                        <button className="button-secondary">Analisar</button>
                                    </div>
                                ))
                            ) : (
                                <p>Nenhuma ficha pendente.</p>
                            )}
                        </div>
                        <div className="card-footer">
                            <button className="button">Ver todas as fichas</button>
                        </div>
                    </section>

                    {/* Alertas Clínicos */}
                    <section className="dashboard-card alert-card">
                        <div className="card-header">
                            <h2>Alertas Clínicos</h2>
                            <span className="card-badge danger">{dashboardData?.alertas?.length ?? 0} alertas</span>
                        </div>
                        <div className="card-content">
                            {dashboardData?.alertas?.length > 0 ? (
                                dashboardData.alertas.map(alerta => (
                                    <div key={alerta.id} className="alert-item-wrapper">
                                        <div className={`alert-item ${alerta.nivel?.toLowerCase()}`}>
                                            <div className="alert-icon">{alerta.nivel === 'CRITICAL' ? '⚠️' : '⚡'}</div>
                                            <div className="alert-info">
                                                <h3>{alerta.nomePaciente}</h3>
                                                <p>{alerta.descricao}</p>
                                                <span className="alert-time">{alerta.data}</span>
                                            </div>
                                        </div>
                                        <button className={alerta.nivel === 'CRITICAL' ? 'button' : 'button-secondary'}>
                                            {alerta.nivel === 'CRITICAL' ? 'Verificar' : 'Contatar'}
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <p>Nenhum alerta clínico no momento.</p>
                            )}
                        </div>
                        <div className="card-footer">
                            <button className="button">Ver todos os alertas</button>
                        </div>
                    </section>

                    {/* Pacientes Recentes */}
                    <section className="dashboard-card">
                        <div className="card-header">
                            <h2>Pacientes Recentes</h2>
                            <span className="card-badge">Últimas atividades</span>
                        </div>
                        <div className="card-content">
                            {dashboardData?.pacientesRecentes?.length > 0 ? (
                                dashboardData.pacientesRecentes.map(paciente => (
                                    <div key={paciente.id} className="paciente-item-wrapper">
                                        <div className="paciente-item">
                                            <div className="paciente-avatar">{paciente.iniciais}</div>
                                            <div className="paciente-info">
                                                <h3>{paciente.nome}</h3>
                                                <p>Última consulta: {paciente.ultimaConsulta}</p>
                                                <span className={`paciente-status ${paciente.status?.toLowerCase().replace(' ', '-')}`}>{paciente.status}</span>
                                            </div>
                                        </div>
                                        <button className="button-secondary">Ver prontuário</button>
                                    </div>
                                ))
                            ) : (
                                <p>Nenhuma atividade recente de pacientes.</p>
                            )}
                        </div>
                        <div className="card-footer">
                            <button className="button" onClick={handlePaciente}>Ver todos os pacientes</button>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}