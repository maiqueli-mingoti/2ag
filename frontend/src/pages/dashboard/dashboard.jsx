import React, { useState } from "react";
import './dashboard.css';

export default function Dashboard() {
    const [userType, setUserType] = useState('paciente'); // 'paciente' ou 'prescritor'

    const renderPacienteDashboard = () => (
        <div className="dashboard-content">
            <div className="welcome-section">
                <h1>Olá, Usuário!</h1>
                <p>Bem-vindo ao seu painel de controle</p>
            </div>

            <div className="dashboard-grid">
                <div className="card">
                    <h3>Próximas Consultas</h3>
                    <div className="appointment-item">
                        <span className="date">15/03/2024</span>
                        <span className="time">14:30</span>
                        <span className="doctor">Dr. Silva</span>
                    </div>
                    <div className="appointment-item">
                        <span className="date">22/03/2024</span>
                        <span className="time">10:00</span>
                        <span className="doctor">Dr. Santos</span>
                    </div>
                </div>

                <div className="card">
                    <h3>Status de Formulários</h3>
                    <div className="form-status">
                        <div className="status-item pending">
                            <span>Escala de Ansiedade</span>
                            <span className="status">Pendente</span>
                        </div>
                        <div className="status-item completed">
                            <span>Qualidade do Sono</span>
                            <span className="status">Concluído</span>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <h3>Lembretes de Escalas</h3>
                    <div className="reminder-item">
                        <span>Escala Hamilton - Vence em 2 dias</span>
                    </div>
                    <div className="reminder-item">
                        <span>Mini-Mental - Vence em 5 dias</span>
                    </div>
                </div>

                <div className="card">
                    <h3>Acompanhamento Semanal</h3>
                    <p>Última atualização: 10/03/2024</p>
                    <button className="btn btn-primary">Registrar Evolução</button>
                </div>
            </div>
        </div>
    );

    const renderPrescritorDashboard = () => (
        <div className="dashboard-content">
            <div className="welcome-section">
                <h1>Olá, Dr. Usuário!</h1>
                <p>Painel do Prescritor</p>
            </div>

            <div className="dashboard-grid">
                <div className="card">
                    <h3>Agendamentos do Dia</h3>
                    <div className="appointment-item">
                        <span className="time">09:00</span>
                        <span className="patient">João Silva</span>
                        <span className="type">Consulta</span>
                    </div>
                    <div className="appointment-item">
                        <span className="time">14:30</span>
                        <span className="patient">Maria Santos</span>
                        <span className="type">Retorno</span>
                    </div>
                </div>

                <div className="card">
                    <h3>Fichas Pendentes</h3>
                    <div className="pending-item">
                        <span>Ana Costa - Análise de Evolução</span>
                        <button className="btn btn-small">Analisar</button>
                    </div>
                    <div className="pending-item">
                        <span>Pedro Lima - Prescrição Pendente</span>
                        <button className="btn btn-small">Prescrever</button>
                    </div>
                </div>

                <div className="card">
                    <h3>Alertas Clínicos</h3>
                    <div className="alert-item high">
                        <span>Paciente relatou efeitos adversos graves</span>
                        <span className="patient-name">Carlos Oliveira</span>
                    </div>
                    <div className="alert-item medium">
                        <span>Escala de ansiedade com piora significativa</span>
                        <span className="patient-name">Lucia Ferreira</span>
                    </div>
                </div>

                <div className="card">
                    <h3>Ações Rápidas</h3>
                    <div className="quick-actions">
                        <button className="btn btn-primary">Nova Prescrição</button>
                        <button className="btn btn-secondary">Buscar Paciente</button>
                        <button className="btn btn-secondary">Relatórios</button>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <div className="header-left">
                    <img src="/images/logotipo-icon.svg" alt="Logo" className="logo" />

                </div>
                <nav className="header-nav">
                    <button className="nav-item">Configurações</button>
                    <button className="nav-item">Ajuda</button>
                    <button className="nav-item logout">Sair</button>
                </nav>
            </header>

            <main className="dashboard-main">
                {userType === 'paciente' ? renderPacienteDashboard() : renderPrescritorDashboard()}
            </main>

            {/* Toggle para demonstração - remover em produção */}
            <div className="user-type-toggle">
                <button
                    onClick={() => setUserType('paciente')}
                    className={userType === 'paciente' ? 'active' : ''}
                >
                    Paciente
                </button>
                <button
                    onClick={() => setUserType('prescritor')}
                    className={userType === 'prescritor' ? 'active' : ''}
                >
                    Prescritor
                </button>
            </div>
        </div>
    );
}
