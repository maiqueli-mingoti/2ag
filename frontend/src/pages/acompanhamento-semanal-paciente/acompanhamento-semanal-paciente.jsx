import { useState } from "react";
import ScaleSelector from "../../components/scale-selector/scale-selector";
import "./acompanhamento-semanal-paciente.css";

export default function AcompanhamentoSemanalPaciente() {
    const [data, setData] = useState({
        morningDrops: "",
        afternoonDrops: "",
        pain: 0,
        sleep: 0,
        mood: 0,
        shaking: 0,
        anxiety: 0,
        energy: 0,
        bowelFunction: 0,
        apetite: 0,
        focus: 0,
        socialInteraction: 0,
        rigidity: 0,
        substance: 0,
        sport: 0,
        vomit: 0,
        dermat:0,

    });

    const handleReturnDash = (e) => {
        e.preventDefault();

        navigate("/dashboard-paciente");
    };
    return (
        <div className="consulta-clinica">
        <header className="consulta-header">
            <div className="header-left">
                <img src="/images/logotipo-icon.svg" alt="Logo" className="logo" />
            </div>
            <nav className="header-nav">
                <button className="button-secondary" onClick={handleReturnDash}>Voltar</button>
            </nav>
        </header>

        <div className="acompanhamento-paciente">
            <div className="acompanhamento-paciente__content">
                <div className="acompanhamento-paciente__header">
                    <h1>Acompanhamento Semanal</h1>
                    <h2>Terapia Canabinoide</h2>
                </div>
                <div className="acompanhamento-paciente__form">
                    <div className="acompanhamento-paciente__form__row">
                        <div>
                            <label htmlFor="morningDrops">Nº gotas manhã</label>
                            <input
                                id="morningDrops"
                                onChange={(e) =>
                                    setData((prev) => ({
                                        ...prev,
                                        morningDrops: e.target.value,
                                    }))
                                }
                                placeholder="Dose"
                                type="number"
                                value={data.morningDrops}
                            />
                        </div>
                        <div>
                            <label htmlFor="afternoonDrops">
                                Nº gotas tarde
                            </label>
                            <input
                                id="afternoonDrops"
                                onChange={(e) =>
                                    setData((prev) => ({
                                        ...prev,
                                        afternoonDrops: e.target.value,
                                    }))
                                }
                                placeholder="Dose"
                                type="number"
                                value={data.afternoonDrops}
                            />
                        </div>
                    </div>
                    <div className="acompanhamento-paciente__form__group">
                        <h3>Dor</h3>
                        <ScaleSelector
                            leftLabel="Sem dor"
                            rightLabel="Dor intensa"
                            value={data.pain}
                            onChangeValue={(value) =>
                                setData((prev) => ({ ...prev, pain: value }))
                            }
                        />
                    </div>
                    <div className="acompanhamento-paciente__form__group">
                        <h3>Sono</h3>
                        <ScaleSelector
                            leftLabel="Excelente"
                            rightLabel="Muito ruim"
                            value={data.sleep}
                            onChangeValue={(value) =>
                                setData((prev) => ({ ...prev, sleep: value }))
                            }
                        />
                    </div>
                    <div className="acompanhamento-paciente__form__group">
                        <h3>Humor</h3>
                        <ScaleSelector
                            leftLabel="Muito positivo"
                            rightLabel="Deprimido"
                            value={data.mood}
                            onChangeValue={(value) =>
                                setData((prev) => ({ ...prev, mood: value }))
                            }
                        />
                    </div>
                    <div className="acompanhamento-paciente__form__group">
                        <h3>Tremor</h3>
                        <ScaleSelector
                            leftLabel="Ausente"
                            rightLabel="Grave"
                            value={data.shaking}
                            onChangeValue={(value) =>
                                setData((prev) => ({ ...prev, shaking: value }))
                            }
                        />
                    </div>
                    <div className="acompanhamento-paciente__form__group">
                        <h3>Ansiedade</h3>
                        <ScaleSelector
                            leftLabel="Tranquilo"
                            rightLabel="Muito ansioso"
                            value={data.anxiety}
                            onChangeValue={(value) =>
                                setData((prev) => ({ ...prev, anxiety: value }))
                            }
                        />
                    </div>
                    <div className="acompanhamento-paciente__form__group">
                        <h3>Disposição/Energia</h3>
                        <ScaleSelector
                            leftLabel="Muito enérgico"
                            rightLabel="Sem energia"
                            value={data.energy}
                            onChangeValue={(value) =>
                                setData((prev) => ({ ...prev, energy: value }))
                            }
                        />
                    </div>
                    <div className="acompanhamento-paciente__form__group">
                        <h3>Função Intestinal</h3>
                        <ScaleSelector
                            leftLabel="Normal"
                            rightLabel="Irregular"
                            value={data.bowelFunction}
                            onChangeValue={(value) =>
                                setData((prev) => ({
                                    ...prev,
                                    bowelFunction: value,
                                }))
                            }
                        />
                    </div>
                    <div className="acompanhamento-paciente__form__group">
                        <h3>Apetite</h3>
                        <ScaleSelector
                            leftLabel="Apetite saudável"
                            rightLabel="Sem apetite"
                            value={data.apetite}
                            onChangeValue={(value) =>
                                setData((prev) => ({ ...prev, apetite: value }))
                            }
                        />
                    </div>
                    <div className="acompanhamento-paciente__form__group">
                        <h3>Concentração</h3>
                        <ScaleSelector
                            leftLabel="Excelente"
                            rightLabel="Muito baixa"
                            value={data.focus}
                            onChangeValue={(value) =>
                                setData((prev) => ({ ...prev, focus: value }))
                            }
                        />
                    </div>
                    <div className="acompanhamento-paciente__form__group">
                        <h3>Interação social</h3>
                        <ScaleSelector
                            leftLabel="Muito social"
                            rightLabel="Isolado"
                            value={data.socialInteraction}
                            onChangeValue={(value) =>
                                setData((prev) => ({
                                    ...prev,
                                    socialInteraction: value,
                                }))
                            }
                        />
                    </div>
                    <div className="acompanhamento-paciente__form__group">
                        <h3>Rigidez/Espasticidade</h3>
                        <ScaleSelector
                            leftLabel="Nenhuma"
                            rightLabel="Intensa"
                            value={data.rigidity}
                            onChangeValue={(value) =>
                                setData((prev) => ({
                                    ...prev,
                                    rigidity: value,
                                }))
                            }
                        />
                    </div>
                    <div className="acompanhamento-paciente__form__group">
                        <h3>Diminuição de Maconha Fumada/Outra Substância</h3>
                        <ScaleSelector
                            leftLabel="Completa"
                            rightLabel="Nenhuma"
                            value={data.substance}
                            onChangeValue={(value) =>
                                setData((prev) => ({
                                    ...prev,
                                    substance: value,
                                }))
                            }
                        />
                    </div>
                    <div className="acompanhamento-paciente__form__group">
                        <h3>Náusea e Vômito</h3>
                        <ScaleSelector
                            leftLabel="Ausente"
                            rightLabel="Frequente"
                            value={data.vomit}
                            onChangeValue={(value) =>
                                setData((prev) => ({ ...prev, vomit: value }))
                            }
                        />
                    </div>
                    <div className="acompanhamento-paciente__form__group">
                        <h3>Performance no Esporte</h3>
                        <ScaleSelector
                            leftLabel="Ótimo desempenho"
                            rightLabel="Baixo desempeho"
                            value={data.sport}
                            onChangeValue={(value) =>
                                setData((prev) => ({ ...prev, sport: value }))
                            }
                        />
                    </div>
                    <div className="acompanhamento-paciente__form__group">
                        <h3>Doença dermatológica</h3>
                        <ScaleSelector
                            leftLabel="Leve"
                            rightLabel="Intensa"
                            value={data.dermat}
                            onChangeValue={(value) =>
                                setData((prev) => ({ ...prev, dermat: value }))
                            }
                        />
                        <input placeholder="Especifique a doença..." />
                    </div>
                    <div className= "acompanhamento-paciente__form__group">
                        <h3>Anotações</h3>
                        <textarea
                            id="anotacao"
                            placeholder="Escreva aqui qualquer ponto que julgar relevante"
                            rows="4"
                        ></textarea>
                    </div>
                    <div className= "acompanhamento-paciente_end">
                        <button className="button" onClick={handleReturnDash}>Salvar</button>
                        <button className="button-secondary" onClick={handleReturnDash}>Cancelar</button>
                    </div>
                </div>
            </div>
        </div>

        </div>
    );
}
