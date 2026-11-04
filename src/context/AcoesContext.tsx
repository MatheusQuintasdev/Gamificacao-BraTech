import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

interface AcoesContexto {
  concluidas: number[]
  alternar: (id: number) => void
}

const Contexto = createContext<AcoesContexto | undefined>(undefined)
const chave = 'bratech-acoes-concluidas'

export function AcoesProvider({ children }: { children: ReactNode }) {
  const [concluidas, setConcluidas] = useState<number[]>(() => {
    try {
      const dados = JSON.parse(localStorage.getItem(chave) || '[]')
      return Array.isArray(dados) ? dados.filter((item) => typeof item === 'number') : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(chave, JSON.stringify(concluidas))
  }, [concluidas])

  function alternar(id: number) {
    setConcluidas((anteriores) =>
      anteriores.includes(id)
        ? anteriores.filter((atual) => atual !== id)
        : [...anteriores, id]
    )
  }

  return (
    <Contexto.Provider value={{ concluidas, alternar }}>
      {children}
    </Contexto.Provider>
  )
}

export function useAcoesConcluidas() {
  const contexto = useContext(Contexto)

  if (!contexto) {
    throw new Error('useAcoesConcluidas precisa estar dentro de AcoesProvider')
  }

  return contexto
}
