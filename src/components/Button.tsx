interface ButtonProps {
	text: string;
  setCount?: React.Dispatch<React.SetStateAction<number>>
  className?: string
}

export const Button = ({ text , setCount, className}: ButtonProps) => {

	return (
		<button onClick={() => setCount && setCount((count) => count + 1)} className="transition-all duration-200 px-4 py-2 rounded-lg cursor-pointer bg-transparent text-primary hover:bg-accent hover:text-accent-foreground hover:bg-amber-700 hover:text-white text-amber-700 ">
			{text}
		</button>
	);
};



