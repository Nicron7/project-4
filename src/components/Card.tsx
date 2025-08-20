type CardProps = {
  sentence: string;
  author: string;
};

const Card: React.FC<CardProps> = ({ sentence, author }) => {
  return (
    <div className="card bg-indigo-900 px-10 py-20 text-center">
      <h2 className="text-2xl font-bold text-indigo-50 mb-5">"{sentence}"</h2>
      <p className="text-xl text-white">-- {author}</p>
    </div>
  );
};

export default Card;
