import { motion } from "framer-motion";
import imagen1 from "../assets/martin1.jpeg";
import { TypewriterEffect } from "./ui/typeWriterEfect.JSX";
import ScrollReveal from "./ui/title-efect";
import {
  Currency,
  Github,
  Linkedin,
  Mail,
  NotepadText,
  NotepadTextDashed,
  NotepadTextIcon,
  Paperclip,
} from "lucide-react";
import ActionButton from "../components/ui/actionButton.jsx";
import SoftSkillsSnippet from "./ui/code.jsx";

export const AboutMe = ({ sectionRef }) => {
  return (
    <div
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0b0424] via-zinc-950 to-zinc-950 py-12"
      id="acerca-de-mi"
    >
      {/* Contenido sobre fondo */}
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-center gap-40 p-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white max-w-xl"
        >
          <h2 className="text-4xl md:text-6xl  font-bold">Desarrollador</h2>
          <TypewriterEffect
            words={[{ text: "Front-end" }]}
            className="text-5xl md:text-7xl font-mono font-extrabold pb-8"
          />

          <ScrollReveal
            textClassName="mt-6 text-lg italic "
            enableBlur={true}
            baseOpacity={5}
            baseRotation={10}
            blurStrength={1.5}
          >
            Soy Martin Silva, desarrollador front-end de 24 años nacido en
            Argentina. Empecé de manera autodidacta en 2020 y desde entonces no
            paré de formarme.
          </ScrollReveal>
          {/*  <p className="mb-4 mt-6 text-lg italic">
            Me apasiona crear experiencias web modernas, accesibles y
            visualmente atractivas. Estoy constantemente aprendiendo y
            perfeccionando mis habilidades para mantenerme actualizado en el
            mundo del desarrollo.
          </p>
 */}
          <SoftSkillsSnippet />
        </motion.div>
        <div className="flex flex-col items-center gap-10">
          <motion.div
            whileHover={{ rotateY: 10, rotateX: 5 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="shadow-2xl rounded-full overflow-hidden w-72 h-72"
          >
            <img
              src={imagen1}
              alt="Imagen Martín"
              className="object-cover w-full h-full"
            />
          </motion.div>
          <div className="flex flex-row items-center gap-6 mt-4">
            <div className="flex gap-6">
              <a href="/Currículum-Martin-Silva1.pdf" download>
                <ActionButton
                  icon={<NotepadText size={26} color="black" strokeWidth={2} />}
                  label="Descargar CV"
                  color="bg-gray-200"
                />
              </a>
              <a
                href="https://github.com/Martinsilv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ActionButton
                  icon={<Github size={26} color="black" strokeWidth={2} />}
                  label="GitHub"
                  color="bg-gray-200"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/martin-silva-837762243"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ActionButton
                  icon={<Linkedin size={26} color="white" strokeWidth={2} />}
                  label="LinkedIn"
                  color="bg-blue-600"
                />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=martinsilva510@gmail.com&su=Contacto%20desde%20mi%20portfolio&body=Hola%20Martín"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ActionButton
                  icon={<Mail size={26} color="white" strokeWidth={2} />}
                  label="Email"
                  color="bg-red-500"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
