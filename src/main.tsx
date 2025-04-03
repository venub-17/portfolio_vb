import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ModalProvider } from "./shared/modal/ModalContext.tsx";
import { DataProvider } from "./shared/dataprovider/DataContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ModalProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </ModalProvider>
  </StrictMode>
);
