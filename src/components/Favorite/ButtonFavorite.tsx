import { Icon } from "@iconify-icon/react";

interface ButtonFavoriteProps {
  quantityFavorites: number;
  handleClick: () => void;
  isFull: boolean;
}

export default function ButtonFavorite({
  quantityFavorites,
  handleClick,
  isFull,
}: ButtonFavoriteProps) {
  return (
    <button
      className={`flex items-center justify-around cursor-pointer bg-indigo-200 border border-indigo-600 text-indigo-900 rounded-sm px-4 py-2 transition-all hover:bg-indigo-50 ${
        isFull ? "bg-indigo-400 hover:bg-indigo-200 border-indigo-800" : ""
      }`}
      onClick={handleClick}
    >
      {isFull ? (
        <Icon
          icon="mdi:cards-heart"
          className="text-indigo-900 text-2xl sm:text-lg"
        />
      ) : (
        <Icon
          icon="mdi:cards-heart-outline"
          className="text-indigo-900 text-2xl sm:text-lg"
        />
      )}
      <span className="hidden text-sm md:text-base sm:inline ml-2">
        Favorites
      </span>
      <span className="ml-1 text-sm md:text-base">({quantityFavorites}/5)</span>
    </button>
  );
}
