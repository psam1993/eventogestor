import { useState } from 'react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

interface GuestFormProps {
  onSave: (guest: {
    name: string;
    photo: string;
    role: string;
    type: string;
    event: string;
    email?: string;
  }) => void;
}

export default function GuestForm({ onSave }: GuestFormProps) {
  const [guest, setGuest] = useState({
    name: "",
    photo: "",
    role: "",
    type: "",
    event: "",
    email: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    if (!guest.name || !guest.type || !guest.event) {
      setError("Preencha todos os campos obrigatórios.");
      return;
    }
    setError("");
    setSuccess(true);
    onSave(guest);
  };

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold">Cadastro de Convidado</h2>
      <Input placeholder="Nome Completo*" value={guest.name} onChange={e => setGuest({ ...guest, name: e.target.value })} />
      <Input placeholder="E-mail (opcional)" value={guest.email} onChange={e => setGuest({ ...guest, email: e.target.value })} />
      <Input placeholder="URL da Foto" value={guest.photo} onChange={e => setGuest({ ...guest, photo: e.target.value })} />
      <Input placeholder="Função / Cargo" value={guest.role} onChange={e => setGuest({ ...guest, role: e.target.value })} />
      <Input placeholder="Tipo de Convidado*" value={guest.type} onChange={e => setGuest({ ...guest, type: e.target.value })} />
      <Input placeholder="Evento vinculado*" value={guest.event} onChange={e => setGuest({ ...guest, event: e.target.value })} />

      {error && <p className="text-sm text-red-500">{error}</p>}
      {success && <p className="text-sm text-green-600">Convidado cadastrado com sucesso!</p>}

      <Button onClick={handleSubmit}>Salvar Convidado</Button>
    </div>
  );
}