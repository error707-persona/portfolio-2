import streamlit from "../assets/streamlit.png";
import seaborn from "../assets/seaborn.png";
import matplotlib from "../assets/Matplotlib.png";
import reactjs from "../assets/React.webp";
import mongodb from "../assets/mongodb.png"
import chartjs from "../assets/reactchartjs.png";
import coingeko from "../assets/CoinGecko_logo.png";
import whatsappAnalysis from "../assets/whatsapp_analysis_logo.png";
import nextjs from "../assets/next.png"
import aws from "../assets/aws.png"
import postgresql from "../assets/postgresql.png"
import stability from "../assets/stability.jpg"
import hugging from "../assets/huggingface.png"
import ailogo from "../assets/ailogo.png"
import inventory from "../assets/inventory-management-app.png"
import crypto from "../assets/crypto.jpg"
import motion from "../../public/images/motion.png"
import freelance from "../../public/images/Screenshot 2025-06-22 235519.png"

const projects = [
  {
    icon: ailogo,
    title: "Image generation Ai Saas Application",
    description:
      "Designed and developed a full-stack Inventory Management System using Next.js (frontend), Node.js (backend), and PostgreSQL (database), enabling seamless CRUD operations and real-time inventory tracking.",
    tech: [nextjs, stability, hugging],
    texture: "/textures/project/project3.mp4",
    link: "#",
    repolink: "https://github.com/error707-persona/ai-saas.git"
  },
  {
    icon: inventory,
    title: "Inventory Management",
    description:
      "Designed and developed a full-stack Inventory Management System using Next.js (frontend), Node.js (backend), and PostgreSQL (database), enabling seamless CRUD operations and real-time inventory tracking",
    tech: [nextjs, postgresql, aws],
    texture: "/textures/project/project4.mp4",
    link: "https://inventory-management-kappa-red.vercel.app/dashboard",
    repolink: "https://github.com/error707-persona/warehouse-management"
  },
  {
    icon: inventory,
    title: "Yoom - A video conferencing app",
    description:
      "Developed using Next.js, clerk and stream-io, giving a seemless experience of virtual meeting having features like create instant meet, schedule meet, option to share screen, record meeting, mic and video configurations etc.",
    tech: [nextjs, postgresql, aws],
    texture: "/textures/project/project5.mp4",
    link: "https://kmeet-woad.vercel.app/",
    repolink: "https://github.com/error707-persona/kmeet.git"
  },
  {
    icon: freelance,
    title: "ShreeNidhi - Jewellery website",
    description:
      "This is a freelance project oppotunity on which i got to work on its Frontend. Its a small website I've built with tailwind and motion libraries showcasing my frontend skills",
    tech: [reactjs, mongodb, motion],
    texture: "/textures/project/project5.mp4",
    link: "https://shreenidhi-2pp4.vercel.app/",
    repolink: "https://github.com/error707-persona/shreenidhi.git"
  },
  {
    icon: whatsappAnalysis,
    title: "Whatsapp chat insights",
    description:
      "Consist of wordcloud, texts analysis of one user/all users, speech sentiment analysis, user activity based on daily and monthly timeline, link and emoji analysis, weekly activity map.",
    tech: [streamlit, seaborn, matplotlib],
    texture: "/textures/project/project1.mp4",
    link: "https://whatsappchatanalyzergit-jgudauhhzb95znsz9xz8r6.streamlit.app/",
    repolink: "https://github.com/error707-persona/WhatsAppChatAnalyzer.git"
  },
  {
    icon: crypto,
    title: "Crypto - A Crypto Currency app for crypto beginners",
    description:
      "Aim was to build a crypto beginner friendly site, getting basic knowledge of crypto without getting overwhelmed.",
    tech: [reactjs, mongodb, chartjs, coingeko],
    texture: "/textures/project/project2.mp4",
    link: "https://crypton-786.netlify.app/",
    repolink: "https://github.com/error707-persona/currency.git"
  },
];

export default projects;
