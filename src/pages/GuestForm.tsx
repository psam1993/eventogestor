
import { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
// import {Textarea } from "../components/ui/textarea";


export default function GuestForm() {
  const [guest, setGuest] = useState({
    name: "",
    photo: "",
    role: "",
    type: "",
    event: ""
  });

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4">
      <h2 className="text-2xl font-bold">Cadastro de Convidado</h2>
      <Input placeholder="Nome Completo" value={guest.name} onChange={e => setGuest({ ...guest, name: e.target.value })} />
      <Input placeholder="URL da Foto" value={guest.photo} onChange={e => setGuest({ ...guest, photo: e.target.value })} />
      <Input placeholder="Função / Cargo" value={guest.role} onChange={e => setGuest({ ...guest, role: e.target.value })} />
      <Input placeholder="Tipo de Convidado" value={guest.type} onChange={e => setGuest({ ...guest, type: e.target.value })} />
      <Input placeholder="Evento vinculado" value={guest.event} onChange={e => setGuest({ ...guest, event: e.target.value })} />
      <Button>Salvar Convidado</Button>
    </div>
  );
}
