import { Project } from "next/dist/build/swc/types";

export interface ProjectType {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    category: string;
    link: string | null;
    github: string;
    featured: boolean;
    longDescription: string;
    features: string[];
}

// possible tags for projects at the moment:
// 'web', 'mobile', 'ui', 'other'

const projects: ProjectType[] = [
  {
    "id": 1,
    "title": "PyBWT",
    "description": "A Python implementation of a highly optimized Burrows-Wheeler Transform (BWT), which is commonly used in genomics research for efficient text compression and string searching applications.",
    "image": "/images/pybwt.png",
    "tags": ["Python", "Object-Oriented Design", "Compression", "Algorithms"],
    "category": "algorithm",
    "link": null,
    "github": "https://github.com/OriSavir/PyBWT",
    "featured": false,
    "longDescription": "PyBWT is a Python implementation of the Burrows-Wheeler Transform (BWT), a key component in data compression and bioinformatics applications. This project enables efficient text compression and pattern matching by rearranging input strings into a more structured form. It serves as an educational tool for understanding BWT and its applications.",
    "features": [
      "Implements the Burrows-Wheeler Transform (BWT)",
      "Supports inverse BWT for lossless decompression",
      "Efficient suffix array construction",
      "Optimized for text compression and pattern matching",
      "Pure Python implementation with no external dependencies"
    ]
  }
  ,
  {
    "id": 2,
    "title": "Pathfinder",
    "description": "A computational tool for predicting likely genomic pathways and interactions using mathematical time-series expression modeling.",
    "image": "/images/pathfinder.png",
    "tags": ["Python", "Data Science", "PCA", "Heat-Maps", "Computational Genomics", "Bioinformatics", "Science"],
    "category": "science",
    "link": null,
    "github": "https://github.com/OriSavir/Pathfinder",
    "featured": false,
    "longDescription": "Pathfinder is a bioinformatics tool designed to predict probable genomic pathways and interactions and regulatory networks by using RNA-Seq time-series expression data and advanced data science techniques, modified for computational genomics usage.",
    "features": [
      "Predicts likely genomic pathways and interactions",
      "Utilizes graph-based modeling for biological network analysis",
      "Supports integration of multi-omic datasets",
      "Identifies key genes and interactions within pathways",
      "Optimized for large-scale genomic datasets"
    ]
  },
  {
    "id": 3,
    "title": "Low-Latency Portfolio Return Analyzer",
    "description": "A high-performance tool for analyzing portfolio returns in real-time, designed for quantitative finance applications.",
    "image": "/images/portfolio-analyzer.png",
    "tags": ["C++", "Quantitative Finance", "Quantitative Analysis", "Algorithmic Trading", "Optimization"],
    "category": "quant",
    "link": null,
    "github": "https://github.com/OriSavir/Low-Latency-Portfolio-Return-Analyzer",
    "featured": true,
    "longDescription": "This project is a high-performance portfolio return analyzer optimized for low-latency financial computations. Designed for quantitative finance applications, it enables real-time analysis of portfolio returns, helping traders and investors make faster, data-driven decisions. The system is built with efficient data structures and computational techniques to minimize processing delays.",
    "features": [
      "Low-latency analysis of portfolio returns",
      "Optimized for financial computations",
      "Integrates with large excel financial data sheets",
      "Leverages non-linear optimization techniques for efficient optimization and analysis",
      "Designed for quantitative finance and algorithmic trading applications"
    ]
  },
  {
    "id": 4,
    "title": "EndoVis Segmentation Challenge",
    "description": "A deep learning-based solution for surgical tool segmentation in endoscopic images, developed for the EndoVis Segmentation Challenge.",
    "image": "/images/endovis-segmentation.png",
    "tags": ["Python", "PyTorch", "Deep Learning", "Computer Vision", "Medical Imaging", "ML"],
    "category": "ml",
    "link": null,
    "github": "https://github.com/OriSavir/Endovis-Segmentation-Challenge",
    "featured": true,
    "longDescription": "This project focuses on developing a deep learning model for segmenting surgical tools in endoscopic images as part of the EndoVis Segmentation Challenge. The approach involves training a U-Net architecture with custom loss functions and data augmentation techniques to improve robustness against non-adversarial corruption such as blood occlusions. The model is optimized for high accuracy in real-world medical imaging applications.",
    "features": [
      "U-Net-based segmentation model for surgical tool detection",
      "Custom DICE loss function for improved segmentation accuracy",
      "Robust to non-adversarial corruptions (e.g., blood occlusions)",
      "Utilizes data augmentation techniques for better generalization",
      "Trained and evaluated on the EndoVis dataset",
      "Designed for real-world medical imaging applications"
    ]
  },
  {
    "id": 5,
    "title": "Medslate",
    "description": "An AI-empowered web application that transcribes medical appointments and generates patient-friendly summaries and key questions using AI.",
    "image": "/images/medslate.png",
    "tags": ["TypeScript", "Next.js", "MySQL", "Prisma", "tRPC", "AWS", "OpenAI", "ML"],
    "category": "web",
    "link": null,
    "github": "https://github.com/Sapienti01/hophacks_xot",
    "featured": true,
    "longDescription": "Medslate is an AI-powered application that transcribes medical appointments using AWS Transcribe and generates patient-friendly summaries and key follow-up questions using the OpenAI API. Built with TypeScript and Next.js, it leverages MySQL, Prisma, and AWS S3 for data storage and processing. The project won the Bloomberg Most Philanthropic Hack award at the HopHacks 2023 MLH hackathon for its impact on improving medical communication and accessibility.",
    "features": [
      "Transcribes medical appointments and produces intuitive summaries",
      "Generates no-jargon summaries and key patient questions via OpenAI API",
      "Built with TypeScript, Next.js, and tRPC for a seamless user experience",
      "Stores data efficiently with MySQL, Prisma, and AWS S3",
      "Designed for accessibility and ease of use in healthcare settings"
    ]
  },
  
  ];

export default projects;