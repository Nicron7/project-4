type CardProps = {
  sentence: string;
  author: string;
};

const Card: React.FC<CardProps> = ({ sentence, author }) => {
  return (
    <div className="card bg-indigo-900 px-10 py-20 text-center shadow-lg">
      <h2 className="text-2xl font-medium text-indigo-50 mb-5 italic">
        "{sentence}"
      </h2>
      <p className="text-xl text-indigo-200 font-light">— {author}</p>
    </div>
  );
};

export default Card;
