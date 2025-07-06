import { useNavigate } from 'react-router-dom';
import './lista-paciente.css';
import '../../styles/colors.css';
import '../../styles/fonts.css';
import '../../styles/button.css';

export default function ListaPacientes() {
    const navigate = useNavigate();

    // Dados de exemplo para simulação. Em um app real, viria de uma API.
    const todosPacientes = [
        { id: '1', nome: 'João da Silva', idade: 45, status: 'Ativo' },
        { id: '2', nome: 'Maria Oliveira', idade: 62, status: 'Inativo' },
    ];

    // Filtra para mostrar apenas pacientes com status 'Ativo'
    const pacientesAtivos = todosPacientes.filter(p => p.status === 'Ativo');

    const handleSelectScales = (pacienteId) => {
        navigate(`/paciente/${pacienteId}/selecao-escalas`);
    };

    const handleViewHistory = (pacienteId) => {
        navigate(`/paciente/${pacienteId}/historico`);
    };

    const handleReturn = () => {
        navigate('/dashboard-prescritor');
    };

    return (
        <div className="lista-pacientes-page">
            <header className="lp-header">
                <div className="lp-header-left">
                    <img src="/images/logotipo-icon.svg" alt="Logo" className="lp-logo" />
                </div>
                <nav className="lp-header-nav">
                    <button className="button-secondary" onClick={handleReturn}>Voltar</button>
                </nav>
            </header>

            <main className="lp-main">
                <div className="lp-pacientes-header">
                    <h2>Pacientes Ativos</h2>
                    <input type="text" placeholder="Buscar paciente ativo..." className="lp-busca-paciente" />
                </div>

                <div className="lp-pacientes-lista">
                    {pacientesAtivos.map(paciente => (
                        <div key={paciente.id} className="lp-paciente-card">
                            <div className="lp-paciente-info-wrapper">
                                <div className="lp-paciente-avatar">{paciente.nome.charAt(0)}</div>
                                <div className="lp-paciente-info">
                                    <h3>{paciente.nome}</h3>
                                    <p>{paciente.idade} anos</p>
                                </div>
                                <div className="lp-paciente-status">
                                    <span className="lp-status-dot"></span>
                                    Ativo
                                </div>
                            </div>
                            <div className="lp-paciente-actions">
                                <button className="button-tertiary" onClick={() => handleSelectScales(paciente.id)}>
                                    Gerenciar Escalas
                                </button>
                                <button className="button-tertiary" onClick={() => handleViewHistory(paciente.id)}>
                                    Ver Histórico
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}