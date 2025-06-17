import React, {useState} from "react";
import './acompanhamento-paciente.css';

// O componente da escala de círculos que já criamos. Nenhuma alteração necessária aqui.
function EscalaDeOpiniao({labelEsquerda, labelDireita, selectedValue, onChange}) {
    const circulos = [
        {valor: 1, tipo: 'concordo', tamanho: 'grande'},
        {valor: 2, tipo: 'concordo', tamanho: 'medio'},
        {valor: 3, tipo: 'concordo', tamanho: 'pequeno'},
        {valor: 4, tipo: 'neutro', tamanho: 'x-pequeno'},
        {valor: 5, tipo: 'discordo', tamanho: 'pequeno'},
        {valor: 6, tipo: 'discordo', tamanho: 'medio'},
        {valor: 7, tipo: 'discordo', tamanho: 'grande'},
    ];

    return (
        <div className="escala-opiniao-wrapper">
            <span className="escala-opiniao-label-esquerda">{labelEsquerda}</span>
            <div className="escala-opiniao-container">
                {circulos.map(circulo => (
                    <button
                        key={circulo.valor}
                        type="button"
                        className={`circulo-btn ${circulo.tipo} ${circulo.tamanho} ${selectedValue === circulo.valor ? 'selected' : ''}`}
                        onClick={() => onChange(circulo.valor)}
                        aria-label={`Opção ${circulo.valor}`}
                    />
                ))}
            </div>
            <span className="escala-opiniao-label-direita">{labelDireita}</span>
        </div>
    );
}

// Componente principal do formulário, agora com todas as perguntas do PDF.
export default function AcompanhamentoPaciente() {
    // Estado do formulário atualizado com todos os parâmetros do PDF.
    const [formData, setFormData] = useState({
        gotasManha: '',
        gotasTarde: '',
        dor: null,
        sono: null,
        humor: null,
        tremor: null,
        ansiedade: null,
        disposicaoEnergia: null,
        funcaoIntestinal: null,
        apetite: null,
        concentracao: null,
        interacaoSocial: null,
        rigidezEspasticidade: null,
        diminuicaoSubstancia: null,
        nauseaVomito: null,
        performanceEsporte: null,
        doencaDermatologicaNome: '',
        doencaDermatologicaIntensidade: null,
        observacoesAdicionais: ''
    });

    const handleInputChange = (campo, valor) => {
        setFormData(prev => ({
            ...prev,
            [campo]: valor
        }));
    };

    const handleSalvar = () => {
        console.log("Salvando acompanhamento:", formData);
    };

    return (
        <div className="acompanhamento-container">
            <div className="acompanhamento-content">
                <header className="acompanhamento-header">
                    <h1>ACOMPANHAMENTO SEMANAL</h1>
                    <p>TERAPIA CANABINOIDE</p>
                </header>

                <div className="form-section">
                    <div className="questions-container">

                        {/* --- Inputs Numéricos --- */}
                        <div className="question-group question-group-inline">
                            <div className="numeric-input-group">
                                <label htmlFor="gotasManha">N.º gotas manhã</label>
                                <input
                                    type="number"
                                    id="gotasManha"
                                    className="numeric-input"
                                    placeholder="Dose"
                                    value={formData.gotasManha}
                                    onChange={(e) => handleInputChange('gotasManha', e.target.value)}
                                />
                            </div>
                            <div className="numeric-input-group">
                                <label htmlFor="gotasTarde">N.º gotas tarde</label>
                                <input
                                    type="number"
                                    id="gotasTarde"
                                    className="numeric-input"
                                    placeholder="Dose"
                                    value={formData.gotasTarde}
                                    onChange={(e) => handleInputChange('gotasTarde', e.target.value)}
                                />
                            </div>
                        </div>

                        {/* --- Escalas de Avaliação --- */}
                        <div className="question-group">
                            <h3>Dor</h3>
                            <EscalaDeOpiniao labelEsquerda="Sem dor" labelDireita="Dor intensa"
                                             selectedValue={formData.dor}
                                             onChange={(v) => handleInputChange('dor', v)}/>
                        </div>
                        <div className="question-group">
                            <h3>Sono</h3>
                            <EscalaDeOpiniao labelEsquerda="Excelente" labelDireita="Muito ruim"
                                             selectedValue={formData.sono}
                                             onChange={(v) => handleInputChange('sono', v)}/>
                        </div>
                        <div className="question-group">
                            <h3>Humor</h3>
                            <EscalaDeOpiniao labelEsquerda="Muito positivo" labelDireita="Deprimido"
                                             selectedValue={formData.humor}
                                             onChange={(v) => handleInputChange('humor', v)}/>
                        </div>
                        <div className="question-group">
                            <h3>Tremor</h3>
                            <EscalaDeOpiniao labelEsquerda="Ausente" labelDireita="Grave"
                                             selectedValue={formData.tremor}
                                             onChange={(v) => handleInputChange('tremor', v)}/>
                        </div>
                        <div className="question-group">
                            <h3>Ansiedade</h3>
                            <EscalaDeOpiniao labelEsquerda="Tranquilo" labelDireita="Muito ansioso"
                                             selectedValue={formData.ansiedade}
                                             onChange={(v) => handleInputChange('ansiedade', v)}/>
                        </div>
                        <div className="question-group">
                            <h3>Disposição/Energia</h3>
                            <EscalaDeOpiniao labelEsquerda="Muito enérgico" labelDireita="Sem energia"
                                             selectedValue={formData.disposicaoEnergia}
                                             onChange={(v) => handleInputChange('disposicaoEnergia', v)}/>
                        </div>
                        <div className="question-group">
                            <h3>Função Intestinal</h3>
                            <EscalaDeOpiniao labelEsquerda="Normal" labelDireita="Irregular"
                                             selectedValue={formData.funcaoIntestinal}
                                             onChange={(v) => handleInputChange('funcaoIntestinal', v)}/>
                        </div>
                        <div className="question-group">
                            <h3>Apetite</h3>
                            <EscalaDeOpiniao labelEsquerda="Apetite saudável" labelDireita="Sem apetite"
                                             selectedValue={formData.apetite}
                                             onChange={(v) => handleInputChange('apetite', v)}/>
                        </div>
                        <div className="question-group">
                            <h3>Concentração</h3>
                            <EscalaDeOpiniao labelEsquerda="Excelente" labelDireita="Muito baixa"
                                             selectedValue={formData.concentracao}
                                             onChange={(v) => handleInputChange('concentracao', v)}/>
                        </div>
                        <div className="question-group">
                            <h3>Interação social</h3>
                            <EscalaDeOpiniao labelEsquerda="Muito social" labelDireita="Isolado"
                                             selectedValue={formData.interacaoSocial}
                                             onChange={(v) => handleInputChange('interacaoSocial', v)}/>
                        </div>
                        <div className="question-group">
                            <h3>Rigidez/Espasticidade</h3>
                            <EscalaDeOpiniao labelEsquerda="Nenhuma" labelDireita="Intensa"
                                             selectedValue={formData.rigidezEspasticidade}
                                             onChange={(v) => handleInputChange('rigidezEspasticidade', v)}/>
                        </div>
                        <div className="question-group">
                            <h3>Diminuição de Maconha Fumada/Outra Substância</h3>
                            <EscalaDeOpiniao labelEsquerda="Completa" labelDireita="Nenhuma"
                                             selectedValue={formData.diminuicaoSubstancia}
                                             onChange={(v) => handleInputChange('diminuicaoSubstancia', v)}/>
                        </div>
                        <div className="question-group">
                            <h3>Náusea e Vômito</h3>
                            <EscalaDeOpiniao labelEsquerda="Ausente" labelDireita="Frequente"
                                             selectedValue={formData.nauseaVomito}
                                             onChange={(v) => handleInputChange('nauseaVomito', v)}/>
                        </div>
                        <div className="question-group">
                            <h3>Performance no Esporte</h3>
                            <EscalaDeOpiniao labelEsquerda="Ótimo desempenho" labelDireita="Baixo desempenho"
                                             selectedValue={formData.performanceEsporte}
                                             onChange={(v) => handleInputChange('performanceEsporte', v)}/>
                        </div>

                        {/* --- Campo Composto --- */}
                        <div className="question-group">
                            <h3>Doença dermatológica</h3>
                            <input
                                type="text"
                                className="text-input"
                                placeholder="Especificar a doença..."
                                value={formData.doencaDermatologicaNome}
                                onChange={(e) => handleInputChange('doencaDermatologicaNome', e.target.value)}
                            />
                            <h4 className="intensidade-label">Intensidade:</h4>
                            <EscalaDeOpiniao labelEsquerda="Leve" labelDireita="Intensa"
                                             selectedValue={formData.doencaDermatologicaIntensidade}
                                             onChange={(v) => handleInputChange('doencaDermatologicaIntensidade', v)}/>
                        </div>

                        {/* --- Campo de Observações --- */}
                        <div className="question-group">
                            <h3>Escreva aqui qualquer ponto que julgar relevante como, por exemplo, relato de algum
                                efeito colateral, a ausência da tomada de alguma medicação, o relato de algum momento
                                significativo na rotina, etc...</h3>
                            <textarea
                                className="observations-textarea"
                                value={formData.observacoesAdicionais}
                                onChange={(e) => handleInputChange('observacoesAdicionais', e.target.value)}
                                rows={5}
                            />
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="button" className="btn btn-secondary">Cancelar</button>
                        <button type="button" className="btn btn-primary" onClick={handleSalvar}>
                            Salvar Acompanhamento
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}