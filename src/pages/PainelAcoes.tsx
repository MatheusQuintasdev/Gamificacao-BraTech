import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import AcaoForm from '../components/AcaoForm'
import { apiConfigurada } from '../services/acoesApi'
import { useAcoes } from '../hooks/useAcoes'
import type { AcaoSustentavel } from '../types'

export default function PainelAcoes() {
  const { acoes, carregando, salvando, erro, carregar, salvar, excluir } = useAcoes()
  const [selecionada, setSelecionada] = useState<AcaoSustentavel | null>(null)

  async function remover(acao: AcaoSustentavel) {
    if (!window.confirm(`Excluir a ação "${acao.titulo}"?`)) {
      return
    }
    await excluir(acao.id)
    if (selecionada?.id === acao.id) {
      setSelecionada(null)
    }
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <SectionTitle
        eyebrow="Integração com API"
        title="Painel de ações sustentáveis"
        description="Consulte as ações cadastradas e gerencie registros pela API REST desenvolvida em Java."
      />

      {!apiConfigurada && (
        <p role="status" className="mt-8 rounded-xl border border-amber-300 bg-amber-50 p-4 text-amber-950">
          Modo demonstrativo: as ações abaixo são exemplos locais. Para usar GET, POST, PUT e DELETE de verdade, configure VITE_API_URL e publique o backend Java.
        </p>
      )}

      {erro && <div role="alert" className="mt-6 rounded-xl bg-red-50 p-4 text-red-800">{erro}</div>}

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div>
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-2xl font-bold">Ações cadastradas</h2>
            <button onClick={() => void carregar()} className="rounded-xl border px-4 py-2 font-semibold hover:bg-slate-50">
              Atualizar lista
            </button>
          </div>

          {carregando ? (
            <p role="status" className="rounded-xl border bg-white p-6">Carregando ações...</p>
          ) : acoes.length === 0 ? (
            <p className="rounded-xl border bg-white p-6">Nenhuma ação encontrada. Cadastre a primeira ação pelo formulário.</p>
          ) : (
            <div className="space-y-4">
              {acoes.map((acao) => (
                <article key={acao.id} className="rounded-2xl border bg-white p-5 shadow-sm">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold uppercase text-brand-600">{acao.categoria} • ID {acao.id}</p>
                      <h3 className="mt-1 text-lg font-bold">{acao.titulo}</h3>
                    </div>
                    <span className="rounded-full bg-ink px-3 py-1 text-sm font-bold text-white">{acao.pontos} pts</span>
                  </div>
                  <p className="mt-3 text-slate-600">{acao.descricao}</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <button disabled={!apiConfigurada || salvando} onClick={() => setSelecionada(acao)} className="rounded-lg border px-4 py-2 text-sm font-semibold disabled:opacity-40">Editar</button>
                    <button disabled={!apiConfigurada || salvando} onClick={() => void remover(acao)} className="rounded-lg border border-red-200 px-4 py-2 text-sm font-semibold text-red-700 disabled:opacity-40">Excluir</button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <div className="h-fit lg:sticky lg:top-24">
          <AcaoForm
            selecionada={selecionada}
            salvando={salvando || !apiConfigurada}
            onSalvar={salvar}
            onCancelar={() => setSelecionada(null)}
          />
        </div>
      </div>
    </section>
  )
}
