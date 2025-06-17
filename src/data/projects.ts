import streamlit from "../assets/streamlit.png";
import seaborn from "../assets/seaborn.png";
import matplotlib from "../assets/Matplotlib.png";
import reactjs from "../assets/React.webp";
import mongodb from "../assets/mongodb.png";
import chartjs from "../assets/reactchartjs.png";
import coingeko from "../assets/CoinGecko_logo.png";
import firebase from "../assets/firebase.png";
import whatsappAnalysis from "../assets/whatsapp_analysis_logo.png";
import chatApp from "../assets/chatApp.png";
import nextjs from "../assets/next.png"
import aws from "../assets/aws.png"
import postgresql from "../assets/postgresql.png"
import stability from "../assets/stability.jpg"
import hugging from "../assets/huggingface.png"

const projects = [
  {
    icon: chatApp,
    title: "Image generation Ai Saas Application",
    description:
      "Designed and developed a full-stack Inventory Management System using Next.js (frontend), Node.js (backend), and PostgreSQL (database), enabling seamless CRUD operations and real-time inventory tracking.",
    tech: [nextjs, stability, hugging],
    texture: "/textures/project/project3.mp4",
    link: "#",
    repolink: ""
  },
  {
    icon: chatApp,
    title: "Inventory Management",
    description:
      "Designed and developed a full-stack Inventory Management System using Next.js (frontend), Node.js (backend), and PostgreSQL (database), enabling seamless CRUD operations and real-time inventory tracking",
    tech: [nextjs, postgresql, aws],
    texture: "/textures/project/project4.mp4",
    link: "https://inventory-management-kappa-red.vercel.app/dashboard",
    repolink: "https://github.com/error707-persona/warehouse-management"
  },
  {
    icon: whatsappAnalysis,
    title: "Whatsapp chat insights",
    description:
      "Consist of wordcloud, texts analysis of one user/all users, speech sentiment analysis, user activity based on daily and monthly timeline, link and emoji analysis, weekly activity map.",
    tech: [streamlit, seaborn, matplotlib],
    texture: "/textures/project/project1.mp4",
    link: "https://whatsappchatanalyzergit-jgudauhhzb95znsz9xz8r6.streamlit.app/",
  },
  {
    icon: "",
    title: "Crypto - A Crypto Currency app for crypto beginners",
    description:
      "Aim was to build a crypto beginner friendly site, getting basic knowledge of crypto without getting overwhelmed.",
    tech: [reactjs, mongodb, chartjs, coingeko],
    texture: "/textures/project/project2.mp4",
    link: "https://crypton-786.netlify.app/",
  },
];

export default projects;
