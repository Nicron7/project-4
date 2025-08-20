import { AnimatePresence, motion } from "motion/react";
import AddToFavourite from "./AddToFavourite";
import { Button } from "./Button";

type CardProps = {
  quote: string;
  author: string;
  category: string;
  id: number;
  isFull: boolean;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  onNewQuote: () => void;
  onRemove: (id: number) => void;
  isFavourite: boolean;
  onAddToFavourite: (quote: {
    quote: string;
    author: string;
    category: string;
    id: number;
  }) => void;
};

const Card: React.FC<CardProps> = ({
  quote,
  author,
  category,
  id,
  setCount,
  onNewQuote,
  onAddToFavourite,
  onRemove,
  isFavourite,
  isFull,
}) => {
  const handleFavouriteClick = () => {
    if (isFavourite) {
      onRemove(id);
    } else {
      onAddToFavourite({ quote, author, category, id });
    }
  };
  return (
    <div className="card bg-indigo-900 p-8 text-center shadow-lg w-auto mx-auto md:w-190 max-w-[95%]">
      <motion.div
        layout
        className="flex items-center justify-center gap-2"
      >
        <AnimatePresence mode="popLayout">
          {!isFull && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <AddToFavourite
                onClick={handleFavouriteClick}
                isFavourite={isFavourite}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div layout>
          <Button
            setCount={setCount}
            onNewQuote={onNewQuote}
          />
        </motion.div>
      </motion.div>
      <h2 className="text-xl md:text-2xl font-medium text-indigo-50 my-6 italic">
        "{quote}"
      </h2>
      <p className="text-lg text-indigo-200 font-light mb-8">— {author}</p>
    </div>
  );
};

export default Card;
