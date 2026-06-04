import { Outlet } from 'react-router'
import { Header } from '../Header/index.jsx'
import { Footer } from '../Footer'

export const Layout = () => {

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}