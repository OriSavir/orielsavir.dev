export interface ExperienceType {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

const experiences: ExperienceType[] = [
  {
    id: 1,
    title: "ML Kernels Engineer",
    company: "Annapurna Labs (AWS)",
    period: "Summer 2026",
    description: "Will work on SOTA ML kernels for large-scale LLM training and inference on next-generation accelerators.",
    skills: []
  },
  {
    id: 2,
    title: "Deep Learning Researcher",
    company: "Mathematical Institute for Data Science (MINDS)",
    period: "Mar 2024 – Present",
    description: "First-Author on `Learning Affine-Equivariant Proximal Operators`, accepted at ICASSP 2026, a novel framework for learning guaranteed proximals with equivariance preservation. Significantly increased robustness of inverse problems for imaging.",
    skills: ["Python", "PyTorch", "Mathematics", "CNNs", "Deep Learning", "Optimization", "Neural Networks"]
  },
  {
    id: 3,
    title: "Summer Intern",
    company: "Investment Management Firm",
    period: "Jul 2025 – Aug 2025",
    description: "Worked on investment strategies and equity research on technology and consumer companies. Developed models and conducted extensive analysis of fundamentals and technicals.",
    skills: []
  },
  {
    id: 4,
    title: "Member of the Technical Staff Intern",
    company: "Cockroach Labs",
    period: "May 2025 – Jul 2025",
    description: "Worked on an efficient command to extract full-schema DDL from live CockroachDB nodes. Optimized for latency and reliability with comprehensive stress-testing to mirror deployment env.",
    skills: ["Go", "Distributed Systems", "SQL"]
  },
  {
    id: 7,
    title: "Senior Teaching Assistant, Deep Learning (CS 482/682)",
    company: "Johns Hopkins University",
    period: "Jan 2025 – Dec 2025",
    description: "Served on teaching staff for Hopkins' graduate-level deep learning course. Helped teach over 400 graduate-level students.",
    skills: ["Teaching", "Deep Learning", "PyTorch"]
  },
  {
    id: 5,
    title: "Software Engineering Intern",
    company: "Capital One",
    period: "May 2024 – Aug 2024",
    description: "Developed Capital One's first in-house feature store for the credit issuance machine learning pipeline. Built v1 of a Python SDK for creating, managing, and querying feature stores at scale.",
    skills: ["Python", "SDK Development", "Distributed Computing", "Snowflake", "AWS EMR", "DynamoDB", "DuckDB", "Apache Spark", "Docker", "Polars", "Delta Lake"]
  },
  {
    id: 6,
    title: "Software Engineering Intern",
    company: "XTractor",
    period: "Jun 2023 – Dec 2023",
    description: "Led web development of a tool for tabular data extraction used by researchers at top universities. Worked with a team of talented upper-level and graduate students to do a challenging task before it was easy.",
    skills: ["TypeScript", "Next.js", "AWS S3", "AWS SageMaker", "PyTorch", "Tailwind CSS"]
  },
  {
    id: 8,
    title: "Computational Biophysics Research Assistant",
    company: "JHU Department of Biophysics",
    period: "Apr 2023 – Dec 2023",
    description: "Modeled dynamics of clathrin-mediated endocytosis using stochastic reaction-diffusion simulations in C++. Contributed to an HPC reaction dynamics simulation software.",
    skills: ["Python", "C++", "NumPy", "SciPy", "GNU Scientific Library", "Matplotlib", "Differential Calculus"]
  },
  {
    id: 9,
    title: "Software Engineer",
    company: "Delineo Disease Modeling Group",
    period: "Jan 2022 – Oct 2022",
    description: "Led a development team modeling disease spread mechanisms using data science and monte carlo simulations of major U.S. cities.",
    skills: ["Python", "Next.js", "TensorFlow", "MongoDB", "PyMongo", "SynthPops"]
  }
];

export default experiences;
