import SectionTitle from '../components/SectionTitle'

const etapas = [
  {
    numero: '01',
    titulo: 'Descobrir',
    descricao:
      'O usuário encontra ações sustentáveis compatíveis com o cotidiano.',
  },
  {
    numero: '02',
    titulo: 'Agir',
    descricao: 'Seleciona e conclui desafios para registrar seu progresso.',
  },
  {
    numero: '03',
    titulo: 'Evoluir',
    descricao:
      'A pontuação cria feedback visual e incentiva a continuidade.',
  },
]

export default function Sobre() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <SectionTitle
        eyebrow="Sobre a BraTech"
        title="Tecnologia, engajamento e sustentabilidade"
        description="A BraTech nasceu da união de estudantes da turma 1TDSR para desenvolver soluções digitais alinhadas ao Challenge SoulUp."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl bg-ink p-8 text-white">
          <h3 className="text-2xl font-bold">O problema</h3>
          <p className="mt-4 leading-8 text-slate-300">
            Hábitos sustentáveis muitas vezes parecem distantes da rotina. Sem
            orientação, acompanhamento e incentivo, pequenas ações de impacto
            positivo podem ser esquecidas.
          </p>
        </article>

        <article className="rounded-3xl bg-brand-50 p-8">
          <h3 className="text-2xl font-bold">Nossa solução</h3>
          <p className="mt-4 leading-8 text-slate-700">
            Criamos uma experiência de gamificação sustentável para a
            comunidade SoulUp, combinando desafios, pontos e um avatar que
            orienta o usuário com dicas práticas.
          </p>
        </article>
      </div>

      <div className="mt-12 rounded-3xl border bg-white p-8">
        <h3 className="text-2xl font-bold">Como a experiência funciona</h3>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {etapas.map((etapa) => (
            <div key={etapa.numero}>
              <span className="text-3xl font-black text-brand-500">
                {etapa.numero}
              </span>
              <h4 className="mt-2 font-bold">{etapa.titulo}</h4>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {etapa.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
