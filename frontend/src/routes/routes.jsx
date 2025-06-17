import {createBrowserRouter, RouterProvider} from "react-router";
import Login from "../pages/login/login.jsx";
import AcompanhamentoPaciente from "../pages/acompanhamento-paciente/acompanhamento-paciente.jsx";

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login/>,
    },
    {
        path: '/', // // Rota para a página principal (podemos mudar depois)
        element: <div> Página Principal</div>,
    },
    {
        path: '/acompanhamento-paciente',
        element: <AcompanhamentoPaciente/>,
    }
]);

export default () => {
    return <RouterProvider router={router}/>;
}
