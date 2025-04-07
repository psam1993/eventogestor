
export function Card({ children, className = "" }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`rounded-lg border bg-white ${className}`}>{children}</div>;
}
export function CardContent({ children, className = "" }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}
