import { Route, Routes } from 'react-router'
import { Home } from '../pages/Home/home.jsx';
import { LoginSegundo } from '../pages/Login';

const PageError = () => {
  return (
    <div>
      <h1>Pagina nao encontrada</h1>
    </div>
  )
}

export const Routers = () => {

  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/login' element={<LoginSegundo />} />

      <Route path='*' element={<PageError />} />
    </Routes>
  )
}
