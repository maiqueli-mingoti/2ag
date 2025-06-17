import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../pages/Login/Login.jsx';
import AcompanhamentoPaciente from "../pages/AcompanhamentoPaciente/AcompanhamentoPaciente.jsx";

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/', // Rota para a página principal (podemos mudar depois)
        element: <div>Página Principal</div>,
    },
    {
        path: '/acompanhamentopaciente',
        element: <AcompanhamentoPaciente/>,
    }
]);

export default function AppRoutes() {
    return <RouterProvider router={router} />;
}