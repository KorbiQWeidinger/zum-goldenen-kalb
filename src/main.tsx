import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: "de",
    lng: "de",
    supportedLngs: ["de", "en"],
    debug: true,
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
