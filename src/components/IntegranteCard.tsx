import type { Integrante } from '../types'

interface IntegranteCardProps {
  integrante: Integrante
  onDetalhes: (id: string) => void
}

export default function IntegranteCard({
  integrante,
  onDetalhes,
}: IntegranteCardProps) {
  const iniciais = integrante.nome
    .split(' ')
    .slice(0, 2)
    .map((nome) => nome[0])
    .join('')

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div
        className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-100 text-2xl font-black text-brand-600"
        aria-label={`Foto não cadastrada de ${integrante.nome}`}
      >
        {iniciais}
      </div>

      <h3 className="mt-5 text-xl font-bold">{integrante.nome}</h3>

      <p className="mt-1 text-sm font-semibold text-brand-600">
        RM {integrante.rm} • {integrante.turma}
      </p>

      <p className="mt-3 text-sm text-slate-600">{integrante.funcao}</p>

      <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
        <a
          className="text-brand-600 hover:underline"
          href={integrante.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          className="text-brand-600 hover:underline"
          href={integrante.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>

      <button
        type="button"
        onClick={() => onDetalhes(integrante.id)}
        className="mt-5 w-full rounded-xl border border-brand-500 px-4 py-2 font-semibold text-brand-600 hover:bg-brand-50"
      >
        Ver perfil
      </button>
    </article>
  )
}
