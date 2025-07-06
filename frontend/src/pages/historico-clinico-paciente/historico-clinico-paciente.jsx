import { useNavigate } from 'react-router-dom';
import './historico-clinico-paciente.css';
import '../../styles/colors.css';
import '../../styles/fonts.css';
import '../../styles/button.css';
import Header from "../../components/header/header.jsx";
import React from "react";

// Dados de exemplo para simular o histórico do paciente
const dadosHistorico = {
    anamnese: "Paciente relata início de sintomas de ansiedade há cerca de 6 meses, associados a estresse no trabalho. Refere dificuldade para dormir, irritabilidade e falta de concentração. Nega histórico familiar de transtornos psiquiátricos. Tabagista (10 cigarros/dia), etilista social. Nega uso de outras substâncias.",
    diagnosticos: [
        { id: 1, data: '15/05/2025', diagnostico: 'Transtorno de Ansiedade Generalizada (CID-10 F41.1)' },
        { id: 2, data: '22/03/2025', diagnostico: 'Hipertensão Arterial Sistêmica (CID-10 I10)' },
    ],
    tratamentos: [
        { id: 1, data: '15/05/2025', tratamento: 'Psicoterapia Cognitivo-Comportamental (TCC), sessões semanais.' },
        { id: 2, data: '15/05/2025', tratamento: 'Atividade física regular (3x por semana).' },
    ],
    evolucoes: [
        { id: 1, data: '01/07/2025', evolucao: 'Paciente relata melhora na qualidade do sono e diminuição da irritabilidade após início da TCC.' },
        { id: 2, data: '15/06/2025', evolucao: 'Apresenta boa adesão às sessões de psicoterapia e às recomendações de atividade física.' },
    ],
    prescricoes: [
        { id: 1, data: '15/05/2025', medicamento: 'Sertralina', dose: '50mg', posologia: '1 comprimido pela manhã' },
        { id: 2, data: '22/03/2025', medicamento: 'Losartana Potássica', dose: '50mg', posologia: '1 comprimido pela manhã' },
    ]
};

export default function HistoricoClinico() {
    const navigate = useNavigate();

    const handleReturn = () => {
        navigate('/dashboard-paciente');
    };

    const handleExport = () => {
        // Em uma implementação real, essa função geraria um PDF ou CSV com os dados.
        alert('Funcionalidade de exportação em desenvolvimento. Os dados seriam exportados aqui.');
        console.log('Exportando dados:', dadosHistorico);
    };

    return (
        <div className="historico-clinico-page">
            <Header
                title="João Silva"
                showBackButton={true}
                backButtonText="Voltar"
                onBackClick={handleReturn}
            />

            <main className="historico-main">
                <div className="historico-title">
                    <h1>Meu Histórico Clínico</h1>
                    <button className="button-primary" onClick={handleExport}>
                        Exportar Dados
                    </button>
                </div>
                <p className="historico-subtitle">
                    Aqui você encontra um resumo completo de suas informações de saúde registradas na plataforma.
                </p>

                <div className="historico-content">
                    {/* Seção de Anamnese */}
                    <section className="historico-section">
                        <h2>Anamnese</h2>
                        <p>{dadosHistorico.anamnese}</p>
                    </section>

                    {/* Seção de Diagnósticos */}
                    <section className="historico-section">
                        <h2>Diagnósticos Realizados</h2>
                        <ul className="historico-lista">
                            {dadosHistorico.diagnosticos.map(item => (
                                <li key={item.id}>
                                    <strong>{item.data}:</strong> {item.diagnostico}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Seção de Tratamentos */}
                    <section className="historico-section">
                        <h2>Tratamentos Prescritos</h2>
                        <ul className="historico-lista">
                            {dadosHistorico.tratamentos.map(item => (
                                <li key={item.id}>
                                    <strong>{item.data}:</strong> {item.tratamento}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Seção de Evoluções */}
                    <section className="historico-section">
                        <h2>Evoluções no Quadro Clínico</h2>
                        <ul className="historico-lista">
                            {dadosHistorico.evolucoes.map(item => (
                                <li key={item.id}>
                                    <strong>{item.data}:</strong> {item.evolucao}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Seção de Prescrições */}
                    <section className="historico-section">
                        <h2>Prescrições Anteriores</h2>
                        <div className="prescricoes-container">
                            {dadosHistorico.prescricoes.map(item => (
                                <div key={item.id} className="prescricao-item">
                                    <div className="prescricao-header">
                                        <h4>{item.medicamento}</h4>
                                        <span>{item.data}</span>
                                    </div>
                                    <p><strong>Dose:</strong> {item.dose}</p>
                                    <p><strong>Posologia:</strong> {item.posologia}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}