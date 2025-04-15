
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Benvenuto su RistoMatch</h1>
      <p>Trova lavoro nella ristorazione o personale stagionale.</p>
      <div style={{ marginTop: 20 }}>
        <Link to="/register">Registrati</Link> | <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

function Register() {
  return <div style={{ padding: 40 }}><h2>Registrazione</h2><p>In arrivo...</p></div>;
}

function Login() {
  return <div style={{ padding: 40 }}><h2>Login</h2><p>In arrivo...</p></div>;
}

function WorkersList({ isPremium }) {
  if (!isPremium) {
    return (
      <div style={{ padding: 40 }}>
        <h2>Lavoratori disponibili</h2>
        <p>Attiva l'accesso stagionale per visualizzare i profili.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: 40 }}>
      <h2>Lavoratori disponibili</h2>
      <ul>
        <li>Mario R. - Cameriere</li>
        <li>Giulia S. - Cuoca</li>
        <li>Antonio B. - Lavapiatti</li>
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/company/workers" element={<WorkersList isPremium={true} />} />
        <Route path="/company/workers-bloccato" element={<WorkersList isPremium={false} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
