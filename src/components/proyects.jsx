import { useEffect, useState } from "react";
import { TypewriterEffect } from "./ui/typeWriterEfect.jsx";
import { BackgroundBeams } from "./ui/background-beams";
import { DirectionAwareHover } from "./ui/DirectionAwareHover";
import AOS from "aos";
import "aos/dist/aos.css";
import { Tecnologys } from "./tecnologys";
import { Contact } from "./contact";
import imageTiendaWeb from "../assets/sakuramarket1.png";

import imageLandingPage from "../assets/estetica-libertad.png";
import imageLandingPage1 from "../assets/gym-libertad.png";
import imageBurguerMenu from "../assets/burguerMenu.png";

const proyectosData = [
  {
    title: "Tienda online: Sakura Market",
    image: imageTiendaWeb,
    link: "https://mrsakura-market.com/",
  },
  {
    title: "Landing page: Estetica Libertad",
    image: imageLandingPage,
    link: "https://estetica-libertad.vercel.app/",
  },
  {
    title: "Landing page: Gym",
    image: imageLandingPage1,
    link: "https://gym-libertad.vercel.app/",
  },
  {
    title: "Menu Interactivo",
    image: imageBurguerMenu,
    link: "https://burguer-menu-chi.vercel.app/",
  },
];

export const Proyects = () => {
  const [isVisible, setIsVisible] = useState(false);
  AOS.init();
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 50 && !isVisible) {
        setIsVisible(true);
      } else if (scrollPosition <= 50 && isVisible) {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  return (
    <div
      className={`relative min-h-screen overflow-hidden ${
        isVisible ? "transition-all duration-500 bg-zinc-950" : "bg-zinc-950"
      }`}
    >
      <BackgroundBeams className="absolute inset-0 opacity-30" />
      {isVisible && (
        <>
          <div className="mt-20" id="tecnologias">
            <Tecnologys />
          </div>

          <div
            className="relative flex flex-col items-center justify-center pt-28"
            id="proyectos"
          >
            <TypewriterEffect
              words={[{ text: "Proyectos" }]}
              className="text-8xl text-white font-mono"
              cursorClassName="bg-green-500"
            />
          </div>

          <div className="grid grid-cols-[1fr_1fr] grid-rows-[1fr_1fr] place-items-center m-28 gap-16">
            {proyectosData.map((proyecto, index) => (
              <div
                key={index}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-duration="600"
              >
                <a
                  href={proyecto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <DirectionAwareHover
                    imageUrl={proyecto.image}
                    className="shadow-lg md:w-full h-80 md:h-80"
                  >
                    <p className="text-lg font-semibold">{proyecto.title}</p>
                  </DirectionAwareHover>
                </a>
              </div>
            ))}
          </div>

          <Contact id="contacto" />
        </>
      )}
    </div>
  );
};
