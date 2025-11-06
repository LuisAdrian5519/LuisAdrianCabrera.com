import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
  <footer className="bg-background border-t border-transparent py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mt-4 border-t border-transparent text-center flex items-center justify-center py-4">
            <p className="text-muted-foreground text-sm text-center">
              © {currentYear}. Luis Adrian Cabrera Muñoz.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
