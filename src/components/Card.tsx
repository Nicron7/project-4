import AddToFavourite from "./AddToFavourite";

type CardProps = {
  sentence: string;
  author: string;
};

const Card: React.FC<CardProps> = ({ sentence, author }) => {
  return (
    <div className="card bg-indigo-900 px-10 py-15 text-center shadow-lg">
      <div className="flex items-center justify-center gap-2">
        <AddToFavourite />
        <p>PLACEHOLDER</p>
      </div>
      <h2 className="text-2xl font-medium text-indigo-50 my-6 italic">
        "{sentence}"
      </h2>
      <p className="text-xl text-indigo-200 font-light">— {author}</p>
    </div>
  );
};

export default Card;
