import { Icon } from "@iconify-icon/react";

interface CardFavoriteProps {
  text: string;
  category: string;
  author: string;
  id: number;
  onRemove: (id: number) => void;
}

export default function CardFavorite({
  text,
  category,
  author,
  id,
  onRemove,
}: CardFavoriteProps) {
  return (
    <article
      className="border border-indigo-50 bg-indigo-950/30 rounded-lg p-4 mb-4 relative"
      key={id}
    >
      <Icon
        icon="mdi:close"
        width="20"
        height="20"
        className="text-indigo-50 hover:text-indigo-300 transition-all font-light absolute top-2 right-2 cursor-pointer"
        onClick={() => onRemove(id)}
      />
      <p className="text-base md:text-lg font-light italic text-white text-balance my-2 px-1">
        "{text}"
      </p>
      <p className="text-indigo-50 font-light italic text-xs my-2">
        - {author}
      </p>
      <span className="text-indigo-50 bg-indigo-500 text-sm text-center rounded-2xl px-4 py-1 my-1 inline-block">
        {category}
      </span>
    </article>
  );
}
