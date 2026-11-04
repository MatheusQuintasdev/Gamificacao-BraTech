import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import type { AcaoSustentavel } from '../types'
import type { DadosAcao } from '../hooks/useAcoes'

type Categoria = AcaoSustentavel['categoria']

interface Props {
  selecionada: AcaoSustentavel | null
  salvando: boolean
  onSalvar: (dados: DadosAcao, id?: number) => Promise<boolean>
  onCancelar: () => void
}

const campo = 'mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100'

export default function AcaoForm({ selecionada, salvando, onSalvar, onCancelar }: Props) {
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [categoria, setCategoria] = useState<Categoria>('Energia')
  const [pontos, setPontos] = useState(20)
  const [validacao, setValidacao] = useState('')

  useEffect(() => {
    setTitulo(selecionada?.titulo || '')
    setDescricao(selecionada?.descricao || '')
    setCategoria(selecionada?.categoria || 'Energia')
    setPontos(selecionada?.pontos || 20)
    setValidacao('')
  }, [selecionada])

  async function enviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault()

    if (titulo.trim().length < 3 || descricao.trim().length < 10) {
      setValidacao('Use um título com 3 caracteres e uma descrição com pelo menos 10.')
      return
    }

    if (!Number.isInteger(pontos) || pontos < 1 || pontos > 1000) {
      setValidacao('Os pontos precisam ser um número inteiro entre 1 e 1000.')
      return
    }

    setValidacao('')
    const sucesso = await onSalvar({
      titulo: titulo.trim(),
      descricao: descricao.trim(),
      categoria,
      pontos,
    }, selecionada?.id)

    if (sucesso && !selecionada) {
      setTitulo('')
      setDescricao('')
      setPontos(20)
    }
  }

  return (
    <form onSubmit={enviar} className="space-y-4 rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold">{selecionada ? 'Editar ação' : 'Cadastrar ação'}</h2>

      <div>
        <label htmlFor="titulo" className="font-semibold">Título</label>
        <input id="titulo" value={titulo} onChange={(evento) => setTitulo(evento.target.value)} className={campo} maxLength={100} required />
      </div>

      <div>
        <label htmlFor="descricao" className="font-semibold">Descrição</label>
        <textarea id="descricao" value={descricao} onChange={(evento) => setDescricao(evento.target.value)} className={campo} rows={4} maxLength={500} required />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="categoria" className="font-semibold">Categoria</label>
          <select id="categoria" value={categoria} onChange={(evento) => setCategoria(evento.target.value as Categoria)} className={campo}>
            <option>Energia</option>
            <option>Resíduos</option>
            <option>Mobilidade</option>
            <option>Consumo</option>
          </select>
        </div>
        <div>
          <label htmlFor="pontos" className="font-semibold">Pontos</label>
          <input id="pontos" type="number" min={1} max={1000} value={pontos} onChange={(evento) => setPontos(Number(evento.target.value))} className={campo} required />
        </div>
      </div>

      {validacao && <p role="alert" className="text-sm text-red-700">{validacao}</p>}

      <div className="flex flex-wrap gap-3">
        <button type="submit" disabled={salvando} className="rounded-xl bg-brand-600 px-5 py-3 font-bold text-white disabled:opacity-50">
          {salvando ? 'Salvando...' : selecionada ? 'Salvar alterações' : 'Adicionar ação'}
        </button>
        {selecionada && <button type="button" onClick={onCancelar} className="rounded-xl border px-5 py-3">Cancelar edição</button>}
      </div>
    </form>
  )
}
