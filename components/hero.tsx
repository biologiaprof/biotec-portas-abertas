import Image from "next/image"

export function Hero() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container relative px-4 md:px-6 py-16 md:py-24">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="mb-4">
            <Image
              src="/biotec-portas-abertas/logo.png"
              alt="Biotec de Portas Abertas"
              width={300}
              height={300}
              className="h-48 w-auto md:h-64"
              priority
            />
          </div>

          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              5º Biotec de Portas Abertas
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 text-balance">
              Biotecnologia e Sustentabilidade
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-lg mt-4">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-2xl">📅</span>
              </div>
              <span className="text-primary-foreground/90">Data do Evento</span>
            </div>
            <div className="hidden sm:block text-primary-foreground/50">•</div>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-2xl">📍</span>
              </div>
              <span className="text-primary-foreground/90">UFES - CCS</span>
            </div>
          </div>

          <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mt-6 leading-relaxed">
            O PPG Biotecnologia da Universidade Federal do Espírito Santo convida você para um dia de imersão no
            universo da biotecnologia sustentável, com palestras, exposições e atividades práticas em nossos
            laboratórios.
          </p>
        </div>
      </div>
    </section>
  )
}
