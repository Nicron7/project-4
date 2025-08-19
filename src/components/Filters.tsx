interface FiltersProps {
  name: string;
  active: boolean;
  onClick: () => void;
}

export default function Filters({
  name,
  active = false,
  onClick,
}: FiltersProps) {
  return (
    <button
      onClick={onClick}
      className={`font-medium inline-block px-4 py-2 rounded-lg cursor-pointer transition-all ${
        active
          ? "bg-indigo-600 text-indigo-100"
          : "text-indigo-600 hover:bg-indigo-600 hover:text-indigo-100"
      }`}
    >
      {name}
    </button>
  );
}
