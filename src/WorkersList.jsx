
import React, { useState } from "react";

const mockWorkers = [
  { name: "Mario R.", role: "Cameriere", availability: "Oggi", location: "Ragusa" },
  { name: "Giulia S.", role: "Cuoca", availability: "Domani", location: "Modica" },
  { name: "Antonio B.", role: "Lavapiatti", availability: "Questa settimana", location: "Scicli" },
];

export default function WorkersList({ isPremium }) {
  const [filter, setFilter] = useState("");

  const filteredWorkers = mockWorkers.filter(w =>
    !filter || w.role.toLowerCase().includes(filter.toLowerCase())
  );

  if (!isPremium) {
    return (
      <div style={{ padding: 40, textAlign: 'center' }}>
        <h2>Lavoratori disponibili</h2>
        <p>Attiva l'accesso stagionale per visualizzare i profili.</p>
        <button style={{ marginTop: 20, padding: '10px 20px', background: '#ffc107', border: 'none', borderRadius: 4 }}>
          Attiva adesso
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: 40 }}>
      <h2 style={{ marginBottom: 20 }}>Lavoratori disponibili</h2>
      <input
        type="text"
        placeholder="Filtra per ruolo (es. cameriere)"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ marginBottom: 20, padding: 10, width: '100%', maxWidth: 400 }}
      />
      {filteredWorkers.map((worker, index) => (
        <div key={index} style={{
          background: '#fff', padding: 20, marginBottom: 15, borderRadius: 8,
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
        }}>
          <h3>{worker.name}</h3>
          <p><strong>Ruolo:</strong> {worker.role}</p>
          <p><strong>Disponibilità:</strong> {worker.availability}</p>
          <p><strong>Località:</strong> {worker.location}</p>
          <button style={{ marginTop: 10, padding: '8px 16px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: 4 }}>
            Contatta
          </button>
        </div>
      ))}
    </div>
  );
}
