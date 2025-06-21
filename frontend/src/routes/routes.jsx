import { createBrowserRouter, RouterProvider } from "react-router";
import AcompanhamentoSemanal from "../pages/acompanhamento-semanal/acompanhamento-semanal.jsx";
import Login from "../pages/login/login.jsx";
import AcompanhamentoPaciente from "../pages/acompanhamento-paciente/acompanhamento-paciente.jsx";
import DadosConsultorio from "../pages/dados-consultorio/dados-consultorio.jsx";
import Dashboard from "../pages/dashboard/dashboard.jsx";
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
        path:"/dashboard",
        element: <Dashboard/>,
    },
    {
        path:"/prescricao",
        element:<Prescricao/>
    }
]);

export default function Routes() {
    return <RouterProvider router={router} />;
}
