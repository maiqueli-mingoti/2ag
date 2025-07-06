import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import './notiicacoes-paciente.css';
import Header from "../../components/header/header.jsx";

export default function NotificacoesPaciente() {
    const [notifications, setNotifications] = useState([]);
    const [unreadCount, setUnreadCount] = useState(0);
    const [filter, setFilter] = useState('all');
    const [typeFilter, setTypeFilter] = useState('all');
    const navigate = useNavigate();

    useEffect(() => {
        const mockNotifications = [
            {
                id: 1,
                type: 'appointment',
                title: 'Compromisso Agendado',
                message: 'Sua consulta com Dr. Maria Santos foi agendada para amanhã às 09:00',
                timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 minutos atrás
                read: false,
                icon: '📅'
            },
            {
                id: 2,
                type: 'alert',
                title: 'Lembrete de Consulta',
                message: 'Sua consulta com Dr. João Medeiros é em 1 hora. Prepare-se!',
                timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000),
                read: false,
                icon: '⏰',
                priority: 'medium'
            },
            {
                id: 3,
                type: 'form',
                title: 'Formulário Pendente',
                message: 'Você tem um formulário de acompanhamento semanal pendente. Por favor, preencha-o.',
                timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
                read: false,
                icon: '📋'
            },
            {
                id: 4,
                type: 'appointment',
                title: 'Consulta Cancelada',
                message: 'Sua consulta com Dr. Ana Paula foi cancelada. Favor reagendar.',
                timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000),
                read: true,
                icon: '❌'
            },
            {
                id: 5,
                type: 'alert',
                title: 'Medicamento: Atenção',
                message: 'Lembre-se de tomar seu medicamento às 20:00 hoje.',
                timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
                read: true,
                icon: '💊',
                priority: 'low'
            },
            {
                id: 6,
                type: 'form',
                title: 'Formulário de Anamnese',
                message: 'Seu formulário de anamnese pré-consulta está pronto para ser preenchido.',
                timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
                read: false,
                icon: '📝'
            }
        ];

        setNotifications(mockNotifications);
        setUnreadCount(mockNotifications.filter(n => !n.read).length);
    }, []);

    const handleBack = () => {
        navigate(-1);
    };

    const markAsRead = (notificationId) => {
        setNotifications(prev =>
            prev.map(notification =>
                notification.id === notificationId
                    ? { ...notification, read: true }
                    : notification
            )
        );
        setUnreadCount(prev => Math.max(0, prev - 1));
    };

    const markAllAsRead = () => {
        setNotifications(prev =>
            prev.map(notification => ({ ...notification, read: true }))
        );
        setUnreadCount(0);
    };

    const deleteNotification = (notificationId) => {
        setNotifications(prev => prev.filter(n => n.id !== notificationId));
        const notification = notifications.find(n => n.id === notificationId);
        if (notification && !notification.read) {
            setUnreadCount(prev => Math.max(0, prev - 1));
        }
    };

    const formatTimestamp = (timestamp) => {
        const now = new Date();
        const diff = now - timestamp;
        const minutes = Math.floor(diff / (1000 * 60));
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));

        if (minutes < 60) {
            return `${minutes}m atrás`;
        } else if (hours < 24) {
            return `${hours}h atrás`;
        } else {
            return `${days}d atrás`;
        }
    };

    const getNotificationTypeClass = (type, priority) => {
        if (priority === 'high') return 'notification-high-priority';
        switch (type) {
            case 'appointment': return 'notification-appointment';
            case 'alert': return 'notification-alert';
            case 'form': return 'notification-form';
            default: return '';
        }
    };

    const getTypeLabel = (type) => {
        switch (type) {
            case 'appointment': return 'Compromissos';
            case 'alert': return 'Alertas';
            case 'form': return 'Formulários';
            default: return 'Todos';
        }
    };

    const filteredNotifications = notifications.filter(notification => {
        const statusMatch = filter === 'all' ||
            (filter === 'unread' && !notification.read) ||
            (filter === 'read' && notification.read);

        const typeMatch = typeFilter === 'all' || notification.type === typeFilter;

        return statusMatch && typeMatch;
    });

    return (
        <div className="notifications-page">
            <Header
                title="João Silva"
                showBackButton={true}
                backButtonText="Voltar"
                onBackClick={handleBack}
            />

            <main className="notifications-main-content">
                <div className="notifications-controls">
                    <h1>Minhas Notificações</h1>
                    <div className="header-actions">
                        {unreadCount > 0 && (
                            <button
                                className="mark-all-read-btn"
                                onClick={markAllAsRead}
                            >
                                Marcar todas como lidas ({unreadCount})
                            </button>
                        )}
                    </div>
                </div>

                <div className="filters-and-summary-container">
                    <div className="filters">
                        <div className="filter-group">
                            <label>Status:</label>
                            <select
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                                className="filter-select"
                            >
                                <option value="all">Todas</option>
                                <option value="unread">Não lidas</option>
                                <option value="read">Lidas</option>
                            </select>
                        </div>

                        <div className="filter-group">
                            <label>Tipo:</label>
                            <select
                                value={typeFilter}
                                onChange={(e) => setTypeFilter(e.target.value)}
                                className="filter-select"
                            >
                                <option value="all">Todos os tipos</option>
                                <option value="appointment">Compromissos</option>
                                <option value="alert">Alertas</option>
                                <option value="form">Formulários</option>
                            </select>
                        </div>
                    </div>

                    <div className="notifications-summary">
                        <div className="summary-item">
                            <span className="summary-number">{notifications.length}</span>
                            <span className="summary-label">Total</span>
                        </div>
                        <div className="summary-item">
                            <span className="summary-number">{unreadCount}</span>
                            <span className="summary-label">Não lidas</span>
                        </div>
                        <div className="summary-item">
                            <span className="summary-number">{filteredNotifications.length}</span>
                            <span className="summary-label">Filtradas</span>
                        </div>
                    </div>
                </div>

                <div className="notifications-list">
                    {filteredNotifications.length === 0 ? (
                        <div className="no-notifications">
                            <span className="no-notifications-icon">📭</span>
                            <h3>Nenhuma notificação encontrada</h3>
                            <p>Não há notificações que correspondam aos filtros selecionados.</p>
                        </div>
                    ) : (
                        filteredNotifications.map(notification => (
                            <div
                                key={notification.id}
                                className={`notification-card ${
                                    !notification.read ? 'unread' : ''
                                } ${getNotificationTypeClass(notification.type, notification.priority)}`}
                            >
                                <div className="notification-card-header">
                                    <div className="notification-icon">
                                        {notification.icon}
                                    </div>
                                    <div className="notification-meta">
                                        <span className="notification-type">
                                            {getTypeLabel(notification.type)}
                                        </span>
                                        <span className="notification-timestamp">
                                            {formatTimestamp(notification.timestamp)}
                                        </span>
                                    </div>
                                    <div className="notification-actions">
                                        {!notification.read && (
                                            <button
                                                className="mark-read-btn"
                                                onClick={() => markAsRead(notification.id)}
                                                title="Marcar como lida"
                                            >
                                                ✓
                                            </button>
                                        )}
                                        <button
                                            className="delete-btn"
                                            onClick={() => deleteNotification(notification.id)}
                                            title="Excluir notificação"
                                        >
                                            🗑️
                                        </button>
                                    </div>
                                </div>

                                <div className="notification-card-content">
                                    <h3 className="notification-title">
                                        {notification.title}
                                        {!notification.read && (
                                            <span className="unread-indicator"></span>
                                        )}
                                    </h3>
                                    <p className="notification-message">
                                        {notification.message}
                                    </p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </main>
        </div>
    );
}