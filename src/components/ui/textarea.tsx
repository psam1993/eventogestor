export function Textarea
(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) { 

    return <textarea {...props} className='border rounded px-3 py-2 w-full min-h-[100px]' />; }