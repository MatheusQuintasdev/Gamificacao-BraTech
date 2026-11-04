import type { AcaoSustentavel } from '../types'

const enderecoBase = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '')
const recurso = import.meta.env.VITE_API_ACOES_PATH || '/acoes'

export const apiConfigurada = enderecoBase.length > 0

function urlAcao(id?: number) {
  const caminho = `${enderecoBase}${recurso.startsWith('/') ? '' : '/'}${recurso}`
  return id === undefined ? caminho : `${caminho}/${id}`
}

async function requisicao<T>(caminho: string, opcoes?: RequestInit): Promise<T> {
  let resposta: Response

  try {
    resposta = await fetch(caminho, {
      ...opcoes,
      headers: {
        'Content-Type': 'application/json',
        ...opcoes?.headers,
      },
    })
  } catch {
    throw new Error('Não foi possível conectar à API. Confira a URL, a rede e o CORS.')
  }

  if (!resposta.ok) {
    throw new Error(`A API retornou um erro HTTP ${resposta.status}.`)
  }

  if (resposta.status === 204) {
    return undefined as T
  }

  return resposta.json() as Promise<T>
}

export function listarAcoes() {
  return requisicao<AcaoSustentavel[]>(urlAcao())
}

export function cadastrarAcao(acao: Omit<AcaoSustentavel, 'id'>) {
  return requisicao<AcaoSustentavel>(urlAcao(), {
    method: 'POST',
    body: JSON.stringify(acao),
  })
}

export function atualizarAcao(id: number, acao: Omit<AcaoSustentavel, 'id'>) {
  return requisicao<AcaoSustentavel>(urlAcao(id), {
    method: 'PUT',
    body: JSON.stringify(acao),
  })
}

export function excluirAcao(id: number) {
  return requisicao<void>(urlAcao(id), { method: 'DELETE' })
}
