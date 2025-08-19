import './index.css'
import Layout from './components/Layout';
import Filters from "./components/Filters";
import { Counter } from "./components/Counter";

function App() {

  return (
    <>
      <Layout>
        <h1 className="text-4xl font-bold text-white">Hello World</h1>
         <Filters name={"All"} />
      </Layout>
    </>
  )
}

export default App;
