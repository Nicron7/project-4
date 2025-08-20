interface CounterProps {
  count: number;
}

export const Counter = ({ count }: CounterProps) => {
  return (
    <div className="fixed top-2 left-2 bg-indigo-900 text-white font-semibold px-2 py-2 rounded m-2">
      Quotes: {count}
    </div>
  );
}
