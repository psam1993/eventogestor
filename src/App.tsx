import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen";
import Dashboard from "./pages/Dashboard";
import EventForm from "./pages/EventForm";
import GuestTypeForm from "./pages/GuestTypeForm";
// import GuestForm from "./pages/GuestForm";
import CheckinList from "./pages/CheckinList";
import { useState } from "react";
import { Button } from "./components/ui/button";
import Convidados from "./pages/Convidados";
import { supabase } from "../utils/supabase";
export default function App() {
  const [userType, setUserType] = useState<"cerimonial" | "convidado" | null>(null);

  if (!userType) {
    return <LoginScreen onLogin={setUserType} />;
  }

return (
  <BrowserRouter>
    <div className="min-h-screen bg-gray-50">
      <header className="p-4 bg-white shadow flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700">🎉 EventoGestor</h1>
        <nav className="flex gap-2 text-sm">
          <Button asChild>
            <Link to="/Dashboard">Dashboard</Link>
          </Button>
          <Button asChild>
            <Link to="/eventos">Eventos</Link>
          </Button>
          <Button asChild>
            <Link to="/tipos">Tipos</Link>
          </Button>
          <Button asChild>
            <Link to="/convidados">Convidados</Link>
          </Button>
          <Button asChild>
            <Link to="/checkin">Check-in</Link>
          </Button>
          <Button variant="outline" onClick={() => setUserType(null)}>Sair</Button>
        </nav>
      </header>


        <main className="p-4">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/eventos" element={<EventForm />} />
            <Route path="/tipos" element={<GuestTypeForm />} />
            <Route path="/convidados" element={<Convidados />} />
            <Route path="/checkin" element={<CheckinList />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
