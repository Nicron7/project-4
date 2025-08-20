interface CounterProps {
  count: number;
}

export const Counter = ({ count }: CounterProps) => {
  return (
    <div className="fixed top-4 left-4 bg-indigo-900 text-white font-semibold px-2 py-2 rounded">
      Quotes: {count}
    </div>
  );
};
