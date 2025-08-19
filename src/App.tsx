import "./index.css";
import Layout from "./components/Layout";
import Filters from "./components/Filters";
import { Counter } from "./components/Counter";
import { Button } from "./components/Button";
import { useState } from "react";

function App() {
	const [quote, setQuote] = useState<number>(0);
	return (
		<>
			<Layout>
				<Counter count={quote} />
				<Button setCount={setQuote}>boton 1</Button>
				<Button setCount={setQuote}>boton 2</Button>
				<Button>boton 3</Button>
				<h1 className="text-4xl font-bold text-white">Hello World</h1>
				<Filters name={"All"} />
			</Layout>
		</>
	);
}

export default App;
