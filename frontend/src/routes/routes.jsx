import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import AcompanhamentoSemanalPaciente from "../pages/acompanhamento-semanal-paciente/acompanhamento-semanal-paciente.jsx";
import AcompanhamentoSemanalPrescritor from "../pages/acompanhamento-semanal-prescritor/acompanhamento-semanal-prescritor.jsx";
import ConsultaClinica from "../pages/consulta-clinica/consulta-clinica.jsx";
import DadosConsultorio from "../pages/dados-consultorio/dados-consultorio.jsx";
import DashboardPaciente from "../pages/dashboard-paciente/dashboard-paciente.jsx";
import DashboardPrescritor from "../pages/dashboard-prescritor/dashboard-prescritor.jsx";
import Login from "../pages/login/login.jsx";
import Prescricao from "../pages/prescricao/prescricao.jsx";
import SignUp from "../pages/sign-up/sign-up.jsx";
import DiarioSono from "../pages/diario-sono/diario-sono.jsx";
import MiniExame from "../pages/mini-exame/mini-exame-estado-mental.jsx"
import AgendamentoConsultaPaciente from "../pages/agendamento-consulta-paciente/agendamento-consulta-paciente.jsx";
import AgendamentoPrescritor from "../pages/agendamento-consulta-prescritor/agendamento-consulta-prescritor.jsx";
import EscalaPaciente from "../pages/escala-clinica-paciente/escala-clinica-paciente.jsx"
import SelecaoEscalas from "../pages/selecao-escalas/selecao-escalas.jsx";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/", //direciona para o login
        element: <Navigate to="/login" replace />,
    },
    {
        path: "/acompanhamento-prescritor",
        element: <AcompanhamentoSemanalPrescritor />,
    },
    {
        path: "/acompanhamento-paciente",
        element: <AcompanhamentoSemanalPaciente />,
    },
    {
        path: "/dados-consultorio",
        element: <DadosConsultorio />,
    },
    {
        path: "/dashboard-paciente",
        element: <DashboardPaciente />,
    },
    {
        path: "/dashboard-prescritor",
        element: <DashboardPrescritor />,
    },
    {
        path: "/prescricao",
        element: <Prescricao />,
    },
    {
        path: "/consulta",
        element: <ConsultaClinica />,
    },
    {
        path: "/sign-up",
        element: <SignUp />,
    },
    {
        path: "/diario-sono",
        element: <DiarioSono />,
    },
    {
        path: "/mini-exame",
        element: <MiniExame />
    },
    {
        path: "/agendamento-consulta",
        element: <AgendamentoConsultaPaciente />
    },
    {
        path: "/agendamento-prescritor",
        element: <AgendamentoPrescritor />
    },
    {
        path: "/escala-clinica",
        element: <EscalaPaciente />
    },
    {
        path: "/selecao-escalas",
        element: <SelecaoEscalas />
    }
]);

export default function Routes() {
    return <RouterProvider router={router} />;
}
