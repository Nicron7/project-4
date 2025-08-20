import { Heart } from "../icons/Heart";

interface ButtonFavoriteProps {
  quantityFavorites: number;
  handleClick: () => void;
}

export default function ButtonFavorite({
  quantityFavorites,
  handleClick,
}: ButtonFavoriteProps) {
  return (
    <button
      className="flex items-center justify-around cursor-pointer bg-indigo-200 border border-indigo-600 text-indigo-900 rounded-sm px-4 py-2 transition-all hover:bg-indigo-50"
      onClick={handleClick}
    >
      <Heart
        width={18}
        height={18}
        color="var(--color-indigo-900)"
        fill="none"
      />
      <span className="hidden sm:inline ml-2">Favorites</span>
      <span className="ml-1">({quantityFavorites}/5)</span>
    </button>
  );
}
