import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './selecao-escalas.css';
import '../../styles/colors.css';
import '../../styles/fonts.css';
import '../../styles/button.css';

const escalasDisponiveis = [
    { id: 'escala_sono', nome: 'Diário de Sono', descricao: 'Avalia a qualidade e a duração do sono do paciente.' },
    { id: 'escala_meem', nome: 'Mini-Exame do Estado Mental (MEEM)', descricao: 'Avalia a função cognitiva geral do paciente.' },
    { id: 'escala_humor', nome: 'Escala de Humor (0-10)', descricao: 'Mede o estado de humor geral do paciente.' },
    { id: 'escala_ansiedade', nome: 'Inventário de Ansiedade', descricao: 'Mede a intensidade dos sintomas de ansiedade.' },
    { id: 'escala_dor', nome: 'Escala para Dor', descricao: 'Mede a intensidade da dor percebida pelo paciente.' },
];

const listaPacientes = {
    '1': { nome: 'João da Silva' },
    '2': { nome: 'Maria Oliveira' },
    '3': { nome: 'Carlos Pereira' },
};

export default function SelecaoEscalas() {
    const navigate = useNavigate();
    const { pacienteId } = useParams();
    const paciente = listaPacientes[pacienteId] || { nome: 'Paciente não encontrado' };

    const [termoBusca, setTermoBusca] = useState('');
    const [escalasSelecionadas, setEscalasSelecionadas] = useState({});

    const handleReturn = () => {
        navigate('/dashboard-prescritor');
    };

    const handleSelecaoChange = (escalaId) => {
        setEscalasSelecionadas(prev => ({
            ...prev,
            [escalaId]: !prev[escalaId]
        }));
    };

    const handleSalvarSelecao = () => {
        const selecionadas = Object.keys(escalasSelecionadas).filter(id => escalasSelecionadas[id]);
        console.log(`Salvando para o Paciente ID: ${pacienteId}`, selecionadas);
        alert(`Escalas salvas com sucesso para ${paciente.nome}!`);
        navigate('/dashboard-prescritor');
    };

    const escalasFiltradas = escalasDisponiveis.filter(escala =>
        escala.nome.toLowerCase().includes(termoBusca.toLowerCase())
    );

    const totalSelecionadas = Object.values(escalasSelecionadas).filter(Boolean).length;

    return (
        <div className="selecao-escalas">
            <header className="selecao-header">
                <div className="header-left">
                    <img src="/images/logotipo-icon.svg" alt="Logo" className="logo" />
                </div>
                <nav className="header-nav">
                    <button className="button-secondary" onClick={handleReturn}>Voltar</button>
                </nav>
            </header>

            <main className="selecao-main">
                <div className="selecao-title">
                    <h1>Selecionar Escalas para {paciente.nome}</h1>
                    <p>Escolha as escalas de avaliação que ficarão disponíveis para o paciente preencher.</p>
                </div>

                <div className="selecao-container">
                    <div className="selecao-filtros">
                        <input
                            type="text"
                            placeholder="Buscar escala pelo nome..."
                            value={termoBusca}
                            onChange={(e) => setTermoBusca(e.target.value)}
                            className="busca-input"
                        />
                    </div>

                    <div className="lista-escalas-container">
                        {escalasFiltradas.map(escala => (
                            <div key={escala.id} className="escala-item">
                                <div className="escala-info">
                                    <h3>{escala.nome}</h3>
                                    <p>{escala.descricao}</p>
                                </div>
                                <div className="escala-selecao">
                                    <input
                                        type="checkbox"
                                        id={`checkbox-${escala.id}`}
                                        className="custom-checkbox"
                                        checked={!!escalasSelecionadas[escala.id]}
                                        onChange={() => handleSelecaoChange(escala.id)}
                                    />
                                    <label htmlFor={`checkbox-${escala.id}`}></label>
                                </div>
                            </div>
                        ))}
                    </div>

                    <footer className="selecao-footer">
                        <p>{totalSelecionadas} escala(s) selecionada(s)</p>
                        <button
                            className="button-primary"
                            onClick={handleSalvarSelecao}
                            disabled={totalSelecionadas === 0}
                        >
                            Salvar Seleção
                        </button>
                    </footer>
                </div>
            </main>
        </div>
    );
}