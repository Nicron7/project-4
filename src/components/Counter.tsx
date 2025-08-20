interface CounterProps {
  count: number;
}

export const Counter = ({ count }: CounterProps) => {
  return (
    <div className="fixed text-sm md:text-base top-4 left-4 bg-indigo-900 text-white font-semibold px-4 py-2 rounded">
      Quotes: {count}
    </div>
  );
};
