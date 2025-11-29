import Image from "next/image"
import { Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Image src="/logo.png" alt="Biotec de Portas Abertas" width={80} height={80} className="h-16 w-auto" />
              <div>
                <h3 className="text-xl font-semibold">Biotec de Portas Abertas</h3>
                <p className="text-primary-foreground/80">Biotecnologia e Sustentabilidade</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Programa de Pós-Graduação em Biotecnologia
              <br />
              Universidade Federal do Espírito Santo
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-lg mb-4">Contato e Localização</h4>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-primary-foreground/80">
                <p className="font-medium">Centro de Ciências da Saúde (CCS)</p>
                <p>Universidade Federal do Espírito Santo</p>
                <p>Vitória, ES</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 flex-shrink-0" />
              <a
                href="mailto:ppgbiotec@ufes.br"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                ppgbiotec@ufes.br
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>© 2025 PPG Biotecnologia UFES. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
