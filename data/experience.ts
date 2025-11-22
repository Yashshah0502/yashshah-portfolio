export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  recruiterDescription: string[];
  engineerDescription: string[];
  techStack: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: "zydus-ba",
    role: "IT Business Analyst Intern",
    company: "Zydus Pharmaceuticals USA Inc.",
    period: "June 2025 - Present",
    recruiterDescription: [
      "I'm currently building a smart AI assistant for the sales team to help them find data instantly without needing technical skills.",
      "I optimized our data processes, matching over 600,000 records with 93% accuracy, which saved the team weeks of manual work.",
      "I also automated our compliance reporting, ensuring 100% accuracy for over 1 million transactions."
    ],
    engineerDescription: [
      "Architecting a multi-agent RAG system within Microsoft Teams using Azure OpenAI and Semantic Kernel to enable natural language SQL querying.",
      "Built a PySpark data pipeline with fuzzy matching logic (Levenshtein distance) to reconcile 600K+ records with 93% precision.",
      "Developed Python scripts to extract structured data from PDF tables and load it into Microsoft Fabric for real-time analytics."
    ],
    techStack: ["Microsoft Fabric", "Azure OpenAI", "Python", "PySpark", "SQL", "Microsoft Teams"]
  },
  {
    id: "asu-de",
    role: "Data Engineer",
    company: "Arizona State University",
    period: "Jan 2024 - May 2025",
    recruiterDescription: [
      "I modernized how we handle student records, cutting report generation time by 50% by cleaning up our data.",
      "I added new features to the Smart DART app that improved its speed by 2.6% and made it easier for students to use.",
      "I built a custom inventory system that tracked over 500 items, solving a major headache for the operations team."
    ],
    engineerDescription: [
      "Optimized ETL pipelines for Salesforce data integration, reducing report generation latency by 50% through efficient SQL indexing.",
      "Implemented 10+ features for the Smart DART application using React and AWS Lambda, optimizing API response times by 2.6%.",
      "Developed a custom inventory management system using Flask and Airtable API to synchronize status for 500+ SKUs."
    ],
    techStack: ["React", "TypeScript", "AWS Lambda", "DynamoDB", "Flask", "GraphQL", "Salesforce"]
  },
  {
    id: "nyc-dof-swe",
    role: "Software Engineer Intern",
    company: "New York City Department of Finance",
    period: "June 2024 - Aug 2024",
    recruiterDescription: [
      "I built tools to help staff find documents 35% faster, making their daily work much more efficient.",
      "I created a digital intake form that automatically routed data to the right people, eliminating endless email chains.",
      "I successfully moved 50,000+ records to a new system without losing a single piece of data."
    ],
    engineerDescription: [
      "Developed modular SharePoint Framework (SPFx) web parts using React and Fluent UI, improving document retrieval efficiency by 35%.",
      "Automated data routing workflows using Power Automate and Python, replacing manual email-based processes.",
      "Wrote Python migration scripts to clean, map, and transfer 50,000+ legacy records to SharePoint with 100% data integrity."
    ],
    techStack: ["React", "SPFx", "Fluent UI", "Python", "Power Automate", "SharePoint"]
  },
  {
    id: "ai-genesis-ai",
    role: "AI Engineer",
    company: "AI Genesis Glib",
    period: "Dec 2022 - April 2023",
    recruiterDescription: [
      "I built a customer support bot that handled flight bookings, which took a huge load off the human support team.",
      "I upgraded our AI brain to be much smarter, improving its ability to understand users to 95%.",
      "I set up a testing system to make sure the bot always gave the right answers before we released any updates."
    ],
    engineerDescription: [
      "Built a conversational AI agent using Rasa for flight booking intent recognition and slot filling.",
      "Migrated NLP stack to LangChain and Pinecone, improving intent classification accuracy to 95% via few-shot prompting.",
      "Established a CI/CD testing pipeline with Pytest, running 100+ regression scenarios for every model deployment."
    ],
    techStack: ["Rasa", "LangChain", "Pinecone", "FastAPI", "Python", "Pytest"]
  }
];
