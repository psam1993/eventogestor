
import { useState } from "react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";

export default function EventForm() {
  const [event, setEvent] = useState({
    name: "",
    datetime: "",
    location: "",
    responsible: "",
    notes: ""
  });

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4">
      <h2 className="text-2xl font-bold">Cadastro de Evento</h2>
      <Input placeholder="Nome do Evento" value={event.name} onChange={e => setEvent({ ...event, name: e.target.value })} />
      <Input type="datetime-local" value={event.datetime} onChange={e => setEvent({ ...event, datetime: e.target.value })} />
      <Input placeholder="Local" value={event.location} onChange={e => setEvent({ ...event, location: e.target.value })} />
      <Input placeholder="Responsável" value={event.responsible} onChange={e => setEvent({ ...event, responsible: e.target.value })} />
      <Textarea placeholder="Observações" value={event.notes} onChange={e => setEvent({ ...event, notes: e.target.value })} />
      <Button>Salvar Evento</Button>
    </div>
  );
}
