import AddToFavourite from "./AddToFavourite";
import { Button } from "./Button";

type CardProps = {
  sentence: string;
  author: string;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  onNewQuote: () => void;
};

const Card: React.FC<CardProps> = ({
  sentence,
  author,
  setCount,
  onNewQuote,
}) => {
  return (
    <div className="card bg-indigo-900 p-8 text-center shadow-lg">
      <div className="flex items-center justify-center gap-2">
        <AddToFavourite />
        <Button
          setCount={setCount}
          onNewQuote={onNewQuote}
        />
      </div>
      <h2 className="text-2xl font-medium text-indigo-50 my-6 italic">
        "{sentence}"
      </h2>
      <p className="text-lg text-indigo-200 font-light mb-8">— {author}</p>
    </div>
  );
};

export default Card;
