import logo from "./logo.svg";
import "./App.css";
import Lista from "./Componentes/Lista";
import axios from "axios";
import React from "react";

// const produtos = [{
//   nome:"Roblox",
//   preco: 29.99,
//   },
//   {
//     nome:"Minecraft",
//     preco: 60.00,
//     },
// ];

function App() {
  const [produtos, setProdutos] = React.useState([]);

  React.useEffect(() => {
    getProdutos();
  }, []);

  async function getProdutos() {
    await axios
      .get("https://app-api-tapwm.onrender.com/api/produtos")
      .then((res) => {
        setProdutos(res.data);
        console.log(res.data);
      });
  }

  return (
    <div>
      <h1>Lista Produtos</h1>
      {produtos.map((p) => (
        <>
          <p>{p.nome}</p>
          <p>{p.preco}</p>
        </>
      ))}
    </div>
  );
}

export default App;
