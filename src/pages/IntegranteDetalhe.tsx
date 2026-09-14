import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Button from '../components/Button'
import { integrantes } from '../data/integrantes'

export default function IntegranteDetalhe() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const integrante = integrantes.find((item) => item.id === id)

  if (!integrante) {
    return <Navigate to="/integrantes" replace />
  }

  const iniciais = integrante.nome
    .split(' ')
    .slice(0, 2)
    .map((nome) => nome[0])
    .join('')

  return (
    <section className="mx-auto max-w-3xl px-4 py-16 md:px-8">
      <button
        type="button"
        onClick={() => navigate('/integrantes')}
        className="mb-6 font-semibold text-brand-600 hover:underline"
      >
        ← Voltar para equipe
      </button>

      <article className="rounded-3xl border bg-white p-8 shadow-sm">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-brand-100 text-3xl font-black text-brand-600">
          {iniciais}
        </div>

        <h1 className="mt-6 text-3xl font-black">{integrante.nome}</h1>

        <p className="mt-2 font-bold text-brand-600">
          RM {integrante.rm} • {integrante.turma}
        </p>

        <p className="mt-5 text-slate-600">{integrante.funcao}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={integrante.github} target="_blank" rel="noreferrer">
            <Button>GitHub</Button>
          </a>

          <a href={integrante.linkedin} target="_blank" rel="noreferrer">
            <Button variant="secondary">LinkedIn</Button>
          </a>
        </div>
      </article>
    </section>
  )
}
