import React from 'react';

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  attendees: number;
}

export default function EventCard({ title, date, location, attendees }: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="text-gray-600">
        <p className="mb-1">📅 {date}</p>
        <p className="mb-1">📍 {location}</p>
        <p>👥 {attendees} convidados</p>
      </div>
      <div className="mt-4 flex space-x-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Editar
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
          Detalhes
        </button>
      </div>
    </div>
  );
}