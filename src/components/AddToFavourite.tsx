import { Icon } from "@iconify-icon/react";

type AddToFavouriteProps = {
  onClick: () => void;
};

export default function AddToFavourite({ onClick }: AddToFavouriteProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-around bg-indigo-200 text-indigo-900 rounded-sm px-4 py-2 cursor-pointer transition-all hover:bg-indigo-50 active:bg-indigo-400"
    >
      <Icon
        icon="mdi:cards-heart-outline"
        className="text-indigo-900 text-2xl sm:text-lg"
      />
      <span className="hidden sm:inline ml-2">Add to favorites</span>
    </button>
  );
}
