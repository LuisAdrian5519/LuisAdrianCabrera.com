import { Code2, Rocket, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Desarrollo Full-Stack",
      description: "Experiencia en frontend y backend, creando aplicaciones completas de punta a punta",
    },
    {
      icon: Rocket,
      title: "Innovación Constante",
      description: "Siempre explorando nuevas tecnologías y mejores prácticas de desarrollo",
    },
    {
      icon: Users,
      title: "Trabajo en Equipo",
      description: "Colaboración efectiva y comunicación clara en proyectos multidisciplinarios",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Sobre <span className="bg-gradient-primary bg-clip-text text-transparent">Mí</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ingeniero de software apasionado por crear experiencias digitales excepcionales
          </p>

          <div className="bg-gradient-card rounded-2xl p-8 mb-12 border border-border shadow-card backdrop-blur-sm">
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              Soy un ingeniero de software con experiencia en el desarrollo de aplicaciones web modernas.
              Me especializo en crear soluciones escalables y eficientes utilizando las últimas tecnologías.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Mi enfoque se centra en escribir código limpio, mantener las mejores prácticas y entregar
              productos que superen las expectativas. Me apasiona resolver problemas complejos y
              transformar ideas en realidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all hover:shadow-glow group"
              >
                <item.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
