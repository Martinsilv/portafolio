import "./App.css";
import { Toaster } from "react-hot-toast";

import { Inicio } from "./components/inicio.jsx";
import { Proyects } from "./components/proyects.jsx";

function App() {
  return (
    <>
      {/* Componente que muestra las notificaciones */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#333",
            color: "#fff",
          },
        }}
      />

      <Inicio />
      <Proyects />
    </>
  );
}

export default App;
