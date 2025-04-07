
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent } from "../components/ui/card";

export default function LoginScreen({ onLogin }: { onLogin: (type: 'cerimonial' | 'convidado') => void }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!code.trim()) {
      setError("Por favor, insira o código.");
    } else {
      onLogin("convidado");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-green-100">
      <Card className="max-w-md w-full shadow-md">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-bold text-center text-blue-700">Bem-vindo ao EventoGestor</h2>
          <Input placeholder="Digite seu código" value={code} onChange={(e) => setCode(e.target.value)} />
          {error && <p className="text-sm text-red-500">{error}</p>}
          <Button className="w-full" onClick={handleLogin}>Marcar presença como convidado</Button>
          <div className="border-t pt-4">
            <p className="text-center text-sm text-gray-500 mb-2">Ou</p>
            <Button variant="outline" className="w-full" onClick={() => onLogin("cerimonial")}>Entrar como Cerimonial</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
