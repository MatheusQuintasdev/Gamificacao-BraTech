import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'

const itens = [
  [
    'O que é a solução BraTech?',
    'É uma proposta de gamificação sustentável para engajar usuários da comunidade SoulUp por meio de desafios, pontuação e orientação digital.',
  ],
  [
    'O Avatar usa uma API?',
    'Não nesta Sprint. O enunciado determina que não haja consumo de API na Sprint 03, então o Avatar funciona como protótipo local.',
  ],
  [
    'Como os pontos funcionam?',
    'Na demonstração, cada ação sustentável possui uma pontuação. Ao concluir desafios, o usuário acompanha seu progresso imediatamente.',
  ],
  [
    'O projeto é responsivo?',
    'Sim. A interface usa Tailwind CSS e foi estruturada para funcionar em celulares, tablets e desktops.',
  ],
]

export default function Faq() {
  const [aberto, setAberto] = useState<number | null>(0)

  return (
    <section className="mx-auto max-w-4xl px-4 py-16 md:px-8">
      <SectionTitle
        eyebrow="FAQ"
        title="Perguntas frequentes"
        description="Entenda os principais pontos da proposta e da implementação."
      />

      <div className="mt-10 space-y-3">
        {itens.map(([pergunta, resposta], index) => (
          <article
            key={pergunta}
            className="overflow-hidden rounded-2xl border bg-white"
          >
            <button
              type="button"
              onClick={() => setAberto(aberto === index ? null : index)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold"
            >
              <span>{pergunta}</span>
              <span className="text-2xl text-brand-500">
                {aberto === index ? '−' : '+'}
              </span>
            </button>

            {aberto === index && (
              <p className="border-t px-5 py-4 leading-7 text-slate-600">
                {resposta}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
