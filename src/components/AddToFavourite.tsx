import { Icon } from "@iconify-icon/react";

type AddToFavouriteProps = {
  onClick: () => void;
  isFavourite: boolean;
};

export default function AddToFavourite({
  onClick,
  isFavourite,
}: AddToFavouriteProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-around bg-indigo-200 text-indigo-900 rounded-sm px-4 py-2 cursor-pointer transition-all hover:bg-indigo-50 active:bg-indigo-400 ${
        isFavourite
          ? "bg-indigo-400 hover:bg-indigo-300 border-indigo-800 text-indigo-950"
          : ""
      }`}
    >
      {isFavourite ? (
        <Icon
          icon="mdi:heart-off"
          className="text-indigo-950 text-base sm:text-lg"
        />
      ) : (
        <Icon
          icon="mdi:cards-heart-outline"
          className="text-indigo-900 text-base sm:text-lg"
        />
      )}
      <span className="hidden sm:inline ml-2">
        {isFavourite ? "Remove from favourites" : "Add to favourites"}
      </span>
    </button>
  );
}
