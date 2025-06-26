import { AlertTriangle } from 'lucide-react'
import { Link, useRouteError } from 'react-router-dom'

export function Error() {
  const error = useRouteError() as Error

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 px-4 text-center">
      <AlertTriangle className="h-16 w-16 text-rose-500 dark:text-rose-400" />
      <h1 className="text-foreground text-4xl font-bold">
        Whoops, algo deu errado...
      </h1>
      <p className="text-muted-foreground text-base">
        Ocorreu um erro na aplicação. Veja os detalhes abaixo:
      </p>
      <pre className="bg-muted text-destructive max-w-lg overflow-auto rounded-lg px-4 py-2 text-left text-sm shadow-inner">
        {error?.message || JSON.stringify(error)}
      </pre>
      <Link
        to="/"
        className="text-foreground mt-4 inline-flex items-center justify-center rounded-xl bg-rose-500 px-6 py-2 shadow-md transition hover:bg-rose-600 dark:bg-rose-400 dark:hover:bg-rose-500"
      >
        Voltar para o Dashboard
      </Link>
    </div>
  )
}
