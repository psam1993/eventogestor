import React from 'react';
import GuestList from '../components/GuestList';

export default function Convidados() {
  const guests = [
    {
      id: '1',
      name: 'João Silva',
      email: 'joao@email.com',
      status: 'confirmed' as const
    },
    {
      id: '2',
      name: 'Maria Santos',
      email: 'maria@email.com',
      status: 'pending' as const
    },
    {
      id: '3',
      name: 'Pedro Oliveira',
      email: 'pedro@email.com',
      status: 'cancelled' as const
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Lista de Convidados</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Adicionar Convidado
        </button>
      </div>

      <GuestList guests={guests} />
    </div>
  );
}