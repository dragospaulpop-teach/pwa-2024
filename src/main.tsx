import { ThemeProvider } from "@/components/theme-provider.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="pwa-2024-ui-theme">
      <App />
    </ThemeProvider>
  </StrictMode>
);
