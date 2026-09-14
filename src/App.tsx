import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Avatar from './pages/Avatar'
import Contato from './pages/Contato'
import Faq from './pages/Faq'
import Gamificacao from './pages/Gamificacao'
import Home from './pages/Home'
import IntegranteDetalhe from './pages/IntegranteDetalhe'
import Integrantes from './pages/Integrantes'
import NotFound from './pages/NotFound'
import Sobre from './pages/Sobre'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/gamificacao" element={<Gamificacao />} />
        <Route path="/avatar" element={<Avatar />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/integrantes" element={<Integrantes />} />
        <Route path="/integrantes/:id" element={<IntegranteDetalhe />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
