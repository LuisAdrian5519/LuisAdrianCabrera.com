const About = () => {


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

          {/* Highlights removed as requested */}
        </div>
      </div>
    </section>
  );
};

export default About;
