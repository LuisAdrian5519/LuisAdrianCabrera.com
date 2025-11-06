import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { SiKaggle, SiHuggingface } from "react-icons/si";
import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.png";
import project3 from "@/assets/project3.png";
import project4 from "@/assets/project4.png";

const Projects = () => {
  const projects = [
    {
      title: "CubeRT AI Cubesat Project",
      description: "Cutting-edge microsatellite designed to transform the way scientists utilize AI in space exploration",
      image: project1,
      tech: ["Machine Learning", "Python", "Azure"],
      githubUrl: "https://github.com/LuisAdrian5519/CubeRT_Cubesat",
      type: "github",
    },
    {
      title: "Open Object Detection Dataset",
      description: " 7500+ annotated images for object detection of the Moon, optimized for use with the YOLOv8",
      image: project2,
      tech: ["Data Analysis", "Azure"],
      kaggleUrl: "https://www.kaggle.com/datasets/luisadrian5519/moon-detection-dataset-for-yolov8",
      huggingfaceUrl: "https://huggingface.co/datasets/LuisAdrian5519/Moon_Detection_Dataset_for_YOLOv8",
      type: "dataset",
    },
    {
      title: "Bank Reconciliation Automation",
      description: "Automated inconsistencies detection between financial registers and bank declarations",
      image: project4,
      tech: ["Automation", "Python", "Pandas"],
      githubUrl: "https://github.com/LuisAdrian5519/Bank-Reconciliation-Algorithm-Open-Source-Tool",
      type: "github",
    },
    {
      title: "NASA Smart Chatbot",
      description: "Full-Stack AI Chatbot Application, presented in NASA SpaceApps 2024",
      image: project3,
      tech: ["LLM's", "Python", "JavaScript", "Flask"],
      githubUrl: "https://github.com/Jessebnda/SpaceApps2024",
      type: "github",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all hover:shadow-glow group"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 justify-center">
                    {project.type === "github" ? (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                    ) : (
                      <>
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.kaggleUrl} target="_blank" rel="noopener noreferrer">
                            <SiKaggle className="w-4 h-4 mr-2" />
                            Kaggle
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.huggingfaceUrl} target="_blank" rel="noopener noreferrer">
                            <SiHuggingface className="w-4 h-4 mr-2" />
                            HuggingFace
                          </a>
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
