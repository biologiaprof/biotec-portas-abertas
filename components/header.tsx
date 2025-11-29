export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4">
          <div>
            <h2 className="text-lg font-semibold text-primary">Biotec de Portas Abertas</h2>
            <p className="text-sm text-muted-foreground">UFES</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#sobre" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Sobre
          </a>
          <a
            href="#programacao"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Programação
          </a>
        </nav>
      </div>
    </header>
  )
}
