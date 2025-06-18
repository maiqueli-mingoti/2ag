import { createBrowserRouter, RouterProvider } from "react-router";
import AcompanhamentoSemanal from "../pages/acompanhamento-semanal/acompanhamento-semanal.jsx";
import Login from "../pages/login/login.jsx";
import AcompanhamentoPaciente from "../pages/acompanhamento-paciente/acompanhamento-paciente.jsx";
import DadosConsultorio from "../pages/dados-consultorio/dados-consultorio.jsx";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/", // // Rota para a página principal (podemos mudar depois)
        element: <div> Página Principal</div>,
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
    }
]);

export default function Routes() {
    return <RouterProvider router={router} />;
}
