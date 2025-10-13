import React, { useRef, useState, useEffect } from "react";
import { NavBar } from "./navBar";
import { AboutMe } from "./aboutMe";
import Loader from "./loader";

export const Inicio = () => {
  const [loading, setLoading] = useState(true);
  const inicioRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 segundos de loader

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Loader />
        </div>
      ) : (
        <>
          <NavBar />
          <AboutMe sectionRef={inicioRef} />
        </>
      )}
    </>
  );
};
