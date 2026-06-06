import { Routes, Route } from 'react-router';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { PageNotFound } from '../pages/Page404';
import { Admin } from '../pages/Admin';
import { Layout } from '../components/Layout';
import { Header } from '../components/Header';
import { useAuth } from '../contexts/useAuth';

export const RotasProtegidas = () => {}

export const RotasPrivadas = () => {

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path='/admin' element={<Admin />} />
            </Route>
        </Routes>
    )
}

export const RotasPublicas = () => {
    return (
        <Routes>
            {/* <Route element={<Layout />}>
                <Route path='/' element={<Home />} />
                <Route path='/home/:id' element={<Home />} />

                <Route path='/security'>
                    <Route path='admin' element={<Admin />} />
                </Route>
            </Route> */}

            <Route element={<Layout />}>
                <Route path='/home' element={<Home />} />
            </Route>

            <Route path='/login' element={<Login />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
}

export const Routers = () => {

    const { autenticado } = useAuth();

    return (
        <Routes>
            {autenticado ? <RotasPrivadas /> : <RotasPublicas />}
        </Routes>
    )
}