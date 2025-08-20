import React from "react";

interface ButtonProps {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  onNewQuote: () => void;
}

export function Button({ setCount, onNewQuote }: ButtonProps) {
  const handleClick = () => {
    setCount((c) => c + 1);  // Incrementa contador
    onNewQuote();            // Genera nueva cita
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
    >
      New Quote
    </button>
  );
}
