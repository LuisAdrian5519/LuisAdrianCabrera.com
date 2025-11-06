import { Card } from "@/components/ui/card";

const About = () => {
  

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

          {/* Highlights removed as requested */}
        </div>
      </div>
    </section>
  );
};

export default About;
