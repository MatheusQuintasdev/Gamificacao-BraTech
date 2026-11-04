import { useCallback, useEffect, useState } from 'react'
import { acoes as acoesLocais } from '../data/acoes'
import {
  apiConfigurada,
  atualizarAcao,
  cadastrarAcao,
  excluirAcao,
  listarAcoes,
} from '../services/acoesApi'
import type { AcaoSustentavel } from '../types'

export type DadosAcao = Omit<AcaoSustentavel, 'id'>

export function useAcoes() {
  const [acoes, setAcoes] = useState<AcaoSustentavel[]>([])
  const [carregando, setCarregando] = useState(true)
  const [salvando, setSalvando] = useState(false)
  const [erro, setErro] = useState('')

  const carregar = useCallback(async () => {
    setCarregando(true)
    setErro('')

    if (!apiConfigurada) {
      setAcoes(acoesLocais)
      setCarregando(false)
      return
    }

    try {
      const resultado = await listarAcoes()
      if (!Array.isArray(resultado)) {
        throw new Error('A API deve retornar uma lista de ações.')
      }
      setAcoes(resultado)
    } catch (problema) {
      setAcoes([])
      setErro(problema instanceof Error ? problema.message : 'Falha ao carregar ações.')
    } finally {
      setCarregando(false)
    }
  }, [])

  useEffect(() => {
    void carregar()
  }, [carregar])

  async function salvar(dados: DadosAcao, id?: number) {
    if (!apiConfigurada) {
      setErro('Ative a API Java no arquivo .env para salvar no banco de dados.')
      return false
    }

    setSalvando(true)
    setErro('')

    try {
      if (id === undefined) {
        await cadastrarAcao(dados)
      } else {
        await atualizarAcao(id, dados)
      }
      await carregar()
      return true
    } catch (problema) {
      setErro(problema instanceof Error ? problema.message : 'Falha ao salvar ação.')
      return false
    } finally {
      setSalvando(false)
    }
  }

  async function excluir(id: number) {
    if (!apiConfigurada) {
      setErro('Ative a API Java no arquivo .env para excluir no banco de dados.')
      return false
    }

    setSalvando(true)
    setErro('')

    try {
      await excluirAcao(id)
      await carregar()
      return true
    } catch (problema) {
      setErro(problema instanceof Error ? problema.message : 'Falha ao excluir ação.')
      return false
    } finally {
      setSalvando(false)
    }
  }

  return { acoes, carregando, salvando, erro, carregar, salvar, excluir }
}
