import AcaoCard from '../components/AcaoCard'
import SectionTitle from '../components/SectionTitle'
import { useAcoesConcluidas } from '../context/AcoesContext'
import { useAcoes } from '../hooks/useAcoes'
import { apiConfigurada } from '../services/acoesApi'

export default function Gamificacao() {
  const { acoes, carregando, erro, carregar } = useAcoes()
  const { concluidas, alternar } = useAcoesConcluidas()

  const pontos = acoes
    .filter((acao) => concluidas.includes(acao.id))
    .reduce((total, acao) => total + acao.pontos, 0)

  const totalPossivel = acoes.reduce((total, acao) => total + acao.pontos, 0)
  const percentual = totalPossivel > 0 ? (pontos / totalPossivel) * 100 : 0

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <SectionTitle
        eyebrow="Solução 01"
        title="Gamificação sustentável"
        description="Conclua ações, acumule pontos e acompanhe seu progresso sustentável."
      />

      {!apiConfigurada && (
        <p className="mt-8 rounded-xl bg-amber-50 p-4 text-sm text-amber-900">
          Demonstração local: estas ações são exemplos. As conclusões ficam salvas somente neste navegador.
        </p>
      )}

      {erro && (
        <div role="alert" className="mt-8 rounded-xl bg-red-50 p-4 text-red-800">
          {erro}
          <button className="ml-4 font-bold underline" onClick={() => void carregar()}>Tentar novamente</button>
        </div>
      )}

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
        <div>
          {carregando ? (
            <p role="status">Carregando desafios...</p>
          ) : acoes.length === 0 ? (
            <p>Nenhuma ação disponível no momento.</p>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {acoes.map((acao) => (
                <AcaoCard
                  key={acao.id}
                  acao={acao}
                  concluida={concluidas.includes(acao.id)}
                  onToggle={alternar}
                />
              ))}
            </div>
          )}
        </div>

        <aside className="h-fit rounded-3xl bg-ink p-7 text-white lg:sticky lg:top-24">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-400">Progresso</p>
          <p className="mt-3 text-5xl font-black">{pontos}</p>
          <p className="text-slate-400">pontos acumulados</p>

          <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10" role="progressbar" aria-label="Progresso das ações" aria-valuenow={Math.round(percentual)} aria-valuemin={0} aria-valuemax={100}>
            <div className="h-full rounded-full bg-brand-400 transition-all" style={{ width: `${percentual}%` }} />
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-300">
            {pontos === 0 ? 'Escolha uma ação para começar.' : `Você conquistou ${pontos} de ${totalPossivel} pontos disponíveis.`}
          </p>
        </aside>
      </div>
    </section>
  )
}
