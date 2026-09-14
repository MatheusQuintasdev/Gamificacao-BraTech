import { useEffect, useRef, useState } from 'react'
import Button from '../components/Button'
import SectionTitle from '../components/SectionTitle'
import type { Mensagem } from '../types'

function criarResposta(texto: string) {
  const textoNormalizado = texto.toLowerCase()

  if (textoNormalizado.includes('dica') || textoNormalizado.includes('ajuda')) {
    return 'Dica BraTech: desligue aparelhos em stand-by e reduza o consumo de energia.'
  }

  if (textoNormalizado.includes('soulup')) {
    return 'A SoulUp é a parceira do Challenge. Nossa proposta usa gamificação para incentivar hábitos sustentáveis.'
  }

  if (
    textoNormalizado.includes('ponto') ||
    textoNormalizado.includes('gamifica')
  ) {
    return 'Na demonstração de gamificação, cada ação sustentável concluída soma pontos ao seu progresso.'
  }

  return 'Boa pergunta! Nesta Sprint o Avatar é um protótipo local, sem consumo de API. Posso falar sobre dicas, SoulUp e gamificação.'
}

export default function Avatar() {
  const [mensagens, setMensagens] = useState<Mensagem[]>([
    {
      id: 1,
      autor: 'avatar',
      texto:
        'Olá! Sou o Avatar Sustentável da BraTech. Peça uma dica ou pergunte sobre a gamificação.',
    },
  ])

  const [texto, setTexto] = useState('')
  const fimDaConversa = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fimDaConversa.current?.scrollIntoView({ behavior: 'smooth' })
  }, [mensagens])

  function enviarMensagem() {
    const textoLimpo = texto.trim()

    if (!textoLimpo) {
      return
    }

    const id = Date.now()

    const mensagemUsuario: Mensagem = {
      id,
      autor: 'usuario',
      texto: textoLimpo,
    }

    const mensagemAvatar: Mensagem = {
      id: id + 1,
      autor: 'avatar',
      texto: criarResposta(textoLimpo),
    }

    setMensagens((mensagensAtuais) => [
      ...mensagensAtuais,
      mensagemUsuario,
      mensagemAvatar,
    ])

    setTexto('')
  }

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 md:px-8">
      <SectionTitle
        eyebrow="Solução 02"
        title="Avatar Sustentável"
        description="Protótipo navegável de uma conversa orientativa. Nesta Sprint ele funciona localmente, sem API, conforme as regras da disciplina."
      />

      <div className="mt-10 overflow-hidden rounded-3xl border bg-white shadow-sm">
        <div className="h-[420px] space-y-4 overflow-y-auto bg-slate-50 p-5 md:p-8">
          {mensagens.map((mensagem) => (
            <div
              key={mensagem.id}
              className={`flex ${
                mensagem.autor === 'usuario' ? 'justify-end' : 'justify-start'
              }`}
            >
              <p
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 md:max-w-[70%] ${
                  mensagem.autor === 'usuario'
                    ? 'bg-brand-500 text-white'
                    : 'border bg-white text-slate-700'
                }`}
              >
                {mensagem.texto}
              </p>
            </div>
          ))}

          <div ref={fimDaConversa} />
        </div>

        <div className="flex gap-3 border-t p-4">
          <input
            value={texto}
            onChange={(event) => setTexto(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                enviarMensagem()
              }
            }}
            className="min-w-0 flex-1 rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
            placeholder="Digite uma dúvida ou peça uma dica..."
          />

          <Button onClick={enviarMensagem}>Enviar</Button>
        </div>
      </div>
    </section>
  )
}
