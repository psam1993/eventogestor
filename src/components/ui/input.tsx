
export function Input({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className="border px-3 py-2 rounded w-full focus:ring focus:ring-blue-300" />;
}
