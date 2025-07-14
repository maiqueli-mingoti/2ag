import React, {useState} from "react";
import ScaleSelector from "../../components/scale-selector/scale-selector.jsx";
import "./acompanhamento-semanal-paciente.css";
import {useNavigate} from "react-router-dom";
import Header from "../../components/header/header.jsx";

// função auxiliar pra pegar o id do usuário do token
function getUserIdFromToken() {
    const token = localStorage.getItem("authToken");
    if (!token) return null;
    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload.id;
    } catch (e) {
        return null;
    }
}

export default function AcompanhamentoSemanalPaciente() {
    const navigate = useNavigate();
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
        dermat: 0,
        comment: ""
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const patientId = getUserIdFromToken();
        if (!patientId) {
            setError("Usuário não autenticado. Faça o login novamente.");
            setIsLoading(false);
            return;
        }

        // montagem do payload com os nomes corretos que o backend espera
        const payload = {
            assessmentDate: new Date().toISOString().split('T')[0],
            patient: {id: patientId},
            morningDrops: Number(data.morningDrops),
            afternoonDrops: Number(data.afternoonDrops),
            pain: data.pain,
            sleep: data.sleep,
            mood: data.mood,
            tremor: data.shaking,
            anxiety: data.anxiety,
            disposition: data.energy,
            intestinalFunction: data.bowelFunction,
            appetite: data.apetite,
            concentration: data.focus,
            socialInteraction: data.socialInteraction,
            rigiditySpasticity: data.rigidity,
            substanceReduction: data.substance,
            sportsPerformance: data.sport,
            nausea: data.vomit,
            dermatologicalDisease: data.dermat, // dermatologicalDisease
            comment: data.comment
        };

        try {
            const token = localStorage.getItem("authToken");
            const response = await fetch("http://localhost:8080/acompanhamento", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || "Falha ao salvar acompanhamento.");
            }

            alert("Acompanhamento salvo com sucesso!");
            navigate("/dashboard-paciente");

        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleReturnDash = (e) => {

        e.preventDefault();
        navigate("/dashboard-paciente");

    };

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <Header
                showBackButton={true}
                backButtonText="Voltar"
                onBackClick={handleBack}
            />
            <div className="acompanhamento-paciente-page">
                <div className="acompanhamento-paciente__content">
                    <div className="acompanhamento-paciente__header">
                        <h1>Acompanhamento Semanal</h1>
                        <h2>Registre como foi sua semana nos últimos 7 dias:</h2>
                    </div>
                    <form className="acompanhamento-paciente__form" onSubmit={handleSubmit}>
                        <div className="acompanhamento-paciente__form__row">
                            {error && <p className="error-message">{error}</p>}
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
                                    setData((prev) => ({...prev, pain: value}))
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
                                    setData((prev) => ({...prev, sleep: value}))
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
                                    setData((prev) => ({...prev, mood: value}))
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
                                    setData((prev) => ({...prev, shaking: value}))
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
                                    setData((prev) => ({...prev, anxiety: value}))
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
                                    setData((prev) => ({...prev, energy: value}))
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
                                rightLabel="Alteração no apetite"
                                value={data.apetite}
                                onChangeValue={(value) =>
                                    setData((prev) => ({...prev, apetite: value}))
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
                                    setData((prev) => ({...prev, focus: value}))
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
                                    setData((prev) => ({...prev, vomit: value}))
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
                                    setData((prev) => ({...prev, sport: value}))
                                }
                            />
                        </div>
                        <div className="acompanhamento-paciente__form__group">
                            <h3>Doença dermatológica</h3>
                            <ScaleSelector
                                leftLabel="Nenhuma"
                                rightLabel="Intensa"
                                value={data.dermat}
                                onChangeValue={(value) =>
                                    setData((prev) => ({...prev, dermat: value}))
                                }
                            />
                        </div>
                        <div className="acompanhamento-paciente__form__group">
                            <h3>Anotações</h3>
                            <textarea
                                id="anotacao"
                                name="comment"
                                placeholder="Escreva aqui qualquer ponto que julgar relevante"
                                rows="4"
                                value={data.comment}
                                onChange={(e) => setData(prev => ({...prev, comment: e.target.value}))}
                            ></textarea>
                        </div>
                        <div className="acompanhamento-paciente_end">
                            <button type="submit" className="button" disabled={isLoading}>
                                {isLoading ? "Salvando..." : "Salvar"}
                            </button>
                            <button type="button" className="button-secondary" onClick={handleBack}>
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
