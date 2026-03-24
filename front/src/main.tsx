import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";

document.title = "MyMusc - Plataforma Musical";

const iconUrl = "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎵</text></svg>";
let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;

if (!link) {
  link = document.createElement("link");
  link.rel = "icon";
  document.head.appendChild(link);
}
link.href = iconUrl;

// Carregar scripts do Ionicons para o ícone de usuário funcionar
const scriptEsm = document.createElement("script");
scriptEsm.type = "module";
scriptEsm.src = "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";
document.head.appendChild(scriptEsm);

const scriptNoModule = document.createElement("script");
scriptNoModule.setAttribute("nomodule", "");
scriptNoModule.src = "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js";
document.head.appendChild(scriptNoModule);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />

    
  </React.StrictMode>
);