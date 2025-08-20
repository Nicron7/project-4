import "./index.css";
import Layout from "./components/Layout";
import Filters from "./components/Filters";
import { Counter } from "./components/Counter";
import { Button } from "./components/Button";
import { useEffect, useState } from "react";
import Card from "./components/Card";

interface Quote {
  quote: string;
  author: string;
  category: string;
}

const quotes: Quote[] = [
  // --- Motivation ---
  {
    quote:
      "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
    category: "Motivation",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    category: "Motivation",
  },
  {
    quote: "Act as if what you do makes a difference. It does.",
    author: "William James",
    category: "Motivation",
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
    category: "Motivation",
  },

  // --- Success ---
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "Success",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
    category: "Success",
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
    category: "Success",
  },
  {
    quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
    category: "Success",
  },

  // --- Life ---
  {
    quote: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
    category: "Life",
  },
  {
    quote: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
    category: "Life",
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
    category: "Life",
  },
  {
    quote:
      "Keep your face always toward the sunshine—and shadows will fall behind you.",
    author: "Walt Whitman",
    category: "Life",
  },

  // --- Wisdom ---
  {
    quote:
      "Happiness is not something ready-made. It comes from your own actions.",
    author: "Dalai Lama",
    category: "Wisdom",
  },
  {
    quote:
      "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson",
    category: "Wisdom",
  },
  {
    quote: "Dream big and dare to fail.",
    author: "Norman Vaughan",
    category: "Wisdom",
  },
];

function App() {
  const [count, setCount] = useState(0);
  const [quote, setQuote] = useState(quotes[0]);
  const [randomQuote, setRandomQuote] = useState(null);
  const [category, setCategory] = useState("Motivation");
  const [active, setActive] = useState("All");

  const filters = ["All", "Motivation", "Success", "Life", "Wisdom"];

  const filteredQuotes =
    active === "All" ? quotes : quotes.filter((q) => q.category === active);

  const singleQuote = filteredQuotes[0];

  const handleCategoryChange = (category: string) => {
    setActive(category);
  };

  const pickRandomQuote = () => {
    const filtered =
      active === "All" ? quotes : quotes.filter((q) => q.category === active);

    if (filtered.length > 0) {
      const random = filtered[Math.floor(Math.random() * filtered.length)];
      setRandomQuote(random);
    } else {
      setRandomQuote(null);
    }
  };

  useEffect(() => {
    pickRandomQuote();
  }, [active]);

  return (
    <Layout>
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-bold text-indigo-50 mt-10">
          Quotes of the Day
        </h1>
        <p className="mb-10 text-indigo-300">Discover your daily motivation</p>
        <div className="flex gap-2 mb-4">
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

        {randomQuote && (
          <Card
            sentence={randomQuote.quote}
            author={randomQuote.quote}
          />
        )}
        <Button setCount={setCount} />
      </div>
    </Layout>
  );
}

export default App;
