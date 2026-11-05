import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/gamificacao', label: 'Gamificação' },
  { to: '/painel-acoes', label: 'Ações (API)' },
  { to: '/avatar', label: 'Avatar' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contato', label: 'Contato' },
  { to: '/integrantes', label: 'Equipe' },
]

export default function Header() {
  const [aberto, setAberto] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <NavLink to="/" className="text-2xl font-black tracking-tight text-brand-600">
          BraTech<span className="text-ink">.</span>
        </NavLink>

        <button
          type="button"
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={aberto}
          className="rounded-lg border p-2 md:hidden"
          onClick={() => setAberto((atual) => !atual)}
        >
          {aberto ? '✕' : '☰'}
        </button>

        <nav aria-label="Menu principal" className={`${aberto ? 'flex' : 'hidden'} absolute left-0 top-full w-full flex-col gap-1 border-b bg-white p-4 md:static md:flex md:w-auto md:flex-row md:flex-wrap md:border-0 md:p-0`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setAberto(false)}
              className={({ isActive }) => `rounded-lg px-3 py-2 text-sm font-semibold transition ${isActive ? 'bg-brand-50 text-brand-600' : 'text-slate-600 hover:bg-slate-100 hover:text-ink'}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
