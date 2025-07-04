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
import AgendamentoPaciente from "../pages/agendamento-paciente/agendamento-paciente.jsx";
import DiarioSono from "../pages/diario-sono/diario-sono.jsx";
import MiniExame from "../pages/mini-exame/mini-exame-estado-mental.jsx"

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
   /* {
        path: "/agendamento-paciente",
        element: <AgendamentoPaciente />,
    }, */
    {
        path: "/diario-sono",
        element: <DiarioSono />,
    },
    {
        path: "/mini-exame",
        element: <MiniExame />
    }
]);

export default function Routes() {
    return <RouterProvider router={router} />;
}
