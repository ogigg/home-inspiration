import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./src/assets/i18n/en.json";

// TODO: Add more languages here
const resources = {
  en,
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
