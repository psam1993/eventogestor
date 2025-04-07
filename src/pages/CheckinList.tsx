import { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";

type Guest = {
  id: string;
  name: string;
  role: string;
  type: string;
  photo: string;
};

export default function CheckinList() {
  const [search, setSearch] = useState("");
  const [presences, setPresences] = useState<Record<string, boolean>>({});

  const guests: Guest[] = [
    { id: "1", name: "João Silva", role: "Governador", type: "Autoridade", photo: "https://via.placeholder.com/100" },
    { id: "2", name: "Maria Oliveira", role: "Jornalista", type: "Imprensa", photo: "https://via.placeholder.com/100" },
    { id: "3", name: "Pedro Souza", role: "Vereador", type: "Político", photo: "https://via.placeholder.com/100" },
  ];

  const togglePresence = (id: string) => {
    setPresences((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const normalize = (text: string) =>
    text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  const filtered = guests.filter((g) =>
    normalize(g.name).includes(normalize(search))
  );

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold">Credenciamento</h2>

      <Input
        placeholder="Buscar por nome do convidado..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((g) => (
          <Card key={g.id} className="p-4 shadow">
            <CardContent className="flex gap-4 items-center">
              <img
                src={g.photo}
                alt={`Foto de ${g.name}`}
                className="w-20 h-20 rounded-full border object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://via.placeholder.com/100";
                }}
              />
              <div>
                <h3 className="font-semibold text-lg flex items-center gap-1">
                  {g.name}
                  {presences[g.id] ? (
                    <CheckCircle className="text-green-500 w-4 h-4" />
                  ) : (
                    <XCircle className="text-red-400 w-4 h-4" />
                  )}
                </h3>
                <p className="text-sm">{g.role}</p>
                <p className="text-xs text-gray-500 italic">{g.type}</p>

                <Button
                  onClick={() => togglePresence(g.id)}
                  className="mt-2"
                >
                  {presences[g.id] ? "Confirmado" : "Confirmar Presença"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
