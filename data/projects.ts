export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  impact: string;
  githubUrl?: string;
  liveUrl?: string;
  architecture: string[];
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "ai-med-chatbot",
    title: "AI_Med_Chatbot",
    shortDescription: "Conversational medical assistant for context-aware Q&A over PDFs.",
    fullDescription: "A conversational medical assistant built using LangChain, Mistral-7B, FAISS vector search, and Streamlit. It enables context-aware Q&A over medical PDFs using Retrieval-Augmented Generation (RAG). Deployed using HuggingFace Inference Endpoints and custom prompt templates.",
    techStack: ["LangChain", "Mistral-7B", "FAISS", "Streamlit", "HuggingFace"],
    impact: "Enables instant, context-aware answers from complex medical documents.",
    githubUrl: "https://github.com/Yashshah0502",
    architecture: [
      "PDF Ingestion -> Text Chunking",
      "Embedding -> FAISS Vector Store",
      "Retrieval -> Context Matching",
      "Generation -> Mistral-7B (HuggingFace)",
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
    shortDescription: "Luxury e-commerce platform with a robust admin dashboard.",
    fullDescription: "SanGeet by Gitika reimagines a luxury e-commerce experience for premium handbags and accessories while offering a robust internal admin control system. The storefront offers an immersive, SEO-optimized shopping experience with real-time product data and conversational commerce via WhatsApp and Instagram. The Admin Workspace is a secure, JWT-based dashboard with analytics, catalog CRUD, and content management built on Supabase and Node.js APIs.",
    techStack: ["Next.js 16", "TypeScript", "Supabase", "Tailwind CSS v4", "Framer Motion", "Node.js"],
    impact: "Streamlined inventory management and enhanced customer engagement via social commerce.",
    liveUrl: "https://sangeetbygitika-ow3q.vercel.app",
    githubUrl: "https://github.com/Yashshah0502/sangeetbygitika",
    architecture: [
      "Frontend -> Next.js 16 (App Router)",
      "Database -> Supabase (PostgreSQL)",
      "Auth -> JWT + bcrypt (Role-based)",
      "State -> React Context + localStorage",
      "Styling -> Tailwind CSS v4"
    ],
    highlights: [
      "Built a secure Admin Dashboard with analytics and inventory management.",
      "Implemented conversational commerce features for WhatsApp and Instagram.",
      "Optimized SEO with structured data and Open Graph tags."
    ]
  },
  {
    id: "langgraph-ai-agent",
    title: "LangGraph-AI-Agent",
    shortDescription: "Autonomous AI agent with reasoning loop and web search.",
    fullDescription: "An autonomous AI agent with a FastAPI backend and LangGraph-based reasoning loop. It integrates LLaMA-3.3 70B and Tavily web search for real-time information retrieval and supports web-based interaction via Streamlit.",
    techStack: ["FastAPI", "LangGraph", "LLaMA-3.3 70B", "Tavily API", "Streamlit"],
    impact: "Provides real-time, reasoned answers by combining LLM knowledge with live web data.",
    githubUrl: "https://github.com/Yashshah0502",
    architecture: [
      "User Query -> FastAPI Endpoint",
      "Reasoning -> LangGraph Loop",
      "Tool Use -> Tavily Web Search",
      "Generation -> LLaMA-3.3 70B",
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
    shortDescription: "Hybrid recommender system using sentiment and semantic similarity.",
    fullDescription: "A hybrid recommender system using sentiment analysis and semantic similarity. It uses zero-shot classification to split fiction/non-fiction with 78% accuracy and vector-based recommendation using cosine similarity across 5,200+ book descriptions.",
    techStack: ["Python", "Transformers", "Cosine Similarity", "Zero-Shot Classification"],
    impact: "Achieved 78% accuracy in genre classification and highly relevant recommendations.",
    githubUrl: "https://github.com/Yashshah0502",
    architecture: [
      "Data Processing -> Text Cleaning",
      "Classification -> Zero-Shot Model",
      "Embedding -> Sentence Transformers",
      "Recommendation -> Cosine Similarity"
    ],
    highlights: [
      "Implemented zero-shot classification for automatic genre tagging.",
      "Used semantic similarity to find books with matching 'vibes'.",
      "Processed a dataset of over 5,200 books for robust recommendations."
    ]
  }
];
