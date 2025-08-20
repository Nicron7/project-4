interface CounterProps {
  count: number;
}

export const Counter = ({ count }: CounterProps) => {
  return (
    <div className="bg-blue-500 text-white font-semibold px-2 py-2 rounded m-2">
      Quotes: {count}
    </div>
  );
}
