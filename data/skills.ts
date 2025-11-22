export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "AI & ML",
    items: ["OpenAI API", "LangChain", "LlamaIndex", "Hugging Face", "RAG", "Prompt Engineering", "Fine-tuning"]
  },
  {
    category: "Backend & Cloud",
    items: ["Python", "FastAPI", "PostgreSQL", "Redis", "Pinecone", "Microsoft Fabric", "AWS", "Azure"]
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn/UI"]
  },
  {
    category: "Data Engineering",
    items: ["SQL", "PySpark", "ETL Pipelines", "Airflow", "Databricks", "Snowflake"]
  },
  {
    category: "Tools",
    items: ["Docker", "Kubernetes", "Git", "CI/CD", "Vercel", "Linux"]
  }
];
