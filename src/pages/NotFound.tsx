import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center">
      <p className="text-7xl font-black text-brand-500">404</p>
      <h1 className="mt-4 text-3xl font-black">Página não encontrada</h1>
      <p className="mt-3 text-slate-600">
        O endereço informado não existe nesta aplicação.
      </p>

      <Button className="mt-7" onClick={() => navigate('/')}>
        Voltar para Home
      </Button>
    </section>
  )
}
