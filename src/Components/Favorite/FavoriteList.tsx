import { useState, useEffect } from "react";
import { Heart } from "../icons/Heart";
import CardFavorite from "./CardFavorite";
import ButtonFavorite from "./ButtonFavorite";

interface Quote {
	id: number;
	quote: string;
	author: string;
	category: "Motivation" | "Success" | "Life" | "Wisdom";
}

export default function FavoriteList() {
	const [closed, setClosed] = useState(false);
	const [favorites, setFavorites] = useState<Quote[]>([]);

  useEffect(() => {
    const getFavorites = localStorage.getItem("favorites");
    if (getFavorites) {
      setFavorites(JSON.parse(getFavorites));
    }
  }, []);

	return !closed ? (
		<aside className={`
          fixed top-0 right-0 h-screen w-full md:w-1/4 bg-indigo-950 border-l border-indigo-400 p-4
          transform transition-transform duration-600 ease-in-out
          ${closed ? "translate-x-full" : "translate-x-0"}
        `}>
			<section className="flex items-center justify-between mb-4 px-4 py-2">
				<Heart width={24} height={24} color="white" fill="none" />
				<h2 className="text-2xl font-light text-white">
					Favorites ({favorites.length}/5)
				</h2>
				<button
					className="text-indigo-100"
					onClick={() => setClosed(true)}
				>
					X
				</button>
			</section>
			<hr className="text-indigo-50 my-2" />
			<section className="py-2">
				{favorites.map((favorite) => (
					<CardFavorite
						key={favorite.id}
						text={favorite.quote}
						category={favorite.category}
						author={favorite.author}
						id={favorite.id}						
					/>
				))}
			</section>
		</aside>
	) : (
		<aside className="absolute top-2 right-2">
			<ButtonFavorite quantityFavorites={favorites.length} handleClick={() => setClosed(false)}	 />
		</aside>
	);
}
