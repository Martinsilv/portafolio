export default function SoftSkillsSnippet() {
  return (
    <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden w-full max-w-2xl mx-auto font-mono text-sm">
      {/* Barra superior estilo Mac */}
      <div className="flex items-center gap-2 px-3 py-2 bg-gray-800">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>

      {/* Contenido del código */}
      <pre className="text-green-400 p-4 overflow-x-auto">
        <code>
          <span className="text-purple-400">const</span>{" "}
          <span className="text-blue-400">habilidadesBlandas</span>{" "}
          <span className="text-white">=</span>{" "}
          <span className="text-white">[</span>
          {"\n  "}
          <span className="text-green-400">"Comunicación clara"</span>,{" "}
          <span className="text-green-400">"Trabajo en equipo"</span>,{"\n  "}
          <span className="text-green-400">"Proactividad"</span>,{" "}
          <span className="text-green-400">"Adaptabilidad"</span>,{" "}
          <span className="text-green-400">"Aprendizaje continuo"</span>,
          {"\n  "}
          <span className="text-green-400">"Gestión del tiempo"</span>,{" "}
          <span className="text-green-400">"Creatividad"</span>
          {"\n"}
          <span className="text-white">];</span>
        </code>
      </pre>
    </div>
  );
}
