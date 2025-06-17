import { createBrowserRouter, RouterProvider } from "react-router";
import AcompanhamentoSemanal from "../pages/acompanhamento-semanal/acompanhamento-semanal.jsx";
import Login from "../pages/login/login.jsx";

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
]);

export default function Routes() {
    return <RouterProvider router={router} />;
}
