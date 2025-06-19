import { SearchX } from 'lucide-react'
import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 px-4 text-center">
      <SearchX className="text-destructive h-16 w-16" />
      <h1 className="text-foreground text-4xl font-bold">
        Página não encontrada
      </h1>
      <p className="text-muted-foreground text-base">
        A página que você tentou acessar não existe ou foi movida.
      </p>
      <Link
        to="/"
        className="text-foreground mt-4 inline-flex items-center justify-center rounded-xl bg-rose-500 px-6 py-2 shadow-md transition hover:bg-rose-600 dark:bg-rose-400 dark:hover:bg-rose-500"
      >
        Voltar para o Dashboard
      </Link>
    </div>
  )
}
