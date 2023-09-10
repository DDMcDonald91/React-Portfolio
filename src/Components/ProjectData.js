import * as All from './Images/';
import onyxblackmanhwa from "../Components/Images/onyxblackmanhwa.png"

export const ProjectData = [
    {
        title: "Onyx Black Manhwa", 
        text: "A front end app utilizing the Manga Scrapper API from Rapid API. Click the link to learn more.",
        skills: ["React", "Firebase", "Commerce JS", "Reactstrap"],
        demo: "https://onyxblackmanhwa.com/",
        image: onyxblackmanhwa
    },
    {
        title: "Kenzo AI", 
        text: "A fullstack app utilizing ChatGPT for content creators. Click the link to learn more.",
        skills: ["React", "Firebase", "Stripe", "Express"],
        demo: "https://trykenzoai.netlify.app/",
        image: All.kenzo,
    },
    {
        title: "Altered NWLA", 
        text: "A website created for a nonprofit organization based out of Shreveport, LA. Click the link to learn more.",
        skills: ["React", "Firebase", "Bootstrap", "PayPal API"],
        demo: "https://alterednwla.org",
        image: All.altered,
        github: null,
    },
    {
        title: "Cane Corso Resources", 
        text: "A blog website created using React and Google Firebase for the backend. Click the link to learn more.",
        skills: ["React", "Firebase", "Bootstrap"],
        demo: "https://canecorsoresources.netlify.app",
        image: All.ccr,
        github: "https://github.com/DDMcDonald91/Cane-Corso-Resources"
    },
    {
        title: "Blak Kontroller", 
        text: "A website created for finding free PC games. Click the link to learn more.",
        skills: ["React", "Axios", "Bootstrap"],
        demo: "https://blakkontroller.netlify.app",
        image: All.game,
        githubDisplay: "block",
        privateDisplay: "hidden",
        github: "https://github.com/DDMcDonald91/Game-App"
    },
]