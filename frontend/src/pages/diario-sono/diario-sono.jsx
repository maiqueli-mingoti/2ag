import { useState } from "react";
import { useNavigate } from "react-router";
import "./diario-sono.css";
import "../../styles/colors.css";
import "../../styles/fonts.css";
import "../../styles/button.css";
import "../../styles/input.css";

// Componente para o seletor de escala, seguindo o padrão visual do projeto.
const ScaleSelector = ({ value, onChange, leftLabel, rightLabel }) => {
    return (
        <div className="diario-sono__scale-selector">
            <span className="diario-sono__scale-label">{leftLabel}</span>
            <div className="diario-sono__scale-buttons">
                {[0, 1, 2, 3, 4, 5].map((num) => (
                    <button
                        key={num}
                        type="button"
                        className={`diario-sono__scale-button ${value === num ? "selected" : ""}`}
                        onClick={() => onChange(num)}
                    >
                        {num}
                    </button>
                ))}
            </div>
            <span className="diario-sono__scale-label">{rightLabel}</span>
        </div>
    );
};

export default function DiarioSono() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('segunda');

    // Estado alinhado com o modelo `SleepLog.java` do backend e o requisito RF22.
    const [sleepLog, setSleepLog] = useState({
        segunda: { bedTime: "", wakeUpTime: "", timeInBed: "", timeToFallAsleep: "", timesWokenUp: "", totalTimeAwake: "", totalSleepTime: "", isCommonDay: "", fatigue: 0, stress: 0, daytimeSleepiness: 0, inattention: 0, irritability: 0, physicalActivityTime: "", timeAwayFromHome: "", usedSleepMedication: "", pain: 0, healthPerception: 0, alcoholConsumption: "", napsTime: "", coffeeConsumption: "", nighttimeSmoking: "" },
        terca: { bedTime: "", wakeUpTime: "", timeInBed: "", timeToFallAsleep: "", timesWokenUp: "", totalTimeAwake: "", totalSleepTime: "", isCommonDay: "", fatigue: 0, stress: 0, daytimeSleepiness: 0, inattention: 0, irritability: 0, physicalActivityTime: "", timeAwayFromHome: "", usedSleepMedication: "", pain: 0, healthPerception: 0, alcoholConsumption: "", napsTime: "", coffeeConsumption: "", nighttimeSmoking: "" },
        quarta: { bedTime: "", wakeUpTime: "", timeInBed: "", timeToFallAsleep: "", timesWokenUp: "", totalTimeAwake: "", totalSleepTime: "", isCommonDay: "", fatigue: 0, stress: 0, daytimeSleepiness: 0, inattention: 0, irritability: 0, physicalActivityTime: "", timeAwayFromHome: "", usedSleepMedication: "", pain: 0, healthPerception: 0, alcoholConsumption: "", napsTime: "", coffeeConsumption: "", nighttimeSmoking: "" },
        quinta: { bedTime: "", wakeUpTime: "", timeInBed: "", timeToFallAsleep: "", timesWokenUp: "", totalTimeAwake: "", totalSleepTime: "", isCommonDay: "", fatigue: 0, stress: 0, daytimeSleepiness: 0, inattention: 0, irritability: 0, physicalActivityTime: "", timeAwayFromHome: "", usedSleepMedication: "", pain: 0, healthPerception: 0, alcoholConsumption: "", napsTime: "", coffeeConsumption: "", nighttimeSmoking: "" },
        sexta: { bedTime: "", wakeUpTime: "", timeInBed: "", timeToFallAsleep: "", timesWokenUp: "", totalTimeAwake: "", totalSleepTime: "", isCommonDay: "", fatigue: 0, stress: 0, daytimeSleepiness: 0, inattention: 0, irritability: 0, physicalActivityTime: "", timeAwayFromHome: "", usedSleepMedication: "", pain: 0, healthPerception: 0, alcoholConsumption: "", napsTime: "", coffeeConsumption: "", nighttimeSmoking: "" },
        sabado: { bedTime: "", wakeUpTime: "", timeInBed: "", timeToFallAsleep: "", timesWokenUp: "", totalTimeAwake: "", totalSleepTime: "", isCommonDay: "", fatigue: 0, stress: 0, daytimeSleepiness: 0, inattention: 0, irritability: 0, physicalActivityTime: "", timeAwayFromHome: "", usedSleepMedication: "", pain: 0, healthPerception: 0, alcoholConsumption: "", napsTime: "", coffeeConsumption: "", nighttimeSmoking: "" },
        domingo: { bedTime: "", wakeUpTime: "", timeInBed: "", timeToFallAsleep: "", timesWokenUp: "", totalTimeAwake: "", totalSleepTime: "", isCommonDay: "", fatigue: 0, stress: 0, daytimeSleepiness: 0, inattention: 0, irritability: 0, physicalActivityTime: "", timeAwayFromHome: "", usedSleepMedication: "", pain: 0, healthPerception: 0, alcoholConsumption: "", napsTime: "", coffeeConsumption: "", nighttimeSmoking: "" }
    });

    const [generalInfo, setGeneralInfo] = useState({
        nomePaciente: "",
        mes: "",
        irDormirAs: "",
        levantarAs: ""
    });

    const handleReturnMenu = (e) => {
        e.preventDefault();
        navigate("/dashboard-paciente");
    };

    const handleGeneralInfoChange = (field, value) => {
        setGeneralInfo(prev => ({ ...prev, [field]: value }));
    };

    const handleDailyLogChange = (day, field, value) => {
        setSleepLog(prev => ({
            ...prev,
            [day]: {
                ...prev[day],
                [field]: value
            }
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const fullData = { ...generalInfo, week: sleepLog };
        console.log('Dados do diário de sono:', fullData);
        // Lógica para enviar os dados para o backend
    };

    const weekDays = [
        { key: 'segunda', label: 'Segunda', shortLabel: 'SEG' },
        { key: 'terca', label: 'Terça', shortLabel: 'TER' },
        { key: 'quarta', label: 'Quarta', shortLabel: 'QUA' },
        { key: 'quinta', label: 'Quinta', shortLabel: 'QUI' },
        { key: 'sexta', label: 'Sexta', shortLabel: 'SEX' },
        { key: 'sabado', label: 'Sábado', shortLabel: 'SAB' },
        { key: 'domingo', label: 'Domingo', shortLabel: 'DOM' }
    ];

    const renderDayContent = (dayKey) => {
        const dayData = sleepLog[dayKey];

        return (
            <div className="diario-sono__day-content">
                <div className="diario-sono__subsection">
                    <h4>Horários de Sono</h4>
                    <div className="diario-sono__row">
                        <div className="diario-sono__field">
                            <label>1. Horário em que foi dormir</label>
                            <input type="time" value={dayData.bedTime} onChange={(e) => handleDailyLogChange(dayKey, 'bedTime', e.target.value)} />
                        </div>
                        <div className="diario-sono__field">
                            <label>2. Horário em que se levantou</label>
                            <input type="time" value={dayData.wakeUpTime} onChange={(e) => handleDailyLogChange(dayKey, 'wakeUpTime', e.target.value)} />
                        </div>
                    </div>
                     <div className="diario-sono__row">
                        <div className="diario-sono__field">
                            <label>3. Tempo total na cama (minutos)</label>
                            <input type="number" value={dayData.timeInBed} onChange={(e) => handleDailyLogChange(dayKey, 'timeInBed', e.target.value)} placeholder="Tempo em minutos" />
                        </div>
                        <div className="diario-sono__field">
                            <label>4. Tempo até adormecer (minutos)</label>
                            <input type="number" value={dayData.timeToFallAsleep} onChange={(e) => handleDailyLogChange(dayKey, 'timeToFallAsleep', e.target.value)} placeholder="Tempo em minutos" />
                        </div>
                    </div>
                    <div className="diario-sono__row">
                        <div className="diario-sono__field">
                            <label>5. Número de vezes que acordou</label>
                            <input type="number" value={dayData.timesWokenUp} onChange={(e) => handleDailyLogChange(dayKey, 'timesWokenUp', e.target.value)} placeholder="Número de vezes" />
                        </div>
                         <div className="diario-sono__field">
                            <label>6. Duração total acordado durante a noite (minutos)</label>
                            <input type="number" value={dayData.totalTimeAwake} onChange={(e) => handleDailyLogChange(dayKey, 'totalTimeAwake', e.target.value)} placeholder="Tempo em minutos" />
                        </div>
                    </div>
                    <div className="diario-sono__row">
                       <div className="diario-sono__field">
                            <label>7. Tempo total de sono (minutos)</label>
                            <input type="number" value={dayData.totalSleepTime} onChange={(e) => handleDailyLogChange(dayKey, 'totalSleepTime', e.target.value)} placeholder="Tempo em minutos" />
                        </div>
                        <div className="diario-sono__field">
                            <label>8. Foi um dia comum?</label>
                            <select value={dayData.isCommonDay} onChange={(e) => handleDailyLogChange(dayKey, 'isCommonDay', e.target.value)}>
                                <option value="">Selecione</option>
                                <option value="true">Sim</option>
                                <option value="false">Não</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="diario-sono__subsection">
                    <h4>Avaliações do Dia (Escala de 0 a 5)</h4>
                    <div className="diario-sono__scale-grid">
                        <div className="diario-sono__scale-group">
                            <label>Cansaço</label>
                            <ScaleSelector value={dayData.fatigue} onChange={(value) => handleDailyLogChange(dayKey, 'fatigue', value)} leftLabel="Nenhum" rightLabel="Muito" />
                        </div>
                        <div className="diario-sono__scale-group">
                            <label>Estresse</label>
                            <ScaleSelector value={dayData.stress} onChange={(value) => handleDailyLogChange(dayKey, 'stress', value)} leftLabel="Nenhum" rightLabel="Muito" />
                        </div>
                        <div className="diario-sono__scale-group">
                            <label>Sonolência durante o dia</label>
                            <ScaleSelector value={dayData.daytimeSleepiness} onChange={(value) => handleDailyLogChange(dayKey, 'daytimeSleepiness', value)} leftLabel="Nenhuma" rightLabel="Muita" />
                        </div>
                        <div className="diario-sono__scale-group">
                            <label>Desatenção / Falta de concentração</label>
                            <ScaleSelector value={dayData.inattention} onChange={(value) => handleDailyLogChange(dayKey, 'inattention', value)} leftLabel="Nenhuma" rightLabel="Muita" />
                        </div>
                        <div className="diario-sono__scale-group">
                            <label>Irritabilidade</label>
                            <ScaleSelector value={dayData.irritability} onChange={(value) => handleDailyLogChange(dayKey, 'irritability', value)} leftLabel="Nenhuma" rightLabel="Muita" />
                        </div>
                        <div className="diario-sono__scale-group">
                            <label>Dor</label>
                            <ScaleSelector value={dayData.pain} onChange={(value) => handleDailyLogChange(dayKey, 'pain', value)} leftLabel="Nenhuma" rightLabel="Muita" />
                        </div>
                        <div className="diario-sono__scale-group">
                            <label>Percepção geral de saúde</label>
                            <ScaleSelector value={dayData.healthPerception} onChange={(value) => handleDailyLogChange(dayKey, 'healthPerception', value)} leftLabel="Sinto-me bem" rightLabel="Sinto-me mal" />
                        </div>
                    </div>
                </div>

                <div className="diario-sono__subsection">
                    <h4>Outros Dados</h4>
                     <div className="diario-sono__row">
                        <div className="diario-sono__field">
                            <label>Tempo em atividades físicas (minutos)</label>
                            <input type="number" value={dayData.physicalActivityTime} onChange={(e) => handleDailyLogChange(dayKey, 'physicalActivityTime', e.target.value)} placeholder="Tempo em minutos" />
                        </div>
                        <div className="diario-sono__field">
                            <label>Tempo fora de casa (horas)</label>
                            <input type="number" value={dayData.timeAwayFromHome} onChange={(e) => handleDailyLogChange(dayKey, 'timeAwayFromHome', e.target.value)} placeholder="Tempo em horas" />
                        </div>
                    </div>
                     <div className="diario-sono__row">
                        <div className="diario-sono__field">
                            <label>Uso de medicação para dormir?</label>
                             <select value={dayData.usedSleepMedication} onChange={(e) => handleDailyLogChange(dayKey, 'usedSleepMedication', e.target.value)}>
                                <option value="">Selecione</option>
                                <option value="true">Sim</option>
                                <option value="false">Não</option>
                            </select>
                        </div>
                        <div className="diario-sono__field">
                            <label>Consumo de bebida alcóolica (doses)</label>
                            <input type="number" value={dayData.alcoholConsumption} onChange={(e) => handleDailyLogChange(dayKey, 'alcoholConsumption', e.target.value)} placeholder="Número de doses" />
                        </div>
                    </div>
                     <div className="diario-sono__row">
                        <div className="diario-sono__field">
                            <label>Cochilos durante o dia (minutos)</label>
                            <input type="number" value={dayData.napsTime} onChange={(e) => handleDailyLogChange(dayKey, 'napsTime', e.target.value)} placeholder="Tempo em minutos" />
                        </div>
                        <div className="diario-sono__field">
                            <label>Consumo de café (xícaras)</label>
                            <input type="number" value={dayData.coffeeConsumption} onChange={(e) => handleDailyLogChange(dayKey, 'coffeeConsumption', e.target.value)} placeholder="Número de xícaras" />
                        </div>
                    </div>
                    <div className="diario-sono__row">
                        <div className="diario-sono__field">
                            <label>Consumo de tabaco à noite (cigarros)</label>
                            <input type="number" value={dayData.nighttimeSmoking} onChange={(e) => handleDailyLogChange(dayKey, 'nighttimeSmoking', e.target.value)} placeholder="Número de cigarros" />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="diario-sono">
            <header className="diario-sono-header">
                <nav className="header-nav">
                    <img src="/images/logotipo-icon.svg" alt="Logo" className="logo" />
                    <button className="button-secondary" onClick={handleReturnMenu}>Voltar</button>
                </nav>
            </header>

            <main className="diario-sono__main-content">
                <div className="diario-sono__title-section">
                    <h1>Diário de Sono</h1>
                    <p>Registro Semanal de Padrões de Sono</p>
                </div>

                <form onSubmit={handleSubmit} className="diario-sono__form">
                    <section className="diario-sono__section">
                        <h3>Informações Gerais</h3>
                        <div className="diario-sono__row">
                            <div className="diario-sono__field">
                                <label htmlFor="nome-paciente">Nome do Paciente (Social)</label>
                                <input id="nome-paciente" type="text" value={generalInfo.nomePaciente} onChange={(e) => handleGeneralInfoChange('nomePaciente', e.target.value)} placeholder="Digite o nome do paciente" />
                            </div>
                            <div className="diario-sono__field">
                                <label htmlFor="mes">Mês</label>
                                <input id="mes" type="text" value={generalInfo.mes} onChange={(e) => handleGeneralInfoChange('mes', e.target.value)} placeholder="Ex: Janeiro 2024" />
                            </div>
                        </div>
                        <div className="diario-sono__row">
                            <div className="diario-sono__field">
                                <label htmlFor="ir-dormir-as">Programação - Ir Dormir às</label>
                                <input id="ir-dormir-as" type="time" value={generalInfo.irDormirAs} onChange={(e) => handleGeneralInfoChange('irDormirAs', e.target.value)} />
                            </div>
                            <div className="diario-sono__field">
                                <label htmlFor="levantar-as">Programação - Levantar às</label>
                                <input id="levantar-as" type="time" value={generalInfo.levantarAs} onChange={(e) => handleGeneralInfoChange('levantarAs', e.target.value)} />
                            </div>
                        </div>
                    </section>

                    <section className="diario-sono__tabs-section">
                        <div className="diario-sono__tabs-header">
                            {weekDays.map(({ key, label, shortLabel }) => (
                                <button
                                    key={key}
                                    type="button"
                                    className={`diario-sono__tab ${activeTab === key ? 'active' : ''}`}
                                    onClick={() => setActiveTab(key)}
                                >
                                    <span className="tab-full">{label}</span>
                                    <span className="tab-short">{shortLabel}</span>
                                </button>
                            ))}
                        </div>
                        
                        <div className="diario-sono__tab-content">
                             <div className="diario-sono__tab-title">
                                <h3>{weekDays.find(d => d.key === activeTab)?.label}</h3>
                            </div>
                            {renderDayContent(activeTab)}
                        </div>
                    </section>

                    <div className="diario-sono__actions">
                        <button type="submit" className="button">
                            Salvar
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
}