
import { Card, CardContent } from "../components/ui/card";

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Painel do Evento</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card><CardContent>🎯 Evento Atual</CardContent></Card>
        <Card><CardContent>✅ Confirmados</CardContent></Card>
        <Card><CardContent>👥 Total de Convidados</CardContent></Card>
      </div>
    </div>
  );
}

