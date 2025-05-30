import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ModalProvider } from "./shared/modal/ModalContext.tsx";
import { DataProvider } from "./shared/dataprovider/DataContext.tsx";
import ToastProvider from "./shared/toast/ToastContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastProvider>
      <ModalProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </ModalProvider>
    </ToastProvider>
  </StrictMode>
);
