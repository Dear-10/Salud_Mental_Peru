import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Micasita } from "./screens/Micasita";

createRoot(document.getElementById("app") as HTMLElement).render(
  <Micasita />
);
