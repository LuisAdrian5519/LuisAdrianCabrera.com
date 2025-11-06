import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  // contact info only; toast and form removed

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "luisadrian.cabrera5519@gmail.com",
      href: "mailto:luisadrian.cabrera5519@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Luis Adrian Cabrera",
      href: "https://www.linkedin.com/in/luis-adrian-cabrera-muñoz5519",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "LuisAdrian5519",
      href: "https://github.com/LuisAdrian5519",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Get in Touch
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Always open to new opportunities and meaningful connections.
            Reach out and let's make something that matters.
          </p>

          <div className="grid grid-cols-1 gap-8">
            {/* Contact Info only - form and availability removed per request */}
            <div className="space-y-6 max-w-2xl mx-auto">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all hover:shadow-glow group"
                >
                    {info.href ? (
                      <a href={info.href} className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{info.label}</h3>
                          <p className="text-muted-foreground">{info.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg transition-colors">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{info.label}</h3>
                          <p className="text-muted-foreground">{info.value}</p>
                        </div>
                      </div>
                    )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
