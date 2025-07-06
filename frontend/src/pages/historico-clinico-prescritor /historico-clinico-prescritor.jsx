import { useNavigate, useParams } from 'react-router-dom';
import './historico-clinico-prescritor.css';
import '../../styles/colors.css';
import '../../styles/fonts.css';
import '../../styles/button.css';


// Os dados seriam buscados de uma API usando o pacienteId
const dadosHistoricoPacientes = {
    '1': {
        nome: 'João da Silva',
        anamnese: "Paciente relata início de sintomas de ansiedade há cerca de 6 meses, associados a estresse no trabalho. Refere dificuldade para dormir, irritabilidade e falta de concentração. Nega histórico familiar de transtornos psiquiátricos. Tabagista (10 cigarros/dia), etilista social.",
        diagnosticos: [
            { id: 1, data: '15/05/2025', diagnostico: 'Transtorno de Ansiedade Generalizada (CID-10 F41.1)' },
            { id: 2, data: '22/03/2025', diagnostico: 'Hipertensão Arterial Sistêmica (CID-10 I10)' },
        ],
        tratamentos: [
            { id: 1, data: '15/05/2025', tratamento: 'Psicoterapia Cognitivo-Comportamental (TCC), sessões semanais.' },
            { id: 2, data: '15/05/2025', tratamento: 'Atividade física regular (3x por semana).' },
        ],
        prescricoes: [
            { id: 1, data: '15/05/2025', medicamento: 'Sertralina', dose: '50mg', posologia: '1 comprimido pela manhã' },
            { id: 2, data: '22/03/2025', medicamento: 'Losartana Potássica', dose: '50mg', posologia: '1 comprimido pela manhã' },
        ]
    },
};

export default function HistoricoClinicoPrescritor() {
    const navigate = useNavigate();
    const { pacienteId } = useParams();

    // Busca os dados do paciente com base no ID da URL
    const dadosPaciente = dadosHistoricoPacientes[pacienteId] || {};
    const nomePaciente = dadosPaciente.nome || 'Paciente não encontrado';

    const handleReturn = () => {
        navigate('/dashboard-prescritor');
    };

    return (
        <div className="historico-prescritor-page">
            <header className="historico-header">
                <div className="header-left">
                    <img src="/images/logotipo-icon.svg" alt="Logo" className="logo" />
                </div>
                <nav className="header-nav">
                    <button className="button-secondary" onClick={handleReturn}>Voltar</button>
                </nav>
            </header>

            <main className="historico-main">
                <div className="historico-title">
                    <h1>Histórico Clínico do Paciente</h1>
                </div>
                <p className="historico-subtitle">
                    Visualizando o histórico completo de <strong>{nomePaciente}</strong>.
                </p>

                <div className="historico-content">
                    {/* Seção de Anamnese */}
                    <section className="historico-section">
                        <h2>Anamnese</h2>
                        <p>{dadosPaciente.anamnese || 'Nenhuma informação de anamnese registrada.'}</p>
                    </section>

                    {/* Seção de Diagnósticos */}
                    <section className="historico-section">
                        <h2>Diagnósticos</h2>
                        <ul className="historico-lista">
                            {dadosPaciente.diagnosticos?.length > 0 ? dadosPaciente.diagnosticos.map(item => (
                                <li key={item.id}><strong>{item.data}:</strong> {item.diagnostico}</li>
                            )) : <li>Nenhum diagnóstico registrado.</li>}
                        </ul>
                    </section>

                    {/* Seção de Tratamentos */}
                    <section className="historico-section">
                        <h2>Tratamentos</h2>
                        <ul className="historico-lista">
                            {dadosPaciente.tratamentos?.length > 0 ? dadosPaciente.tratamentos.map(item => (
                                <li key={item.id}><strong>{item.data}:</strong> {item.tratamento}</li>
                            )) : <li>Nenhum tratamento registrado.</li>}
                        </ul>
                    </section>

                    {/* Seção de Prescrições Anteriores */}
                    <section className="historico-section">
                        <h2>Prescrições Anteriores</h2>
                        <div className="prescricoes-container">
                            {dadosPaciente.prescricoes?.length > 0 ? dadosPaciente.prescricoes.map(item => (
                                <div key={item.id} className="prescricao-item">
                                    <h4>{item.medicamento}</h4>
                                    <span>{item.data}</span>
                                    <p><strong>Dose:</strong> {item.dose}</p>
                                    <p><strong>Posologia:</strong> {item.posologia}</p>
                                </div>
                            )) : <p>Nenhuma prescrição anterior registrada.</p>}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}