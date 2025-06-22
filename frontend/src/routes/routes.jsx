import { createBrowserRouter, RouterProvider } from "react-router";
import AcompanhamentoSemanal from "../pages/acompanhamento-semanal/acompanhamento-semanal.jsx";
import Login from "../pages/login/login.jsx";
import AcompanhamentoPaciente from "../pages/acompanhamento-paciente/acompanhamento-paciente.jsx";
import DadosConsultorio from "../pages/dados-consultorio/dados-consultorio.jsx";
import DashboardPaciente from "../pages/dashboard-paciente/dashboard-paciente.jsx";
import Prescricao from "../pages/prescricao/prescricao.jsx";
import {Navigate} from "react-router";

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
        path: "/acompanhamento-semanal",
        element: <AcompanhamentoSemanal />,
    },
    {
        path: "/acompanhamento-paciente",
        element: <AcompanhamentoPaciente/>,
    },
    {
        path: "/dados-consultorio",
        element: <DadosConsultorio/>,
    },
    {
        path:"/dashboard-paciente",
        element: <DashboardPaciente/>,
    },
    {
        path:"/prescricao",
        element:<Prescricao/>
    }
]);

export default function Routes() {
    return <RouterProvider router={router} />;
}
