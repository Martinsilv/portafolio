import {
  Github,
  Linkedin,
  Mail,
  Heart,
  ExternalLink,
  Code,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Martinsilv",
      color: "hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "www.linkedin.com/in/martin-silva-837762243",
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:martinsilva510@gmail.com",
      color: "hover:text-red-400",
    },
  ];

  const technologies = [
    "React",
    "Tailwind CSS",
    "JavaScript",
    "HTML5",
    "CSS3",
    "WordPress",
  ];

  return (
    <footer className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-t border-zinc-800">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-bold text-white">Martin Silva</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              desarrollador Front-end
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Navegación</h4>
            <ul className="space-y-2">
              {[
                "Inicio",
                "acerca-de-mi",
                "proyectos",
                "tecnologias",
                "contacto",
              ].map((link) => {
                const targetId = link.toLowerCase().replace(" ", "-");
                return (
                  <li key={link}>
                    <a
                      href={`#${targetId}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById(targetId);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link}
                      </span>
                      <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Technologies */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Tecnologías</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-zinc-800 text-gray-300 text-xs rounded-full border border-zinc-700 hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-1 text-gray-400 text-sm">
            <span>© {currentYear} Tu Nombre. Hecho con</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>usando React & Tailwind CSS</span>
          </div>

          <div className="text-gray-400 text-sm">
            <span className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">
              Disponible para nuevos proyectos
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
