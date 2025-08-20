import type { Quote } from "./Quote";

interface CardFavoriteProps {
	text: string;
	category: string;
	author: string;
    id: number;
}

export default function CardFavorite({ text, category, author,id }: CardFavoriteProps) {
    const handleDelete = (id: number) => {
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        const updatedFavorites = favorites.filter((favorite: Quote) => favorite.id !== id);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };

    return (
		<article className="border border-indigo-50 rounded-lg p-4 mb-4 relative" key={id}>	
                 <button className="text-indigo-50 font-light w-3 absolute top-0 right-2" onClick={() => handleDelete(id)}>x</button>		
				<p className="text-xl font-light italic text-white text-balance my-2 px-1">
					"{text}"
				</p>
                <p className="text-indigo-50 font-light italic text-xs my-2">- {author}</p>
				<span className="text-indigo-50 bg-indigo-500 text-sm text-center rounded-2xl px-4 py-1 my-1 inline-block">
					{category}
				</span>
		</article>
	);
}
