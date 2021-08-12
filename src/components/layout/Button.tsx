type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
};

export default function Button({ text, onClick, className }: ButtonProps) {
  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className={`inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${className}`}
      >
        {text}
      </button>
    </>
  );
}
