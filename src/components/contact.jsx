import { useRef, useState } from "react";
import { TypewriterEffect } from "./ui/typeWriterEfect.jsx";
import { BackgroundBeams } from "./ui/background-beams";

import RewardButton from "./ui/rewardButton";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a0etzdl",
        "template_pi5jt1n",
        form.current,
        "9kQ-UbE1ydNBQ05nu"
      )
      .then(() => {
        setAlert({
          show: true,
          type: "success",
          message: "¡Mensaje enviado con éxito!",
        });
        form.current.reset();
      })
      .catch(() => {
        setAlert({
          show: true,
          type: "error",
          message: "Hubo un error al enviar el mensaje.",
        });
      });

    // Oculta el mensaje después de 3 segundos
    setTimeout(() => setAlert({ show: false, type: "", message: "" }), 3000);
  };

  return (
    <div
      className="relative min-h-screen bg-zinc-950 overflow-hidden z-0"
      id="contacto"
    >
      <BackgroundBeams className="absolute inset-0 opacity-30" />

      <div className="relative z-10 flex flex-col items-center justify-center pt-28">
        <TypewriterEffect
          words={[{ text: "Contacto" }]}
          className="text-8xl text-white font-mono"
          cursorClassName="bg-green-500"
        />
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="relative z-10 max-w-2xl mx-auto mt-16 p-8 bg-zinc-900 bg-opacity-70 rounded-xl shadow-xl mb-20"
      >
        <div className="flex flex-col gap-6">
          <input
            type="text"
            name="user_name"
            placeholder="Tu nombre"
            required
            className="bg-transparent border border-gray-500 rounded-xl p-4 text-white focus:outline-none focus:border-white transition-all"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Tu correo"
            required
            className="bg-transparent border border-gray-500 rounded-xl p-4 text-white focus:outline-none focus:border-white transition-all"
          />
          <input
            type="text"
            name="subject"
            placeholder="Asunto"
            required
            className="bg-transparent border border-gray-500 rounded-xl p-4 text-white focus:outline-none focus:border-white transition-all"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Escribí tu mensaje..."
            required
            className="bg-transparent border border-gray-500 rounded-xl p-4 text-white focus:outline-none focus:border-white transition-all resize-none"
          />
          <RewardButton text="Enviar" />
        </div>
      </form>

      {/* 🔔 Alerta flotante */}
      {alert.show && (
        <div
          className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-xl text-white shadow-lg transition-all duration-300 ${
            alert.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {alert.message}
        </div>
      )}
    </div>
  );
};
