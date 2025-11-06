import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>

          {/* Block 1 - Trimble */}
          <div className="bg-gradient-card rounded-2xl p-8 mb-6 border border-border shadow-card backdrop-blur-sm w-full">
            <h1 className="text-2xl font-bold">Software Development Engineer in Test Intern - Trimble Inc.</h1>
            <h2 className="text-sm text-muted-foreground mt-1 mb-4">Jun. 2025 — Present · Mexicali, BC</h2>
            <ul className="list-disc pl-5 text-foreground/90">
              <li>Implemented an Appium MCP integration for Claude agents that accelerates creation of test reports and
              automation scripting through LLM interactions.</li>
              <li>Programmed QA test automation scripts using Selenium and Appium for web and mobile platforms, achieving a 
                significant reduction in manual testing effort. Integrated Unit Testing reports into Jira, significantly
                accelerating deployments and improving the efficiency of the CI/CD pipeline and overall ProjectSight quality.</li>
              <li>Collaborated with cross-functional Agile teams, participating in daily stand-ups, sprint planning, and
                retrospectives, to deliver features aligned with stakeholders needs.</li>
            </ul>
          </div>

          {/* Block 2 - MM Corporation */}
          <div className="bg-gradient-card rounded-2xl p-8 mb-6 border border-border shadow-card backdrop-blur-sm w-full">
            <h1 className="text-2xl font-bold">Software Engineer Intern - MM Corporation</h1>
            <h2 className="text-sm text-muted-foreground mt-1 mb-4">Jun. 2024 — Jun. 2025 · Mexicali, BC</h2>
            <ul className="list-disc pl-5 text-foreground/90">
                <li>Designed a scalable CRM Web Application using React, Node.js, and Express, streamlining sales pipeline
                workflows and boosting customer interaction management efficiency by 60% in 900k+ national sales operations.</li>
                <li>Migrated and structured a Database of 5k+ client and product records from Excel to MySQL, reducing data
                retrieval times by 70% and enhancing data reliability by integrating RESTful APIs for internal web tools.</li>
                <li>Designed and integrated an automated discrepancy detection algorithm using Pandas, PyPDF2,
                pdfplumber, and RegEx to compare structured financial data from internal records and bank-issued statements,
                eliminating 100% of manual input for the bank reconciliation process for BanBajío and BBVA México accounts.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
