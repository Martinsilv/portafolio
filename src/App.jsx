import "./App.css";

import { Inicio } from "./components/inicio.jsx";
import { Proyects } from "./components/proyects.jsx";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            background: "#18181b",
            color: "#fff",
            border: "1px solid #e3e3e3",
          },
        }}
      />
      <Inicio />

      <Proyects />
    </>
  );
}

export default App;
