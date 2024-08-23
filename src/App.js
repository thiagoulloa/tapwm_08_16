import logo from './logo.svg';
import './App.css';
import ListaProdutos from './Componentes/ListaProdutos';

const produtos = [{
  nome:"Roblox",
  preco: 29.99,
  },
  {
    nome:"Minecraft",
    preco: 60.00,
    },
];

function App() {
  return (
  <div>
    <h1>Lista Produtos</h1>
    <ListaProdutos produtos={produtos}/>
  </div>
  );
}

export default App;
