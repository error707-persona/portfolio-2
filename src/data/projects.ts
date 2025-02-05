import streamlit from "../assets/streamlit.png"
import seaborn from "../assets/seaborn.png"
import matplotlib from "../assets/Matplotlib.png"
import reactjs from "../assets/React.webp"
import mongodb from "../assets/mongodb.png"
import chartjs from "../assets/reactchartjs.png"
import coingeko from "../assets/CoinGecko_logo.png"
import firebase from "../assets/firebase.png"
import whatsappAnalysis from "../assets/whatsapp_analysis_logo.png"
import chatApp from "../assets/chatApp.png"
const projects = [
    {
        icon: whatsappAnalysis,
        title: "Whatsapp chat insights",
        description: "Consist of wordcloud, texts analysis of one user/all users, speech sentiment analysis, user activity based on daily and monthly timeline, link and emoji analysis, weekly activity map.",
        tech: [streamlit, seaborn, matplotlib],
        texture: '/textures/project/project1.mp4'
    },
    {   icon: "",
        title: "Crypto - A Crypto Currency app for crypto beginners",
        description: "Aim was to build a crypto beginner friendly site, getting basic knowledge of crypto without getting overwhelmed.",
        tech: [reactjs, mongodb, chartjs, coingeko],
        texture : '/textures/project/project2.mp4'
    },
    {   icon: chatApp,
        title: "ChatApp",
        description: "A simple serverless chat application where user can add people to chat with, create chatrooms, upload images, send emojis, send files",
        tech: [reactjs, firebase],
        texture: '/textures/project/project3.mp4'
    }];

export default projects;