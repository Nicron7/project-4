interface CounterProps {
    count: number
}

export const Counter = ({ count }: CounterProps) => {
  return <div>Quotes: {count}</div>;
}

