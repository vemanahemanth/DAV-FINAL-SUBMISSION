import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { setBaseUrl } from "@workspace/api-client-react";

// In production, point to the deployed API server URL.
// In development, leave empty so Vite's proxy handles /api/* → localhost:5001
const apiUrl = import.meta.env.VITE_API_URL || "";
if (apiUrl) setBaseUrl(apiUrl);

createRoot(document.getElementById("root")!).render(<App />);
