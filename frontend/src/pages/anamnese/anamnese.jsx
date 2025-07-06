import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './anamnese.css';
import '../../styles/colors.css';
import '../../styles/fonts.css';
import '../../styles/button.css';
import '../../styles/input.css';
import Header from "../../components/header/header.jsx";

export default function Anamnese() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        dataPreenchimento: new Date().toISOString().split('T')[0], // Data atual por padrão
        profissao: '',
        motivoConsulta: '',
        diagnosticosPrevios: '',
        tratamentosAnteriores: '',
        medicacoesEmUso: '',
        tipoDieta: '',
        habitoFumar: 'Não',
        usoAlcool: 'Não',
        peso: '',
        altura: '',
        usoSubstanciasRecreativas: '',
        praticaExerciciosFisicos: '',
        qualidadeSono: '',
        presencaAnsiedade: '',
        presencaDor: '',
        historicoFamiliar: '',
        reacoesAdversas: '',
        condicoesGeneticas: '',
        expectativasTratamento: '',
        formasMonitoramento: '',
        observacoesGerais: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados da Anamnese para Envio:', formData);
        alert('Ficha de Anamnese enviada com sucesso!');
        navigate('/dashboard-paciente');
    };

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="anamnese-page">
            <Header
                title="João Silva"
                showBackButton={true}
                backButtonText="Voltar"
                onBackClick={handleBack}
            />

            <main className="anamnese-main">
                <form className="anamnese-form" onSubmit={handleSubmit}>
                    <div className="anamnese-intro">
                        <h2>Bem-vindo(a) à sua avaliação inicial</h2>
                        <p>
                            Esta ficha tem como objetivo reunir informações para garantir um tratamento mais seguro e eficaz, adaptado às suas necessidades individuais. Agradecemos por dedicar seu tempo para preenchê-la.
                        </p>
                    </div>

                    {/* Seção 1: Informações Gerais */}
                    <div className="form-section">
                        <h3>Informações Gerais</h3>
                        <div className="form-grid">
                            <div className="form-group span-2">
                                <label htmlFor="profissao">Profissão</label>
                                <input type="text" id="profissao" name="profissao" value={formData.profissao} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="dataPreenchimento">Data de Preenchimento</label>
                                <input type="date" id="dataPreenchimento" name="dataPreenchimento" value={formData.dataPreenchimento} onChange={handleChange} />
                            </div>
                            <div className="form-group span-3">
                                <label htmlFor="motivoConsulta">Motivo Principal da Consulta</label>
                                <textarea id="motivoConsulta" name="motivoConsulta" value={formData.motivoConsulta} onChange={handleChange} rows="3"></textarea>
                            </div>
                        </div>
                    </div>

                    {/* Seção 2: Histórico de Saúde */}
                    <div className="form-section">
                        <h3>Histórico de Saúde</h3>
                        <div className="form-grid">
                            <div className="form-group span-3">
                                <label htmlFor="diagnosticosPrevios">Diagnóstico(s) Prévio(s)</label>
                                <input type="text" id="diagnosticosPrevios" name="diagnosticosPrevios" value={formData.diagnosticosPrevios} onChange={handleChange} />
                            </div>
                            <div className="form-group span-3">
                                <label htmlFor="tratamentosAnteriores">Tratamentos Anteriores</label>
                                <textarea id="tratamentosAnteriores" name="tratamentosAnteriores" value={formData.tratamentosAnteriores} onChange={handleChange} rows="3"></textarea>
                            </div>
                            <div className="form-group span-3">
                                <label htmlFor="medicacoesEmUso">Medicações em Uso</label>
                                <textarea id="medicacoesEmUso" name="medicacoesEmUso" value={formData.medicacoesEmUso} onChange={handleChange} rows="3"></textarea>
                            </div>
                            <div className="form-group span-3">
                                <label htmlFor="historicoFamiliar">Histórico Familiar de Doenças Relevantes</label>
                                <input type="text" id="historicoFamiliar" name="historicoFamiliar" value={formData.historicoFamiliar} onChange={handleChange} />
                            </div>
                            <div className="form-group span-3">
                                <label htmlFor="reacoesAdversas">Reações Adversas a Medicamentos</label>
                                <input type="text" id="reacoesAdversas" name="reacoesAdversas" value={formData.reacoesAdversas} onChange={handleChange} />
                            </div>
                            <div className="form-group span-3">
                                <label htmlFor="condicoesGeneticas">Condições Genéticas Conhecidas</label>
                                <input type="text" id="condicoesGeneticas" name="condicoesGeneticas" value={formData.condicoesGeneticas} onChange={handleChange} />
                            </div>
                        </div>
                    </div>

                    {/* Seção 3: Estilo de Vida */}
                    <div className="form-section">
                        <h3>Hábitos e Estilo de Vida</h3>
                        <div className="form-grid">
                            <div className="form-group span-3">
                                <label htmlFor="tipoDieta">Tipo de Dieta</label>
                                <input type="text" id="tipoDieta" name="tipoDieta" placeholder="Ex: Onívora, Vegetariana, Vegana, etc." value={formData.tipoDieta} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="habitoFumar">Hábito de Fumar</label>
                                <select id="habitoFumar" name="habitoFumar" value={formData.habitoFumar} onChange={handleChange}>
                                    <option>Não</option>
                                    <option>Sim, diariamente</option>
                                    <option>Sim, ocasionalmente</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="usoAlcool">Uso de Álcool</label>
                                <select id="usoAlcool" name="usoAlcool" value={formData.usoAlcool} onChange={handleChange}>
                                    <option>Não</option>
                                    <option>Sim, socialmente</option>
                                    <option>Sim, frequentemente</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="peso">Peso (kg)</label>
                                <input type="number" id="peso" name="peso" placeholder="Ex: 70.5" value={formData.peso} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="altura">Altura (cm)</label>
                                <input type="number" id="altura" name="altura" placeholder="Ex: 175" value={formData.altura} onChange={handleChange} />
                            </div>
                            <div className="form-group span-2">
                                <label htmlFor="usoSubstanciasRecreativas">Uso de outras Substâncias Recreativas</label>
                                <input type="text" id="usoSubstanciasRecreativas" name="usoSubstanciasRecreativas" value={formData.usoSubstanciasRecreativas} onChange={handleChange} />
                            </div>
                            <div className="form-group span-3">
                                <label htmlFor="praticaExerciciosFisicos">Prática de Exercícios Físicos (Frequência e Tipo)</label>
                                <input type="text" id="praticaExerciciosFisicos" name="praticaExerciciosFisicos" value={formData.praticaExerciciosFisicos} onChange={handleChange} />
                            </div>
                        </div>
                    </div>

                    {/* Seção 4: Sintomas e Queixas Atuais */}
                    <div className="form-section">
                        <h3>Sintomas e Queixas Atuais</h3>
                        <div className="form-grid">
                            <div className="form-group span-3">
                                <label htmlFor="qualidadeSono">Qualidade do Sono</label>
                                <input type="text" id="qualidadeSono" name="qualidadeSono" placeholder="Ex: Durmo bem, Tenho insônia, Acordo várias vezes, etc." value={formData.qualidadeSono} onChange={handleChange} />
                            </div>
                            <div className="form-group span-3">
                                <label htmlFor="presencaAnsiedade">Presença de Ansiedade (Frequência e Intensidade)</label>
                                <input type="text" id="presencaAnsiedade" name="presencaAnsiedade" value={formData.presencaAnsiedade} onChange={handleChange} />
                            </div>
                            <div className="form-group span-3">
                                <label htmlFor="presencaDor">Presença de Dor (Local, Frequência e Intensidade de 0 a 10)</label>
                                <input type="text" id="presencaDor" name="presencaDor" value={formData.presencaDor} onChange={handleChange} />
                            </div>
                        </div>
                    </div>

                    {/* Seção 5: Tratamento */}
                    <div className="form-section">
                        <h3>Tratamento</h3>
                        <div className="form-grid">
                            <div className="form-group span-3">
                                <label htmlFor="expectativasTratamento">Expectativas com o Tratamento</label>
                                <textarea id="expectativasTratamento" name="expectativasTratamento" value={formData.expectativasTratamento} onChange={handleChange} rows="3"></textarea>
                            </div>
                            <div className="form-group span-3">
                                <label htmlFor="formasMonitoramento">Como você pretende monitorar sua evolução?</label>
                                <input type="text" id="formasMonitoramento" name="formasMonitoramento" placeholder="Ex: Diário de sintomas, Aplicativo, etc." value={formData.formasMonitoramento} onChange={handleChange} />
                            </div>
                            <div className="form-group span-3">
                                <label htmlFor="observacoesGerais">Observações Gerais</label>
                                <textarea id="observacoesGerais" name="observacoesGerais" placeholder="Espaço para informações adicionais que julgar importantes." value={formData.observacoesGerais} onChange={handleChange} rows="4"></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="anamnese-actions">
                        <button type="submit" className="button">
                            Enviar Anamnese
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
}