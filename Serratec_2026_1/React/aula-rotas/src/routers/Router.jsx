import { Routes, Route } from 'react-router';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { PageNotFound } from '../pages/Page404';
import { Admin } from '../pages/Admin';
import { Layout } from '../components/Layout';
import { Header } from '../components/Header';

export const Routers = () => {

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
                <Route path='/admin' element={<Admin />} />
            </Route>

            <Route path='/login' element={<Login />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
}