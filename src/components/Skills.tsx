import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "Vue.js"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Python", "Express", "PostgreSQL", "MongoDB", "Redis"],
    },
    {
      category: "DevOps & Tools",
      skills: ["Docker", "Git", "AWS", "CI/CD", "Linux", "Nginx"],
    },
    {
      category: "Metodologías",
      skills: ["Agile", "Scrum", "TDD", "Clean Code", "REST API", "Microservicios"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Tecnologías</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Herramientas y tecnologías con las que trabajo día a día
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-card backdrop-blur-sm border-border hover:border-primary/50 transition-all hover:shadow-glow"
              >
                <h3 className="text-xl font-bold mb-4 text-primary">{category.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-secondary/50 border border-border rounded-lg text-foreground text-sm font-medium hover:bg-secondary hover:border-primary/30 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="inline-block p-6 bg-primary/10 border-primary/20 backdrop-blur-sm">
              <p className="text-foreground/90 mb-2">
                <span className="text-3xl font-bold text-primary">5+</span>
              </p>
              <p className="text-muted-foreground">Años de experiencia</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
