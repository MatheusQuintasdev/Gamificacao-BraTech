import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../components/Button'
import SectionTitle from '../components/SectionTitle'

type FormData = {
  nome: string
  email: string
  mensagem: string
}

export default function Contato() {
  const [enviado, setEnviado] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  const fieldClasses =
    'mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100'

  function onSubmit(data: FormData) {
    console.info('Formulário validado localmente:', data)
    setEnviado(true)
    reset()
  }

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 md:px-8">
      <SectionTitle
        eyebrow="Contato"
        title="Fale com a BraTech"
        description="Envie uma mensagem para a equipe. O formulário é validado localmente e não envia dados para uma API nesta Sprint."
      />

      <div className="mt-10 rounded-3xl border bg-white p-6 shadow-sm md:p-8">
        {enviado && (
          <div className="mb-6 rounded-xl bg-brand-50 p-4 font-semibold text-brand-600">
            Mensagem validada com sucesso! Demonstração concluída.
          </div>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="space-y-5"
        >
          <div>
            <label className="font-semibold" htmlFor="nome">
              Nome completo
            </label>

            <input
              id="nome"
              className={fieldClasses}
              {...register('nome', {
                required: 'Informe seu nome.',
                minLength: {
                  value: 3,
                  message: 'Digite pelo menos 3 caracteres.',
                },
              })}
            />

            {errors.nome && (
              <p className="mt-1 text-sm font-medium text-red-600">
                {errors.nome.message}
              </p>
            )}
          </div>

          <div>
            <label className="font-semibold" htmlFor="email">
              E-mail
            </label>

            <input
              id="email"
              type="email"
              className={fieldClasses}
              {...register('email', {
                required: 'Informe seu e-mail.',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Digite um e-mail válido.',
                },
              })}
            />

            {errors.email && (
              <p className="mt-1 text-sm font-medium text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="font-semibold" htmlFor="mensagem">
              Mensagem
            </label>

            <textarea
              id="mensagem"
              rows={5}
              className={fieldClasses}
              {...register('mensagem', {
                required: 'Escreva uma mensagem.',
                minLength: {
                  value: 10,
                  message: 'A mensagem deve ter pelo menos 10 caracteres.',
                },
              })}
            />

            {errors.mensagem && (
              <p className="mt-1 text-sm font-medium text-red-600">
                {errors.mensagem.message}
              </p>
            )}
          </div>

          <Button type="submit">Enviar mensagem</Button>
        </form>
      </div>
    </section>
  )
}
