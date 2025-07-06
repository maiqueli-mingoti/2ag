import React from 'react';
import { useNavigate } from 'react-router';
import './header.css';

export default function Header({
                                   title = "Dr. Maria Santos - CRM 12345",
                                   showBackButton = true,
                                   backButtonText = "Voltar",
                                   onBackClick = null
                               }) {
    const navigate = useNavigate();

    const handleBack = () => {
        if (onBackClick) {
            onBackClick();
        } else {
            navigate(-1);
        }
    };

    return (
        <header className="dashboard-header">
            <img src="/images/logotipo-icon.svg" alt="Logo" className="logo" />
            <div className="dashboard-header__user">
                <span>{title}</span>
                {showBackButton && (
                    <button className="button-secondary" onClick={handleBack}>
                        {backButtonText}
                    </button>
                )}
            </div>
        </header>
    );
}

