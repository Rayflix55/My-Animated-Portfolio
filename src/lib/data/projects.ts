export type Project = {
  title: string;
  category: string;
  index: string;
  image: string;
  liveLink: string;
  githubLink: string;
  tech: string[];
  status: string;
  year: string;
};

export const projects: Project[] = [
  {
    title: "Weng Foundation",
    category: "Disability Support Platform",
    index: "01",
    image: "/projects/1.png",
    liveLink: "https://yagaziewengfoundationforthedeaf.org/",
    githubLink: "https://github.com/Rayflix55/Yagazie-Weng-Umezurike-Foundation-",
    tech: ["Vanilla JS", "TailwindCSS", "HTML5"],
    status: "Live",
    year: "2026",
  },
  {
    title: "Jupiter",
    category: "Analytics Dashboard",
    index: "02",
    image: "/projects/4.png",
    liveLink: "https://jupiter-real-time-analytics-dashboa.vercel.app/",
    githubLink: "https://github.com/Rayflix55/Jupiter-Real-Time-Analytics-Dashboard",
    tech: ["Vue 3", "TypeScript", "Pinia", "ECharts"],
    status: "Live",
    year: "2026",
  },
  {
    title: "House of Enna",
    category: "Female Clothing Brand",
    index: "03",
    image: "/projects/3.png",
    liveLink: "https://house-of-enna.vercel.app/",
    githubLink: "https://github.com/Rayflix55/House-Of-Enna",
    tech: ["React 19", "TypeScript", "Framer-Motion", "Tailwind CSS"],
    status: "Live",
    year: "2026",
  },
  {
    title: "BDI Foundation",
    category: "Nonprofit Website",
    index: "04",
    image: "/projects/2.png",
    liveLink: "https://techbdi.com.ng/",
    githubLink: "https://github.com/Chamberezigbo/Abaglobal",
    tech: ["HTML", "CSS", "SCSS", "JavaScript", "PHP"],
    status: "Live",
    year: "2025",
  },
];
