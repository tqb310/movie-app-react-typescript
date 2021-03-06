import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Router>
    <App />
  </Router>
  // </React.StrictMode>
);
