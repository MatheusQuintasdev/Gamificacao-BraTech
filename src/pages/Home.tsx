import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import SectionTitle from '../components/SectionTitle'

const destaques = [
  {
    titulo: 'Desafios',
    descricao:
      'Ações simples e objetivas para incorporar sustentabilidade à rotina.',
  },
  {
    titulo: 'Pontuação',
    descricao:
      'Cada atitude concluída gera pontos e torna a evolução visível.',
  },
  {
    titulo: 'Avatar inteligente',
    descricao:
      'Uma simulação conversacional oferece dicas e orientações eco-friendly.',
  },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <>
      <section className="overflow-hidden bg-ink">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 md:px-8 lg:grid-cols-2 lg:py-28">
          <div>
            <span className="rounded-full bg-brand-500/15 px-4 py-2 text-sm font-bold text-brand-400">
              Challenge FIAP + SoulUp
            </span>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Hábitos sustentáveis que viram{' '}
              <span className="text-brand-400">progresso.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              A BraTech transforma ações ecológicas em uma jornada de
              gamificação com pontos, desafios e orientação de um avatar
              sustentável.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button onClick={() => navigate('/gamificacao')}>
                Conhecer a gamificação
              </Button>

              <Button
                variant="secondary"
                className="border-brand-400 text-brand-400 hover:bg-white/5"
                onClick={() => navigate('/avatar')}
              >
                Conversar com o Avatar
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
            <div className="rounded-2xl bg-white p-6">
              <p className="text-sm font-bold text-brand-600">SEU IMPACTO</p>
              <p className="mt-2 text-5xl font-black text-ink">230 pts</p>

              <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-3/4 rounded-full bg-brand-500" />
              </div>

              <p className="mt-3 text-sm text-slate-500">
                Faltam 70 pontos para o próximo nível.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <SectionTitle
          eyebrow="Nossa proposta"
          title="Sustentabilidade com feedback imediato"
          description="Uma experiência pensada para aproximar pessoas de práticas sustentáveis sem transformar a mudança de hábito em uma tarefa complicada."
          center
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {destaques.map((destaque) => (
            <article
              key={destaque.titulo}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >
              <div className="mb-4 h-2 w-12 rounded bg-brand-500" />
              <h3 className="text-xl font-bold">{destaque.titulo}</h3>
              <p className="mt-3 leading-7 text-slate-600">
                {destaque.descricao}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
