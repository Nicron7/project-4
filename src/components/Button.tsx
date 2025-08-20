import React from "react";

interface ButtonProps {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  onNewQuote: () => void;
}

export function Button({ setCount, onNewQuote }: ButtonProps) {
  const handleClick = () => {
    setCount((c) => c + 1);
    onNewQuote();
  };

  return (
    <button
      onClick={handleClick}
      className="bg-indigo-600 text-indigo-50 px-4 py-2 rounded transition-all cursor-pointer hover:bg-indigo-700"
    >
      New Quote
    </button>
  );
}
