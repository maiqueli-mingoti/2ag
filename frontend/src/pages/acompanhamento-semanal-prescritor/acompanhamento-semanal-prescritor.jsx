import "./acompanhamento-semanal-prescritor.css";
import Header from "../../components/header/header.jsx";
import React from "react";
import {useNavigate} from "react-router";

export default function AcompanhamentoSemanalPrescritor() {
    const navigate = useNavigate();
    const handleReturnDash = (e) => {
        e.preventDefault();
        navigate("/dashboard-paciente");
    };
    return (
        <div className="acompanhamento-semanal">
            <Header
                title="Dr. Maria Santos - CRM 12345"
                showBackButton={true}
                backButtonText="Voltar"
                onBackClick={handleReturnDash}
            />
        </div>
    );
}
