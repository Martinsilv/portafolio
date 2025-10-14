import { AnimatedTooltip } from "./ui/unimated-toolTip";
import htmlIcon from "../assets/html5-brands.svg";
import cssIcon from "../assets/css-3.png";
import jsicon from "../assets/javascript.png";
import reactIcon from "../assets/react-brands.svg";
import githubIcon from "../assets/github.png";
import tailwindIcon from "../assets/Tailwind-CSS.png";
import NPMIcon from "../assets/NPM.png";
import sassIcon from "../assets/Sass.png";
import gitIcon from "../assets/Git.png";
import bootstrapIcon from "../assets/Bootstrap.png";
import firebaseIcon from "../assets/Firebase.png";
import wordpressIcon from "../assets/wordpress.png";

import { TypewriterEffect } from "./ui/typeWriterEfect.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
export const Tecnologys = () => {
  AOS.init;
  const items = [
    {
      id: 1,
      name: "HTML5",
      designation: "",
      image: htmlIcon,
    },
    {
      id: 2,
      name: "CSS",
      designation: "",
      image: cssIcon,
    },
    {
      id: 3,
      name: "Javascript",
      designation: "",
      image: jsicon,
    },
    {
      id: 4,
      name: "React",
      designation: "",
      image: reactIcon,
    },
  ];
  const items2 = [
    {
      id: 5,
      name: "GitHub",
      designation: "",
      image: githubIcon,
    },
    {
      id: 6,
      name: "Git",
      designation: "",
      image: gitIcon,
    },
    {
      id: 7,
      name: "Tailwind",
      designation: "",
      image: tailwindIcon,
    },
    {
      id: 8,
      name: "Sass",
      designation: "",
      image: sassIcon,
    },
    {
      id: 9,
      name: "Bootstrap",
      designation: "",
      image: bootstrapIcon,
    },
    {
      id: 10,
      name: "Firebase",
      designation: "",
      image: firebaseIcon,
    },
    {
      id: 11,
      name: "NPM",
      designation: "",
      image: NPMIcon,
    },
    {
      id: 12,
      name: "Wordpress",
      designation: "",
      image: wordpressIcon,
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden" id="tecnologias">
      <div className="relative flex flex-col items-center justify-center ">
        <div className="text-5xl font-base text-white">Mis stack de</div>
        <TypewriterEffect
          words={[{ text: "Tecnologias" }]}
          className="text-9xl text-white font-mono  "
          cursorClassName="bg-green-500"
        />
      </div>

      <div
        className="flex justify-around my-20"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <AnimatedTooltip items={items} />
      </div>
      <div
        className="flex justify-around my-20 mx-5"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <AnimatedTooltip items={items2} />
      </div>
    </div>
  );
};
