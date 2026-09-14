import { useEffect, useState } from 'react'
import AcaoCard from '../components/AcaoCard'
import SectionTitle from '../components/SectionTitle'
import { acoes } from '../data/acoes'

export default function Gamificacao() {
  const [acoesConcluidas, setAcoesConcluidas] = useState<number[]>([])
  const [mensagem, setMensagem] = useState('Escolha uma ação para começar.')

  const pontos = acoes
    .filter((acao) => acoesConcluidas.includes(acao.id))
    .reduce((total, acao) => total + acao.pontos, 0)

  useEffect(() => {
    if (pontos === 0) {
      setMensagem('Escolha uma ação para começar.')
      return
    }

    if (pontos >= 150) {
      setMensagem('Excelente! Você já passou de 150 pontos sustentáveis.')
      return
    }

    setMensagem(`Você já conquistou ${pontos} pontos. Continue!`)
  }, [pontos])

  function alternarAcao(id: number) {
    setAcoesConcluidas((acoesAtuais) => {
      const jaFoiConcluida = acoesAtuais.includes(id)

      if (jaFoiConcluida) {
        return acoesAtuais.filter((acaoId) => acaoId !== id)
      }

      return [...acoesAtuais, id]
    })
  }

  const percentual = Math.min((pontos / 230) * 100, 100)

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <SectionTitle
        eyebrow="Solução 01"
        title="Gamificação sustentável"
        description="Experimente o protótipo: conclua ações, acumule pontos e acompanhe seu progresso em tempo real."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="grid gap-4 md:grid-cols-2">
          {acoes.map((acao) => (
            <AcaoCard
              key={acao.id}
              acao={acao}
              concluida={acoesConcluidas.includes(acao.id)}
              onToggle={alternarAcao}
            />
          ))}
        </div>

        <aside className="h-fit rounded-3xl bg-ink p-7 text-white lg:sticky lg:top-24">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-400">
            Progresso
          </p>

          <p className="mt-3 text-5xl font-black">{pontos}</p>
          <p className="text-slate-400">pontos acumulados</p>

          <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-brand-400 transition-all"
              style={{ width: `${percentual}%` }}
            />
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-300">
            {mensagem}
          </p>
        </aside>
      </div>
    </section>
  )
}
