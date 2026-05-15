export const resumeData = {
    personalInfo: {
        name: "Sakshi Aggarwal",
        title: "Full-Stack Developer",
        summary:
            "CSE(AI) undergraduate, currently in the 2nd year, with experience in full-stack and AI-powered projects. Skilled at building scalable, production-ready applications through hackathons and internships, focusing on real-world impact.",
        email: "sakshiaggarwal2706@gmail.com",
        phone: "+91 8810327762",
        linkedin: "https://www.linkedin.com/in/sakshi-aggarwal-3149bb301/",
        github: "https://github.com/Sakshii-27",
        location: "Delhi, India",
    },
    education: [
        {
            institution: "Indira Gandhi Delhi Technical University For Women",
            degree: "B.Tech in Computer Science Engineering (AI)",
            year: "Aug 2024 – May 2028",
            grade: "CGPA: 8.69 / 10",
            location: "Delhi",
        },
        {
            institution: "Doon Public School (CBSE)",
            degree: "Class XII",
            year: "2024",
            grade: "Class XII: 92.4% — Class X: 96.2%",
            location: "",
        },
    ],
    skills: {
        languages: ["Python", "JavaScript", "C++", "SQL", "R"],
        webDev: ["React", "Next.js", "Node.js", "FastAPI", "Tailwind CSS"],
        databases: ["PostgreSQL", "Firebase", "MongoDB"],
        concepts: ["Data structures", "Algorithms", "OOP", "DBMS"],
        devOps: ["Git", "GitHub"],
        tools: ["Postman", "Jupyter Notebook", "Figma"],
    },
    experience: [
        {
            company: "Birla Pivot (Aditya Birla Group)",
            role: "Software Developer Intern",
            period: "June 2025 – July 2025",
            location: "Bengaluru, India",
            description: [
                "Built scalable React components via React Query & Redux, improving maintainability and accelerating data handling.",
                "Resolved UI/UX issues including tile selection, RFQ flows, and validations; implemented server-side sorting for 1000+ records, enhancing performance by ~25%.",
                "Optimized APIs by splitting heavy integrations into efficient endpoints, reducing initial render time by ~40%.",
                "Worked in an Agile environment, contributing to code reviews, testing, and deployment.",
            ],
            technologies: [
                "React",
                "Redux",
                "React Query",
                "TanStack Table",
                "REST APIs",
                "Jira",
                "Bitbucket",
                "Jenkins",
            ],
        },
    ],
    projects: [
        {
            title: "MetroMind: AI-driven Metro Operations Platform (for Kochi Metro Rail Limited)",
            period: "December 2025",
            description:
                "SIH 2025 Winner – Built AI + CP-SAT multi-objective solvers using Google OR-Tools to automate train induction, standby, and crew rostering, cutting scheduling time from 2 hours to under 5 minutes.",
            technologies: [
                "FastAPI",
                "Python",
                "Google OR-Tools",
                "n8n",
                "Gemini AI",
                "XGBoost",
                "Next.js",
                "Three.js",
                "Leaflet",
                "Resend",
                "Firebase",
                "Next-intl"
            ],
            links: {
                code: "https://github.com/Sakshii-27/metromind",
                demo: "https://metro-mind-five.vercel.app/en",
                video: "",
            },
            highlights: [
                "Orchestrated multiple AI agents for conversational interfaces, WhatsApp automation, and ML delay prediction models to forecast metro locations and arrival times with 89% accuracy.",
                "Engineered full-stack FastAPI+Next.js system with RBAC, OTP login, multilingual support (Next-intl), and n8n automation.",
            ],
        },
        {
            title: "Complifi: AI-Powered Regulatory Compliance Platform",
            period: "August 2025",
            description:
                "Designed an end-to-end AI system for Indian enterprises that monitors 5+ regulators (FSSAI, RBI, SEBI, DGFT, Gazette) to automate amendment detection and deliver personalized compliance insights.",
            technologies: [
                "FastAPI",
                "Next.js",
                "RAG",
                "LangChain",
                "ChromaDB",
                "Groq/LLaMA",
                "Python",
                "Web Scraping",
                "BeautifulSoup"
            ],
            links: {
                code: "https://github.com/Sakshii-27/CompliFi",
                demo: "https://compli-aktyo7qwo-sakshii-27s-projects.vercel.app",
            },
            highlights: [
                "Developed a scalable backend with Python, FastAPI, PostgreSQL, and ChromaDB for RAG-based semantic retrieval.",
                "Applied LangChain and open-source LLMs (Groq, Llama-3.3-70B) to automate compliance summarization, cutting manual review by 80%.",
            ],
        },
        {
            title: "Sweekaar: Accessible Daily Task Trainer for Neurodivergent Children",
            period: "April 2025",
            description:
                "Engineered therapeutic platform for children with autism, ADHD & cerebral palsy, using step-by-step task breakdowns to reduce caregiver burden by 40% through structured repetition training.",
            technologies: [
                "TensorFlow.js",
                "Coco-SSD",
                "MediaPipe",
                "React",
                "Computer Vision",
                "Real-time Processing",
            ],
            links: {
                code: "https://github.com/Sakshii-27/sweekaar",
                video: "https://www.youtube.com/watch?v=YDuw_Pu1ESI",
            },
            highlights: [
                "Developed real-time object detection (Coco-SSD) and gesture tracking (MediaPipe) pipeline using TensorFlow.js.",
                "Built responsive, WCAG 2.1-compliant React frontend to provide automated guidance and reduce cognitive load.",
            ],
        },
        {
            title: "Memory Haven",
            period: "February 2025",
            description:
                "Developed a web application to assist individuals with memory impairments in recognizing familiar faces and locations.",
            technologies: [
                "Next.js",
                "PostgreSQL",
                "Google Maps API",
                "Gemini AI API",
                "Face Recognition",
            ],
            links: {
                code: "https://github.com/Sakshii-27/memory-haven.git",
                demo: "https://memory-haven-v1-git-main-suhaanis-projects.vercel.app",
            },
            highlights: [
                "Integrated Next.js for frontend, PostgreSQL for backend and Google Maps API for location tracking.",
                "Implemented Face Recognition for identifying known individuals and Gemini AI API for personalized assistance.",
            ],
        },
        {
            title: "Fire Sentinel",
            period: "December 2024",
            description:
                "Developed an Al-assisted web application for fire safety awareness and evacuation training using real-time scenario simulations.",
            technologies: [
                "Next.js",
                "Firebase",
                "Leaflet.js",
            ],
            links: {
                code: "https://github.com/Sakshii-27/fire-sentinel-vl.git",
                demo: "https://fire-sentinel-v1-xp5k.vercel.app",
            },
            highlights: [
                "Built with Next.js for the frontend and Firebase for backend data storage and user management.",
                "Integrated Leaflet.js to visualize building maps and track hotel staff movement during simulated fire scenarios.",
                "Implemented a scenario-based risk classification system and provided step-by-step evacuation feedback.",
            ],
        },
        {
            title: "Open Source Contributions",
            period: "Ongoing",
            description:
                "Active contributor to major open-source projects, focusing on distributed systems and cloud-native technologies.",
            technologies: [
                "C",
                "C++",
                "Rust",
                "React",
                "PostgreSQL",
            ],
            links: {
                code: "https://github.com/Sakshii-27",
            },
            highlights: [
                "Contributed to PostgreSQL & Cilium (CNCF), resolving issues in large-scale distributed systems.",
            ],
        },
    ],
    achievements: [
        {
            title: "Winner: Smart India Hackathon (SIH)",
            date: "2025",
        },
        {
            title: "1st Place: Phantom Agents Hackathon (Oblivion NSUT)",
            date: "Aug 2025",
        },
        {
            title: "2nd Place: Hackground India Hackathon",
            date: "Aug 2025",
        },
        {
            title: "Best WIE Team: Vihaan 8.0 Hackathon (IEEE DTU)",
            date: "Apr 2025",
        },
        {
            title: "3rd Place: Hack-it-up Hackathon (MSC IGDTUW)",
            date: "Feb 2025",
        },
        {
            title: "1st Place: Innoquest-Access Ideathon (Microsoft)",
            date: "Sep 2024",
        },
        {
            title: "2nd Place: Smart Product Design Ideathon (IIITD)",
            date: "Aug 2024",
        },
    ],
    extracurricular: [
        {
            role: "Web Development Mentor",
            organization: "GDG IGDTUW",
            period: "Oct 2025 – Mar 2026",
        },
        {
            role: "Web Developer",
            organization: "MSC IGDTUW",
            period: "July 2025 – Present",
        },
        {
            role: "Dual Coordinator: Events & Content",
            organization: "IEEE IGDTUW",
            period: "Aug 2024 – July 2025",
        },
    ],
};
