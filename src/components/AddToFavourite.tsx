import { Heart } from "./icons/Heart";

export default function AddToFavourite() {
  return (
    <button className="flex items-center justify-around bg-indigo-200 text-indigo-900 rounded-sm px-4 py-2">
      <Heart
        width={18}
        height={18}
        color="indigo"
        fill="none"
      />
      <span className="hidden sm:inline ml-2">Add to favorites</span>
    </button>
  );
}
