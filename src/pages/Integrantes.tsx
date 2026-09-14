import { useNavigate } from 'react-router-dom'
import IntegranteCard from '../components/IntegranteCard'
import SectionTitle from '../components/SectionTitle'
import { integrantes } from '../data/integrantes'

export default function Integrantes() {
  const navigate = useNavigate()

  function abrirPerfil(id: string) {
    navigate(`/integrantes/${id}`)
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <SectionTitle
        eyebrow="Equipe"
        title="Quem constrói a BraTech"
        description="Integrantes da turma 1TDSR responsáveis pela evolução da solução no Challenge 2026."
      />


      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {integrantes.map((integrante) => (
          <IntegranteCard
            key={integrante.id}
            integrante={integrante}
            onDetalhes={abrirPerfil}
          />
        ))}
      </div>
    </section>
  )
}
