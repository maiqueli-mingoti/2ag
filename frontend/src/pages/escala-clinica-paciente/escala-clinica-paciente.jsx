import { useNavigate } from 'react-router-dom';
import './escala-clinica-paciente.css';
import '../../styles/colors.css';
import '../../styles/fonts.css';
import '../../styles/button.css';
import Header from "../../components/header/header.jsx";
import React from "react";

export default function CentralEscalas() {
    const navigate = useNavigate();

    // Dados de exemplo para as escalas pendentes
    const escalasPendentes = [
        { id: 1, nome: 'Diário de Sono', path: '/diario-sono' },
        { id: 2, nome: 'Mini-Exame do Estado Mental (MEEM)', path: '/mini-exame' },
        { id: 3, nome: 'Acompanhamento Semanal', path: '/acompanhamento-semanal-paciente' },
    ];

    // Dados de exemplo para o histórico de escalas
    const historicoEscalas = [
        { id: 1, nome: 'Diário de Sono', data: '28/06/2025', resultado: '7/10', path: '/diario-sono' },
        { id: 2, nome: 'Mini-Exame do Estado Mental (MEEM)', data: '25/06/2025', resultado: '28/30', path: '/mini-exame' },
        { id: 3, nome: 'Acompanhamento Semanal', data: '21/06/2025', resultado: 'Positivo', path: '/acompanhamento-semanal-paciente' },
    ];

    const handleNavigate = (path) => {
        navigate(path);
    };

    const handleBack = () => {
        navigate(-1);
    };
    return (
            <div className="central-escalas-page">
                <Header
                    title="João Silva"
                    showBackButton={true}
                    backButtonText="Voltar"
                    onBackClick={handleBack}
                />

            <main className="escalas-main">
                <div className="escalas-title">
                    <h1>Minhas Avaliações Clínicas</h1>
                    <p>Acompanhe suas avaliações pendentes e seu histórico de respostas.</p>
                </div>

                {/* Seção de Avaliações Pendentes */}
                <section className="secao-escalas">
                    <h2>Avaliações Pendentes</h2>
                    <div className="escalas-pendentes-container">
                        {escalasPendentes.map((escala) => (
                            <div key={escala.id} className="escala-card">
                                <h3>{escala.nome}</h3>
                                <p>Esta avaliação está aguardando seu preenchimento.</p>
                                <button className="button-primary" onClick={() => handleNavigate(escala.path)}>
                                    Preencher
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Seção de Histórico */}
                <section className="secao-escalas">
                    <h2>Histórico de Avaliações</h2>
                    <div className="historico-tabela-container">
                        <table className="historico-tabela">
                            <thead>
                            <tr>
                                <th>Nome da Escala</th>
                                <th>Data de Conclusão</th>
                                <th>Resultado</th>
                                <th>Ações</th>
                            </tr>
                            </thead>
                            <tbody>
                            {historicoEscalas.map((escala) => (
                                <tr key={escala.id}>
                                    <td>{escala.nome}</td>
                                    <td>{escala.data}</td>
                                    <td>{escala.resultado}</td>
                                    <td className="tabela-acoes">
                                        <button className="button-tertiary" onClick={() => handleNavigate(escala.path)}>Ver Respostas</button>
                                        <button className="button-tertiary" onClick={() => handleNavigate('/evolucao-clinica')}>Ver Progresso</button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    );
}