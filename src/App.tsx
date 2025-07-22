import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>App {count}</h1>
			<Button onClick={() => setCount(count + 1)}>Button</Button>
		</>
	);
}

export default App;
