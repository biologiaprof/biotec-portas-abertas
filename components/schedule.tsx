import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"

const scheduleData = [
  {
    time: "9:00-9:10",
    activity: "Recepção e Credenciamento",
    type: "reception",
  },
  {
    time: "9:10-9:30",
    activity: "Cerimônia de Abertura",
    description: "Composição da mesa / Espaço de fala da mesa",
    speakers: [
      "Boas vindas: Coordenador do PPG Biotecnologia UFES: Prof. Iuri Drummond Louro",
      "Diretor do CCS: Prof. Helder Mauad",
      "INOVA UFES: Escritório de Negócios (Profa. Letícia Pedruzzi Fonseca e Profa. Rosane Zanotti)",
      "Pró-Reitor de Pesquisa e Pós-Graduação: Prof. Wagner dos Santos",
      "Pró-Reitor de Extensão: Prof. Ednilson Silva Felipe",
      "Magnífico Reitor da UFES: Prof. Eustáquio Vinicius Ribeiro de Castro",
    ],
    type: "ceremony",
  },
  {
    time: "9:30-10:00",
    activity: "PPG Biotec na perspectiva da CAPES",
    description: "Palestrante: Profa. Patrícia Fernandes",
    type: "talk",
  },
  {
    time: "10:00-10:30",
    activity: "INOVA UFES: Escritório de Negócios",
    description: "Profa. Letícia Pedruzzi Fonseca, Profa. Rosane Zanotti e Equipe do INOVA UFES",
    type: "talk",
  },
  {
    time: "10:30-11:30",
    activity: "Exposição: Sessão de Banners do PPGBiotec",
    description: "Coffee break e Networking (atividades integradas)",
    type: "break",
  },
  {
    time: "11:30-13:30",
    activity: "Almoço",
    type: "break",
  },
  {
    time: "13:40-13:50",
    activity: "Recepção: Retorno às atividades",
    description:
      "3º ano IFES VITÓRIA / 2ª série do Ensino Médio da EEEFM Professor João Loyola (Prof. Luiz Henrique Santos)",
    type: "reception",
  },
  {
    time: "13:50-14:20",
    activity: "INOVA UFES: Escritório de Negócios",
    description: "Profa. Letícia Pedruzzi Fonseca, Profa. Rosane Zanotti e Equipe do INOVA UFES",
    type: "talk",
  },
  {
    time: "14:20-14:50",
    activity: 'Palestra: "Você vive cercado por biotecnologia (e nem sabia!)"',
    type: "talk",
  },
  {
    time: "14:50-15:10",
    activity: "Coffee break",
    type: "break",
  },
  {
    time: "15:10-16:00",
    activity: "Visitas aos Laboratórios - Turma 1",
    labs: [
      "G1 - Lab Tecnologia Assistiva",
      "G2 - Agronegócio e casa de vegetação",
      "G3 - LUCCAR",
      "G4 - Biomol",
      "G5 - Musicoterapia",
      "G6 - Plataforma de Patologia Digital",
    ],
    type: "lab",
  },
  {
    time: "16:00-16:50",
    activity: "Visitas aos Laboratórios - Turma 2",
    labs: [
      "G2 - Lab Tecnologia Assistiva",
      "G3 - Agronegócio e casa de vegetação",
      "G4 - LUCCAR",
      "G5 - Biomol",
      "G6 - Musicoterapia",
      "G1 - Plataforma de Patologia Digital",
    ],
    type: "lab",
  },
  {
    time: "16:50-17:00",
    activity: "Encerramento",
    description: "Agradecimentos e considerações finais",
    type: "closing",
  },
]

function getTypeColor(type: string) {
  switch (type) {
    case "ceremony":
      return "bg-primary text-primary-foreground"
    case "talk":
      return "bg-secondary text-secondary-foreground"
    case "lab":
      return "bg-accent text-accent-foreground"
    case "break":
      return "bg-muted text-muted-foreground"
    case "reception":
      return "bg-card-foreground/10 text-card-foreground"
    case "closing":
      return "bg-primary text-primary-foreground"
    default:
      return "bg-muted text-muted-foreground"
  }
}

function getTypeLabel(type: string) {
  switch (type) {
    case "ceremony":
      return "Cerimônia"
    case "talk":
      return "Palestra"
    case "lab":
      return "Laboratórios"
    case "break":
      return "Intervalo"
    case "reception":
      return "Recepção"
    case "closing":
      return "Encerramento"
    default:
      return "Atividade"
  }
}

export function Schedule() {
  return (
    <section id="programacao" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Programação Completa</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confira a agenda detalhada do 5º Biotec de Portas Abertas
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-4">
          {scheduleData.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="flex items-center gap-2 text-primary">
                    <Clock className="h-5 w-5" />
                    <span className="font-semibold text-lg">{item.time}</span>
                  </div>
                  <Badge className={getTypeColor(item.type)} variant="secondary">
                    {getTypeLabel(item.type)}
                  </Badge>
                </div>
                <CardTitle className="text-xl mt-2">{item.activity}</CardTitle>
              </CardHeader>

              {(item.description || item.speakers || item.labs) && (
                <CardContent className="pt-0">
                  {item.description && <p className="text-muted-foreground mb-2">{item.description}</p>}

                  {item.speakers && (
                    <ul className="space-y-2 mt-3">
                      {item.speakers.map((speaker, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground pl-4 border-l-2 border-primary/30">
                          {speaker}
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.labs && (
                    <div className="grid sm:grid-cols-2 gap-2 mt-3">
                      {item.labs.map((lab, idx) => (
                        <div
                          key={idx}
                          className="text-sm bg-accent/20 text-foreground font-medium px-3 py-2 rounded-md border border-accent/30"
                        >
                          {lab}
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
