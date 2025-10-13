import { useState, useEffect } from "react";
import ScrollLink from "./scrollLink";

export const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 500 && !isVisible) {
        setIsVisible(true);
      } else if (scrollPosition <= 500 && isVisible) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 flex justify-center items-center h-16 bg-blueDark  transition-transform duration-300 text-white z-50 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <ul className="flex justify-around w-full ">
        <li className="relative group hover:scale-110 transition-transform duration-100 cursor-pointer">
          <ScrollLink targetId="inicio">Inicio</ScrollLink>
          <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </li>

        <li className="relative group hover:scale-110 transition-transform duration-100 cursor-pointer">
          <ScrollLink targetId="acerca-de-mi">Acerca de mí</ScrollLink>
          <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </li>
        <li className="relative group hover:scale-110 transition-transform duration-100 cursor-pointer">
          <ScrollLink targetId="proyectos">Proyectos</ScrollLink>
          <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </li>
        <li className="relative group hover:scale-110 transition-transform duration-100 cursor-pointer">
          <ScrollLink targetId="tecnologias">Tecnologías</ScrollLink>
          <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </li>
        <li className="relative group hover:scale-110 transition-transform duration-100 cursor-pointer">
          <ScrollLink targetId="contacto">Contacto</ScrollLink>
          <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </li>
      </ul>
    </nav>
  );
};
