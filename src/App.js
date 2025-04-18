
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import WorkersList from "./WorkersList";

function Home() {
  return (
    <div style={{ padding: "60px 20px", textAlign: "center", background: "#fff" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: 10 }}>Benvenuto su RistoMatch</h1>
      <p style={{ maxWidth: 500, margin: "0 auto 30px", color: "#555" }}>
        Trova lavoratori stagionali o candidati per ristoranti e locali in pochi clic.
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <Link to="/company/workers">
          <button style={{ padding: "12px 24px", background: "#0070f3", color: "#fff", border: "none", borderRadius: 5 }}>
            Ristoratore
          </button>
        </Link>
        <Link to="/company/workers-bloccato">
          <button style={{ padding: "12px 24px", background: "#666", color: "#fff", border: "none", borderRadius: 5 }}>
            Simula accesso bloccato
          </button>
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company/workers" element={<WorkersList isPremium={true} />} />
        <Route path="/company/workers-bloccato" element={<WorkersList isPremium={false} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
