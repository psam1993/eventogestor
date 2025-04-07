
import { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

export default function GuestTypeForm() {
  const [type, setType] = useState({ name: "", priority: "", color: "#60a5fa" });

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4">
      <h2 className="text-2xl font-bold">Tipo de Convidado</h2>
      <Input placeholder="Nome do Tipo" value={type.name} onChange={e => setType({ ...type, name: e.target.value })} />
      <Input placeholder="Prioridade (opcional)" value={type.priority} onChange={e => setType({ ...type, priority: e.target.value })} />
      <label className="text-sm text-gray-700">Cor de destaque</label>
      <Input type="color" value={type.color} onChange={e => setType({ ...type, color: e.target.value })} />
      <Button>Salvar Tipo</Button>
    </div>
  );
}
