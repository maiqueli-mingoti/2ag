import { useState } from "react";
import { useNavigate } from "react-router";
import Header from "../../components/header/header.jsx";
import "./diario-sono.css";

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

    const handleBack = () => {
        navigate(-1);
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
        alert('Diário de sono salvo com sucesso!');
    };

    const handleCancel = () => {
        if (confirm('Tem certeza que deseja cancelar? Todos os dados serão perdidos.')) {
            navigate('/dashboard-paciente');
        }
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
            <div className="acompanhamento-paciente__form">
                <div className="acompanhamento-paciente__form__group">
                    <h3>Horários de Sono</h3>
                    <div className="acompanhamento-paciente__form__row">
                        <div>
                            <label htmlFor={`bedTime-${dayKey}`}>Horário em que foi dormir</label>
                            <input
                                id={`bedTime-${dayKey}`}
                                type="time"
                                value={dayData.bedTime}
                                onChange={(e) => handleDailyLogChange(dayKey, 'bedTime', e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor={`wakeUpTime-${dayKey}`}>Horário em que se levantou</label>
                            <input
                                id={`wakeUpTime-${dayKey}`}
                                type="time"
                                value={dayData.wakeUpTime}
                                onChange={(e) => handleDailyLogChange(dayKey, 'wakeUpTime', e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="acompanhamento-paciente__form__row">
                        <div>
                            <label htmlFor={`timeInBed-${dayKey}`}>Tempo total na cama (minutos)</label>
                            <input
                                id={`timeInBed-${dayKey}`}
                                type="number"
                                value={dayData.timeInBed}
                                onChange={(e) => handleDailyLogChange(dayKey, 'timeInBed', e.target.value)}
                                placeholder="Tempo em minutos"
                            />
                        </div>
                        <div>
                            <label htmlFor={`timeToFallAsleep-${dayKey}`}>Tempo até adormecer (minutos)</label>
                            <input
                                id={`timeToFallAsleep-${dayKey}`}
                                type="number"
                                value={dayData.timeToFallAsleep}
                                onChange={(e) => handleDailyLogChange(dayKey, 'timeToFallAsleep', e.target.value)}
                                placeholder="Tempo em minutos"
                            />
                        </div>
                    </div>
                    <div className="acompanhamento-paciente__form__row">
                        <div>
                            <label htmlFor={`timesWokenUp-${dayKey}`}>Número de vezes que acordou</label>
                            <input
                                id={`timesWokenUp-${dayKey}`}
                                type="number"
                                value={dayData.timesWokenUp}
                                onChange={(e) => handleDailyLogChange(dayKey, 'timesWokenUp', e.target.value)}
                                placeholder="Número de vezes"
                            />
                        </div>
                        <div>
                            <label htmlFor={`totalTimeAwake-${dayKey}`}>Duração total acordado durante a noite (minutos)</label>
                            <input
                                id={`totalTimeAwake-${dayKey}`}
                                type="number"
                                value={dayData.totalTimeAwake}
                                onChange={(e) => handleDailyLogChange(dayKey, 'totalTimeAwake', e.target.value)}
                                placeholder="Tempo em minutos"
                            />
                        </div>
                    </div>
                    <div className="acompanhamento-paciente__form__row">
                        <div>
                            <label htmlFor={`totalSleepTime-${dayKey}`}>Tempo total de sono (minutos)</label>
                            <input
                                id={`totalSleepTime-${dayKey}`}
                                type="number"
                                value={dayData.totalSleepTime}
                                onChange={(e) => handleDailyLogChange(dayKey, 'totalSleepTime', e.target.value)}
                                placeholder="Tempo em minutos"
                            />
                        </div>
                        <div>
                            <label htmlFor={`isCommonDay-${dayKey}`}>Foi um dia comum?</label>
                            <select
                                id={`isCommonDay-${dayKey}`}
                                value={dayData.isCommonDay}
                                onChange={(e) => handleDailyLogChange(dayKey, 'isCommonDay', e.target.value)}
                            >
                                <option value="">Selecione</option>
                                <option value="true">Sim</option>
                                <option value="false">Não</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="acompanhamento-paciente__form__group">
                    <h3>Avaliações do Dia (Escala de 0 a 5)</h3>
                    <ScaleSelector
                        value={dayData.fatigue}
                        onChange={(value) => handleDailyLogChange(dayKey, 'fatigue', value)}
                        leftLabel="Nenhum cansaço"
                        rightLabel="Muito cansaço"
                    />
                    <p className="sleep-diary-description">Cansaço</p>
                </div>

                <div className="acompanhamento-paciente__form__group">
                    <ScaleSelector
                        value={dayData.stress}
                        onChange={(value) => handleDailyLogChange(dayKey, 'stress', value)}
                        leftLabel="Nenhum estresse"
                        rightLabel="Muito estresse"
                    />
                    <p className="sleep-diary-description">Estresse</p>
                </div>

                <div className="acompanhamento-paciente__form__group">
                    <ScaleSelector
                        value={dayData.daytimeSleepiness}
                        onChange={(value) => handleDailyLogChange(dayKey, 'daytimeSleepiness', value)}
                        leftLabel="Nenhuma sonolência"
                        rightLabel="Muita sonolência"
                    />
                    <p className="sleep-diary-description">Sonolência durante o dia</p>
                </div>

                <div className="acompanhamento-paciente__form__group">
                    <ScaleSelector
                        value={dayData.inattention}
                        onChange={(value) => handleDailyLogChange(dayKey, 'inattention', value)}
                        leftLabel="Nenhuma desatenção"
                        rightLabel="Muita desatenção"
                    />
                    <p className="sleep-diary-description">Desatenção / Falta de concentração</p>
                </div>

                <div className="acompanhamento-paciente__form__group">
                    <ScaleSelector
                        value={dayData.irritability}
                        onChange={(value) => handleDailyLogChange(dayKey, 'irritability', value)}
                        leftLabel="Nenhuma irritabilidade"
                        rightLabel="Muita irritabilidade"
                    />
                    <p className="sleep-diary-description">Irritabilidade</p>
                </div>

                <div className="acompanhamento-paciente__form__group">
                    <ScaleSelector
                        value={dayData.pain}
                        onChange={(value) => handleDailyLogChange(dayKey, 'pain', value)}
                        leftLabel="Nenhuma dor"
                        rightLabel="Muita dor"
                    />
                    <p className="sleep-diary-description">Dor</p>
                </div>

                <div className="acompanhamento-paciente__form__group">
                    <ScaleSelector
                        value={dayData.healthPerception}
                        onChange={(value) => handleDailyLogChange(dayKey, 'healthPerception', value)}
                        leftLabel="Sinto-me bem"
                        rightLabel="Sinto-me mal"
                    />
                    <p className="sleep-diary-description">Percepção geral de saúde</p>
                </div>

                <div className="acompanhamento-paciente__form__group">
                    <h3>Outros Dados</h3>
                    <div className="acompanhamento-paciente__form__row">
                        <div>
                            <label htmlFor={`physicalActivityTime-${dayKey}`}>Tempo em atividades físicas (minutos)</label>
                            <input
                                id={`physicalActivityTime-${dayKey}`}
                                type="number"
                                value={dayData.physicalActivityTime}
                                onChange={(e) => handleDailyLogChange(dayKey, 'physicalActivityTime', e.target.value)}
                                placeholder="Tempo em minutos"
                            />
                        </div>
                        <div>
                            <label htmlFor={`timeAwayFromHome-${dayKey}`}>Tempo fora de casa (horas)</label>
                            <input
                                id={`timeAwayFromHome-${dayKey}`}
                                type="number"
                                value={dayData.timeAwayFromHome}
                                onChange={(e) => handleDailyLogChange(dayKey, 'timeAwayFromHome', e.target.value)}
                                placeholder="Tempo em horas"
                            />
                        </div>
                    </div>
                    <div className="acompanhamento-paciente__form__row">
                        <div>
                            <label htmlFor={`usedSleepMedication-${dayKey}`}>Uso de medicação para dormir?</label>
                            <select
                                id={`usedSleepMedication-${dayKey}`}
                                value={dayData.usedSleepMedication}
                                onChange={(e) => handleDailyLogChange(dayKey, 'usedSleepMedication', e.target.value)}
                            >
                                <option value="">Selecione</option>
                                <option value="true">Sim</option>
                                <option value="false">Não</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor={`alcoholConsumption-${dayKey}`}>Consumo de bebida alcóolica (doses)</label>
                            <input
                                id={`alcoholConsumption-${dayKey}`}
                                type="number"
                                value={dayData.alcoholConsumption}
                                onChange={(e) => handleDailyLogChange(dayKey, 'alcoholConsumption', e.target.value)}
                                placeholder="Número de doses"
                            />
                        </div>
                    </div>
                    <div className="acompanhamento-paciente__form__row">
                        <div>
                            <label htmlFor={`napsTime-${dayKey}`}>Cochilos durante o dia (minutos)</label>
                            <input
                                id={`napsTime-${dayKey}`}
                                type="number"
                                value={dayData.napsTime}
                                onChange={(e) => handleDailyLogChange(dayKey, 'napsTime', e.target.value)}
                                placeholder="Tempo em minutos"
                            />
                        </div>
                        <div>
                            <label htmlFor={`coffeeConsumption-${dayKey}`}>Consumo de café (xícaras)</label>
                            <input
                                id={`coffeeConsumption-${dayKey}`}
                                type="number"
                                value={dayData.coffeeConsumption}
                                onChange={(e) => handleDailyLogChange(dayKey, 'coffeeConsumption', e.target.value)}
                                placeholder="Número de xícaras"
                            />
                        </div>
                    </div>
                    <div className="acompanhamento-paciente__form__row">
                        <div>
                            <label htmlFor={`nighttimeSmoking-${dayKey}`}>Consumo de tabaco à noite (cigarros)</label>
                            <input
                                id={`nighttimeSmoking-${dayKey}`}
                                type="number"
                                value={dayData.nighttimeSmoking}
                                onChange={(e) => handleDailyLogChange(dayKey, 'nighttimeSmoking', e.target.value)}
                                placeholder="Número de cigarros"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="consulta-clinica">
            <Header
                title="João Silva"
                showBackButton={true}
                backButtonText="Voltar"
                onBackClick={handleBack}
            />

            <div className="acompanhamento-paciente">
                <div className="acompanhamento-paciente__content">
                    <div className="acompanhamento-paciente__header">
                        <h1>Diário de Sono</h1>
                        <h2>Registro Semanal de Padrões de Sono</h2>
                    </div>

                    <form onSubmit={handleSubmit} className="acompanhamento-paciente__form">
                        <div className="acompanhamento-paciente__form__row">
                            <div>
                                <label htmlFor="nome-paciente">Nome do Paciente (Social)</label>
                                <input
                                    id="nome-paciente"
                                    type="text"
                                    value={generalInfo.nomePaciente}
                                    onChange={(e) => handleGeneralInfoChange('nomePaciente', e.target.value)}
                                    placeholder="Digite o nome do paciente"
                                />
                            </div>
                            <div>
                                <label htmlFor="mes">Mês</label>
                                <input
                                    id="mes"
                                    type="text"
                                    value={generalInfo.mes}
                                    onChange={(e) => handleGeneralInfoChange('mes', e.target.value)}
                                    placeholder="Ex: Janeiro 2024"
                                />
                            </div>
                        </div>
                        <div className="acompanhamento-paciente__form__row">
                            <div>
                                <label htmlFor="ir-dormir-as">Programação - Ir Dormir às</label>
                                <input
                                    id="ir-dormir-as"
                                    type="time"
                                    value={generalInfo.irDormirAs}
                                    onChange={(e) => handleGeneralInfoChange('irDormirAs', e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="levantar-as">Programação - Levantar às</label>
                                <input
                                    id="levantar-as"
                                    type="time"
                                    value={generalInfo.levantarAs}
                                    onChange={(e) => handleGeneralInfoChange('levantarAs', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="sleep-diary-tabs">
                            <div className="sleep-diary-tabs-header">
                                {weekDays.map(({ key, label, shortLabel }) => (
                                    <button
                                        key={key}
                                        type="button"
                                        className={`sleep-diary-tab ${activeTab === key ? 'active' : ''}`}
                                        onClick={() => setActiveTab(key)}
                                    >
                                        <span className="tab-full">{label}</span>
                                        <span className="tab-short">{shortLabel}</span>
                                    </button>
                                ))}
                            </div>

                            <div className="sleep-diary-tab-content">
                                <div className="sleep-diary-tab-title">
                                    <h3>{weekDays.find(d => d.key === activeTab)?.label}</h3>
                                </div>
                                {renderDayContent(activeTab)}
                            </div>
                        </div>

                        {/* Botões de Ação */}
                        <div className="acompanhamento-paciente_end">
                            <button type="submit" className="button">
                                Salvar Diário
                            </button>
                            <button type="button" className="button-secondary" onClick={handleCancel}>
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}