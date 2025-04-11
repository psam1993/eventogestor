import React, { useState } from 'react';
import GuestForm from "./GuestForm";
import GuestList from '../components/ui/GuestList';

interface Guest {
  id: string;
  name: string;
  email: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}

export default function Convidados() {
  const [showForm, setShowForm] = useState(false);
  const [guests, setGuests] = useState<Guest[]>([{
    id: '1', name: 'João Silva', email: 'joao@email.com', status: 'confirmed'
  }, {
    id: '2', name: 'Maria Santos', email: 'maria@email.com', status: 'pending'
  }, {
    id: '3', name: 'Pedro Oliveira', email: 'pedro@email.com', status: 'cancelled'
  }]);

  const handleAddGuest = (newGuest: Guest) => {
    setGuests(prev => [...prev, { ...newGuest, id: Date.now().toString(), status: 'pending' }]);
    setShowForm(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Lista de Convidados</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Fechar Formulário' : 'Adicionar Convidado'}
        </button>
      </div>

      {showForm && <GuestForm onSave={handleAddGuest} />}

      <GuestList guests={guests} />
    </div>
  );
}