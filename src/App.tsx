import "./index.css";
import Layout from "./components/Layout";
import Filters from "./components/Filters";
import { Counter } from "./components/Counter";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import { useCallback } from "react";
import type { Quote } from "./components/Favorite/quote";
import FavoriteList from "./components/Favorite/FavoriteList";
import { AnimatePresence, motion } from "motion/react";

const quotes: Quote[] = [
  // --- Motivation ---

  {
    id: 1,
    quote:
      "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
    category: "Motivation",
  },
  {
    id: 2,
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    category: "Motivation",
  },
  {
    id: 3,
    quote: "Act as if what you do makes a difference. It does.",
    author: "William James",
    category: "Motivation",
  },
  {
    id: 4,
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
    category: "Motivation",
  },

  // --- Success ---
  {
    id: 5,
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "Success",
  },
  {
    id: 6,
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
    category: "Success",
  },
  {
    id: 7,
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
    category: "Success",
  },
  {
    id: 8,
    quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
    category: "Success",
  },

  // --- Life ---
  {
    id: 9,
    quote: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
    category: "Life",
  },
  {
    id: 10,
    quote: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
    category: "Life",
  },
  {
    id: 11,
    quote:
      "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
    category: "Life",
  },
  {
    id: 12,
    quote:
      "Keep your face always toward the sunshine—and shadows will fall behind you.",
    author: "Walt Whitman",
    category: "Life",
  },

  // --- Wisdom ---
  {
    id: 13,
    quote:
      "Happiness is not something ready-made. It comes from your own actions.",
    author: "Dalai Lama",
    category: "Wisdom",
  },
  {
    id: 14,
    quote:
      "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson",
    category: "Wisdom",
  },
  {
    id: 15,
    quote: "Dream big and dare to fail.",
    author: "Norman Vaughan",
    category: "Wisdom",
  },
];

function App() {
  const [count, setCount] = useState(0);
  const [randomQuote, setRandomQuote] = useState<Quote | null>(null);
  const [active, setActive] = useState("All");
  const [favourites, setFavourites] = useState<Quote[]>(() => {
    const stored = localStorage.getItem("favourites");
    return stored ? JSON.parse(stored) : [];
  });

  const filters = ["All", "Motivation", "Success", "Life", "Wisdom"];

  const handleCategoryChange = (category: string) => {
    setActive(category);
  };

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const handleAddToFavourite = (quote: Quote) => {
    setFavourites((prev) => {
      if (prev.length === 5) {
        return prev;
      } else {
        const isDuplicate = prev.some((fav) => fav.id === quote.id);
        return isDuplicate ? prev : [...prev, quote];
      }
    });
  };

  const handleRemoveFavourite = (id: number) => {
    setFavourites((prev) => prev.filter((fav) => fav.id !== id));
  };

  const pickRandomQuote = useCallback(() => {
    const filtered =
      active === "All" ? quotes : quotes.filter((q) => q.category === active);

    if (filtered.length > 0) {
      const random = filtered[Math.floor(Math.random() * filtered.length)];
      setRandomQuote(random);
    } else {
      setRandomQuote(null);
    }
  }, [active]);

  useEffect(() => {
    setCount(0);
    pickRandomQuote();
  }, []);

  useEffect(() => {
    setCount((c) => c + 1);
    pickRandomQuote();
  }, [active, pickRandomQuote]);

  return (
    <Layout>
      <FavoriteList
        favourites={favourites}
        onRemove={handleRemoveFavourite}
        isEmpty={favourites.length === 0}
        isFull={favourites.length === 5}
      />
      <div className="flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-50 mt-25 md:mt-10 mb-2">
          Quotes of the Day
        </h1>
        <p className="mb-10 text-indigo-300">Discover your daily motivation</p>
        <div className="flex flex-wrap gap-2 mb-4 justify-center">
          {filters.map((filter) => (
            <Filters
              key={filter}
              name={filter}
              active={filter === active}
              onClick={() => handleCategoryChange(filter)}
            />
          ))}
        </div>
        <Counter count={count} />

        <AnimatePresence>
          <motion.div>
            {randomQuote && (
              <motion.div
                key={randomQuote?.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card
                  quote={randomQuote.quote}
                  author={randomQuote.author}
                  id={randomQuote.id}
                  category={randomQuote.category}
                  setCount={setCount}
                  onNewQuote={pickRandomQuote}
                  onAddToFavourite={handleAddToFavourite}
                  isFull={favourites.length === 5}
                  onRemove={handleRemoveFavourite}
                  isFavourite={favourites.some(
                    (fav) => fav.id === randomQuote.id
                  )}
                />
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </Layout>
  );
}

export default App;
