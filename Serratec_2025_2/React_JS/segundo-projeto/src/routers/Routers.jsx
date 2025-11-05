import { Route, Routes, BrowserRouter } from 'react-router'
import { Home } from '../pages/Home/home.jsx';
import { LoginSegundo } from '../pages/Login';
import { About } from '../pages/About/index.jsx';
import { Layout } from '../components/Layout/index.jsx';
import { HomeV1 } from '../pages/HomeV1/index.jsx';

const PageError = () => {
  return (
    <div>
      <h1>Pagina nao encontrada</h1>
    </div>
  )
}

export const Routers = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginSegundo />} />

        {/* Rota de layout, sem o path */}
        <Route element={<Layout />}>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/homev1' element={<HomeV1 />} />
        </Route>

        {/* Rota Aninhada com o path
        <Route>
          <Route path='/dashboard' element={<Layout />}>
            <Route path='home' element={<HomeAluno />} />
            <Route path='about' element={<About />} />
          </Route>
        </Route>

        Rota Aninhada com o path
        <Route>
          <Route path='/professor' element={<Layout />}>
            <Route path='about' element={<About />} />
            <Route path='home' element={<HomeProfessor />} />
          </Route>
        </Route> */}

        <Route path='*' element={<PageError />} />
      </Routes>
    </BrowserRouter>
  )
}
