import { createBrowserRouter } from 'react-router-dom';
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { PageError } from "../pages/PageError";
import { Layout } from "../components/Layout";

const messageError = "Pagina não encontrada!";
const messageAccessDenied = "Você não tem acesso a essa pagina!";

export const Routers = createBrowserRouter([
  {
    path: '*',
    element: <PageError message={messageError}/>
  },
  {
    path: '/diretor',
    element: <PageError message={messageAccessDenied} />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/home',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      }
    ]
  },
]);