
//import { Card, CardContent } from "../components/ui/card";

// export default function Dashboard() {
//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Painel do Evento</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <Card><CardContent>🎯 Evento Atual</CardContent></Card>
//         <Card><CardContent>✅ Confirmados</CardContent></Card>
//         <Card><CardContent>👥 Total de Convidados</CardContent></Card>
//       </div>
//     </div>
//   );
// }

import EventCard from '../components/ui/EventCard';

export default function Dashboard() {
  const upcomingEvents = [
    {
      title: 'Conferência Tech 2024',
      date: '15/03/2024',
      location: 'Centro de Convenções',
      attendees: 150,
    },
    {
      title: 'Workshop de Inovação',
      date: '20/03/2024',
      location: 'Auditório Principal',
      attendees: 50,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Total de Eventos</h3>
            <p className="text-3xl font-bold text-blue-600">8</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Convidados Totais</h3>
            <p className="text-3xl font-bold text-green-600">245</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Eventos Hoje</h3>
            <p className="text-3xl font-bold text-purple-600">2</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Próximos Eventos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {upcomingEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
}
