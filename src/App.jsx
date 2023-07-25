import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Aqui temos nosso componente do menu de navegação*/}
      <Navbar/>
      {/* Aqui temos a saída de onde irá ocorrer quando chamarmos nossas rotas */}
      <Outlet/>
    </div>
  );
}

export default App;
