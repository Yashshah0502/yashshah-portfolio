export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  recruiterDescription: string;
  engineerDescription: string;
  techStack: string[];
  impact: string;
  githubUrl?: string;
  liveUrl?: string;
  architecture: string[];
  highlights: string[];
  category: "AI" | "Full Stack" | "Data";
}

export const projects: Project[] = [
  {
    id: "ai-med-chatbot",
    title: "AI_Med_Chatbot",
    category: "AI",
    shortDescription: "Conversational medical assistant for context-aware Q&A over PDFs.",
    recruiterDescription: "I built a conversational medical assistant that allows doctors to ask questions about complex medical PDFs and get instant, accurate answers. It uses advanced AI to understand context and provide source-backed responses, significantly reducing research time.",
    engineerDescription: "Developed a RAG pipeline using LangChain and Mistral-7B. Implemented FAISS for vector similarity search to retrieve relevant PDF chunks. Deployed the model on HuggingFace Inference Endpoints for scalable, low-latency inference, using custom prompt engineering to ensure medical accuracy.",
    techStack: ["LangChain", "Mistral-7B", "FAISS", "Streamlit", "HuggingFace"],
    impact: "Enables instant, context-aware answers from complex medical documents.",
    githubUrl: "https://github.com/Yashshah0502",
    architecture: [
      "PDF Ingestion -> Text Chunking (RecursiveCharacterTextSplitter)",
      "Embedding -> FAISS Vector Store (HuggingFace Embeddings)",
      "Retrieval -> MMR (Maximal Marginal Relevance)",
      "Generation -> Mistral-7B-Instruct (HF Inference API)",
      "UI -> Streamlit"
    ],
    highlights: [
      "Implemented RAG for accurate, source-backed medical answers.",
      "Used FAISS for efficient similarity search over large documents.",
      "Deployed on HuggingFace Inference Endpoints for scalable inference."
    ]
  },
  {
    id: "sangeet-by-gitika",
    title: "SanGeet by Gitika",
    category: "Full Stack",
    shortDescription: "Luxury e-commerce platform with a robust admin dashboard.",
    recruiterDescription: "SanGeet by Gitika is a premium e-commerce platform I built for a luxury handbag brand. It features a beautiful, high-performance storefront for customers and a powerful admin dashboard for the business owner to manage inventory and sales. It integrates directly with WhatsApp and Instagram for modern social commerce.",
    engineerDescription: "Architected a full-stack e-commerce solution using Next.js 16 (App Router) and Supabase. Built a secure Admin Dashboard with Role-Based Access Control (RBAC) using JWTs and Row Level Security (RLS). Implemented optimistic UI updates for the cart and wishlist using React Context and localStorage.",
    techStack: ["Next.js 16", "TypeScript", "Supabase", "Tailwind CSS v4", "Framer Motion", "Node.js"],
    impact: "Streamlined inventory management and enhanced customer engagement via social commerce.",
    liveUrl: "https://sangeetbygitika-ow3q.vercel.app",
    githubUrl: "https://github.com/Yashshah0502/sangeetbygitika",
    architecture: [
      "Frontend -> Next.js 16 (App Router + Server Components)",
      "Database -> Supabase (PostgreSQL + RLS)",
      "Auth -> JWT + bcrypt (HttpOnly Cookies)",
      "State -> React Context + Optimistic Updates",
      "Styling -> Tailwind CSS v4 + Framer Motion"
    ],
    highlights: [
      "Built a secure Admin Dashboard with analytics and inventory management.",
      "Implemented conversational commerce features for WhatsApp and Instagram.",
      "Optimized SEO with structured data and Open Graph tags."
    ]
  },
  {
    id: "coffee-ai-agent",
    title: "Coffee Shop AI Agent",
    category: "AI",
    shortDescription: "A smart AI barista that takes orders and recommends drinks.",
    recruiterDescription: "I wanted to create an AI that feels like a real barista. This agent doesn't just take orders; it understands context and recommends drinks based on your preferences. It handles the entire conversation naturally, from greeting to order confirmation.",
    engineerDescription: "Built a multi-agent system using LLaMA 3.1 and Pinecone. Designed a 'Guard Agent' to ensure safety and topic adherence, and a 'Recommender Agent' using RAG to suggest drinks based on menu data. Deployed on RunPod GPUs to achieve <500ms latency for real-time interaction.",
    techStack: ["Python", "LLaMA 3.1", "Pinecone", "React Native", "Firebase", "RunPod"],
    impact: "Reduced order latency by 3x and enabled real-time voice-like interaction.",
    githubUrl: "https://github.com/yashshah/coffee-agent",
    architecture: [
      "User Input -> Guard Agent (Safety Check)",
      "Classifier Agent -> Determines Intent (Order vs. Chat)",
      "Recommender Agent -> RAG (Pinecone + OpenAI Embeddings)",
      "Order Handler -> Firebase Transaction (ACID Compliant)",
      "LLM -> LLaMA 3.1 (RunPod GPU)"
    ],
    highlights: [
      "It feels real: I used RAG to give it knowledge about specific coffee blends.",
      "It's fast: Deployed on RunPod GPUs to minimize the awkward pause in conversation.",
      "It's safe: A dedicated Guard Agent ensures it stays on topic and safe."
    ]
  },
  {
    id: "langgraph-ai-agent",
    title: "LangGraph-AI-Agent",
    category: "AI",
    shortDescription: "Autonomous AI agent with reasoning loop and web search.",
    recruiterDescription: "This is an autonomous AI agent that can 'think' before it answers. Unlike standard chatbots, it can plan out multi-step tasks, search the web for real-time information, and reason through complex problems to provide a comprehensive answer.",
    engineerDescription: "Implemented a reasoning loop using LangGraph to manage state and execution flow. Integrated Tavily API for real-time web search and LLaMA-3.3 70B for generation. The agent uses a 'Plan-Execute-Refine' cycle to iteratively improve its answers based on search results.",
    techStack: ["FastAPI", "LangGraph", "LLaMA-3.3 70B", "Tavily API", "Streamlit"],
    impact: "Provides real-time, reasoned answers by combining LLM knowledge with live web data.",
    githubUrl: "https://github.com/Yashshah0502",
    architecture: [
      "User Query -> FastAPI Endpoint",
      "Reasoning -> LangGraph State Graph",
      "Tool Use -> Tavily Web Search API",
      "Generation -> LLaMA-3.3 70B (Groq Inference)",
      "UI -> Streamlit"
    ],
    highlights: [
      "Designed a reasoning loop using LangGraph for complex query resolution.",
      "Integrated Tavily for accurate, real-time web search capabilities.",
      "Built a modular FastAPI backend for easy extensibility."
    ]
  },
  {
    id: "book-recommender",
    title: "BookRecommender",
    category: "Data",
    shortDescription: "Hybrid recommender system using sentiment and semantic similarity.",
    recruiterDescription: "I built a book recommendation engine that understands the 'vibe' of a book, not just its genre. Users can search for 'a sad story about a robot' and get perfect matches. It analyzes the emotional tone and plot details of over 5,000 books.",
    engineerDescription: "Developed a hybrid recommender system combining Zero-Shot Classification (Bart-Large-MNLI) for genre tagging and Cosine Similarity on SBERT embeddings for semantic search. Processed a dataset of 5,200+ books using Pandas and NLTK for text preprocessing.",
    techStack: ["Python", "Transformers", "Cosine Similarity", "Zero-Shot Classification"],
    impact: "Achieved 78% accuracy in genre classification and highly relevant recommendations.",
    githubUrl: "https://github.com/Yashshah0502",
    architecture: [
      "Data Processing -> Text Cleaning (NLTK)",
      "Classification -> Zero-Shot Model (Bart-Large-MNLI)",
      "Embedding -> Sentence Transformers (all-MiniLM-L6-v2)",
      "Recommendation -> Cosine Similarity Matrix"
    ],
    highlights: [
      "Implemented zero-shot classification for automatic genre tagging.",
      "Used semantic similarity to find books with matching 'vibes'.",
      "Processed a dataset of over 5,200 books for robust recommendations."
    ]
  },
  {
    id: "youtube-analysis",
    title: "YouTube Viral Trends Pipeline",
    category: "Data",
    shortDescription: "A scalable data pipeline to analyze what makes videos go viral.",
    recruiterDescription: "I was curious about what makes videos go viral, so I built a system to analyze YouTube trends at scale. It processes data from over 100,000 videos to find patterns in views, likes, and engagement, helping creators understand what works.",
    engineerDescription: "Built a serverless ETL pipeline using AWS Lambda and Glue. Ingested raw JSON data from the YouTube Data API into S3, transformed it to Parquet using Glue jobs, and queried it using Athena. Visualized key metrics in Amazon QuickSight.",
    techStack: ["AWS S3", "AWS Lambda", "AWS Glue", "AWS Athena", "QuickSight", "Python"],
    impact: "Processed 100k+ video records and visualized key engagement metrics.",
    githubUrl: "https://github.com/yashshah/youtube-analysis",
    architecture: [
      "Ingestion -> AWS S3 (Raw JSON)",
      "Transformation -> AWS Lambda & Glue (ETL)",
      "Storage -> S3 (Parquet)",
      "Query Engine -> AWS Athena",
      "Visualization -> Amazon QuickSight"
    ],
    highlights: [
      "Built a completely serverless architecture to keep costs low and scalability high.",
      "Optimized performance by converting raw JSON to Parquet format.",
      "Created interactive dashboards to spot trends in views and likes."
    ]
  },
  {
    id: "secure-auth",
    title: "SecureAuth System",
    category: "Full Stack",
    shortDescription: "A production-ready authentication system built from scratch.",
    recruiterDescription: "Security is critical, so I built a complete authentication system from scratch to master the fundamentals. It handles user registration, login, and secure sessions, ensuring that user data is always protected.",
    engineerDescription: "Implemented a full-stack auth system using Node.js, Express, and MongoDB. Used bcrypt for password hashing and JWTs for stateless authentication. Implemented refresh token rotation and HttpOnly cookies to prevent XSS and CSRF attacks.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Redux Toolkit", "JWT"],
    impact: "Provides a secure, reusable auth foundation for future applications.",
    architecture: [
      "Client -> React + Redux Toolkit",
      "API -> Express.js REST Endpoints",
      "Auth -> JWT (Access/Refresh Tokens)",
      "Database -> MongoDB (bcryptjs hashing)"
    ],
    highlights: [
      "Implemented industry-standard security with bcryptjs and JWT.",
      "Managed complex global state using Redux Toolkit.",
      "Designed a scalable REST API that's easy to integrate."
    ]
  }
];
