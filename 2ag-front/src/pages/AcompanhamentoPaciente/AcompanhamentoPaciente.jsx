import React, { useState } from "react";
import './AcompanhamentoPaciente.css';

export default function AcompanhamentoPaciente() {
    const [formData, setFormData] = useState({
        estadoGeral: '',
        condicaoAnterior: '',
        dificuldadesAtividades: '',
        qualidadeSono: '',
        melhoraSintomas: '',
        observacoesAdicionais: ''
    });

    const [arquivos, setArquivos] = useState([]);

    const handleInputChange = (campo, valor) => {
        setFormData(prev => ({
            ...prev,
            [campo]: valor
        }));
    };

    const handleFileUpload = (event) => {
        const files = Array.from(event.target.files);
        setArquivos(prev => [...prev, ...files]);
    };

    const removeFile = (index) => {
        setArquivos(prev => prev.filter((_, i) => i !== index));
    };

    const handleSalvar = () => {
        console.log("Salvando acompanhamento:", formData);
        console.log("Arquivos:", arquivos);
    };

    const opcoes = {
        estadoGeral: ['Excelente', 'Bom', 'Regular', 'Ruim', 'Péssimo'],
        condicaoAnterior: ['Muito melhor', 'Um pouco melhor', 'Igual', 'Um pouco pior', 'Muito pior'],
        dificuldadesAtividades: ['Nenhuma', 'Leve', 'Moderada', 'Intensa', 'Extrema'],
        qualidadeSono: ['Excelente', 'Boa', 'Regular', 'Ruim', 'Péssima'],
        melhoraSintomas: ['Melhora significativa', 'Melhora moderada', 'Pouca melhora', 'Nenhuma melhora', 'Piora dos sintomas']
    };

    return (
        <div className="acompanhamento-container">
            <header className="acompanhamento-header">
                <h1>Acompanhamento Semanal</h1>
                <p>Registre suas informações semanais para ajudar no acompanhamento do seu tratamento.</p>
            </header>

            <div className="acompanhamento-content">
                <div className="tabs-container">
                    <div className="tabs">
                        <button className="tab active">Sintomas</button>
                        <button className="tab">Questionário</button>
                        <button className="tab">Medicamentos</button>
                        <button className="tab">Estado Clínico</button>
                    </div>
                </div>

                <div className="form-section">
                    <h2>Registro de Evolução</h2>
                    <p>Informe seu estado de saúde e sintomas por semana.</p>

                    <div className="questions-container">
                        <div className="question-group">
                            <h3>Como você avalia seu estado geral de saúde nesta semana?</h3>
                            <div className="radio-options">
                                {opcoes.estadoGeral.map(opcao => (
                                    <label key={opcao} className="radio-option">
                                        <input
                                            type="radio"
                                            name="estadoGeral"
                                            value={opcao}
                                            checked={formData.estadoGeral === opcao}
                                            onChange={(e) => handleInputChange('estadoGeral', e.target.value)}
                                        />
                                        <span>{opcao}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="question-group">
                            <h3>Comparado com a semana anterior, como está sua condição?</h3>
                            <div className="radio-options">
                                {opcoes.condicaoAnterior.map(opcao => (
                                    <label key={opcao} className="radio-option">
                                        <input
                                            type="radio"
                                            name="condicaoAnterior"
                                            value={opcao}
                                            checked={formData.condicaoAnterior === opcao}
                                            onChange={(e) => handleInputChange('condicaoAnterior', e.target.value)}
                                        />
                                        <span>{opcao}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="question-group">
                            <h3>Você teve dificuldades para realizar suas atividades diárias?</h3>
                            <div className="radio-options">
                                {opcoes.dificuldadesAtividades.map(opcao => (
                                    <label key={opcao} className="radio-option">
                                        <input
                                            type="radio"
                                            name="dificuldadesAtividades"
                                            value={opcao}
                                            checked={formData.dificuldadesAtividades === opcao}
                                            onChange={(e) => handleInputChange('dificuldadesAtividades', e.target.value)}
                                        />
                                        <span>{opcao}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="question-group">
                            <h3>Como foi a qualidade do seu sono nesta semana?</h3>
                            <div className="radio-options">
                                {opcoes.qualidadeSono.map(opcao => (
                                    <label key={opcao} className="radio-option">
                                        <input
                                            type="radio"
                                            name="qualidadeSono"
                                            value={opcao}
                                            checked={formData.qualidadeSono === opcao}
                                            onChange={(e) => handleInputChange('qualidadeSono', e.target.value)}
                                        />
                                        <span>{opcao}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="question-group">
                            <h3>Você notou alguma melhora nos sintomas após o uso da medicação?</h3>
                            <div className="radio-options">
                                {opcoes.melhoraSintomas.map(opcao => (
                                    <label key={opcao} className="radio-option">
                                        <input
                                            type="radio"
                                            name="melhoraSintomas"
                                            value={opcao}
                                            checked={formData.melhoraSintomas === opcao}
                                            onChange={(e) => handleInputChange('melhoraSintomas', e.target.value)}
                                        />
                                        <span>{opcao}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="question-group">
                            <h3>Observações adicionais</h3>
                            <textarea
                                className="observations-textarea"
                                placeholder="Descreva qualquer informação adicional sobre seu estado de saúde que considere relevante..."
                                value={formData.observacoesAdicionais}
                                onChange={(e) => handleInputChange('observacoesAdicionais', e.target.value)}
                                rows={4}
                            />
                        </div>

                        <div className="question-group">
                            <h3>Anexar documentos ou planilhas</h3>
                            <div className="file-upload-section">
                                <input
                                    type="file"
                                    id="file-upload"
                                    multiple
                                    onChange={handleFileUpload}
                                    className="file-input"
                                />
                                <label htmlFor="file-upload" className="file-upload-label">
                                    <span>📎</span>
                                    Anexar planilhas ou documentos complementares
                                </label>
                            </div>

                            {arquivos.length > 0 && (
                                <div className="uploaded-files">
                                    <h4>Arquivos anexados:</h4>
                                    {arquivos.map((file, index) => (
                                        <div key={index} className="file-item">
                                            <span className="file-name">{file.name}</span>
                                            <button
                                                className="remove-file-btn"
                                                onClick={() => removeFile(index)}
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="form-actions">
                        <button className="btn btn-secondary">Cancelar</button>
                        <button className="btn btn-primary" onClick={handleSalvar}>
                            Salvar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
