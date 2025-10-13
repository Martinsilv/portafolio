import { useRef } from "react";
import { TypewriterEffect } from "./ui/typeWriterEfect.JSX";
import { BackgroundBeams } from "./ui/background-beams";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import RewardButton from "./ui/rewardButton";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a0etzd",
        "template_pi5jt1n",
        form.current,
        "9kQ-UbE1ydNBQ05nu"
      )
      .then(() => {
        toast.success("¡Mensaje enviado con éxito! ");
        form.current.reset();
      })
      .catch(() => {
        toast.error("Hubo un error al enviar el mensaje. ");
      });
  };

  return (
    <div
      className="relative min-h-screen bg-zinc-950 overflow-hidden z-0"
      id="contacto"
    >
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
    </div>
  );
};
