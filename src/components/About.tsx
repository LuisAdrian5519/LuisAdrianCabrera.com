import { SiJavascript, SiPython, SiReact, SiNodedotjs, SiExpress, SiMysql, SiMongodb, SiAmazon, SiGit } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { FaAws } from "react-icons/fa";

const About = () => {
  const skills = [
    { name: "JavaScript", icon: SiJavascript },
    { name: "Python", icon: SiPython },
    { name: "React", icon: SiReact },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "Git", icon: SiGit },
    { name: "MySQL", icon: SiMysql },
    { name: "MongoDB", icon: SiMongodb },
  { name: "Azure", icon: VscAzure },
    { name: "AWS", icon: FaAws },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>

          <div className="bg-gradient-card rounded-2xl p-8 mb-12 border border-border shadow-card backdrop-blur-sm">
            <p className="text-lg text-foreground/90 leading-relaxed">
              Software Engineer passionate about developing end-to-end solutions for real-world problems. My experience 
              includes designing robust APIs, efficient Database management, Automation, and Web development. My personal 
              portfolio includes several projects based on Edge Artificial Intelligence applications. My work is driven by 
              a commitment to deliver high-impact projects that consistently adhere to the highest standards of quality.
            </p>
          </div>

          <div className="bg-gradient-card rounded-2xl p-8 border border-border shadow-card backdrop-blur-sm">
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 px-5 py-3 bg-card rounded-2xl border border-border backdrop-blur-sm hover:border-primary/50 transition-all shadow-sm"
                  >
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-medium">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
