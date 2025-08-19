import { useState } from "react";
import { Button } from "./components/Button";
import Filters from "./components/Filters";
import { Counter } from "./components/Counter";

function App() {
  const [count, setCount] = useState(1);

  return (
		<>
      <Counter count={count}></Counter>
			<Button text={"boton"} setCount={setCount}></Button>
			<Button text={"boton"} setCount={setCount}></Button>
			<Button text={"boton"} setCount={setCount}></Button>
			<Filters name={"All"} />
		</>
	);
}

export default App;
