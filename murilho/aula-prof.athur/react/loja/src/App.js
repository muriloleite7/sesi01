import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <div className="containerda-loja">

        <Card nomeProduto={"Computador"} precoProduto={"R$ 20,00"} />

        <Card nomeProduto={"Celular"} precoProduto={"R$ 320,00"} />

        <Card nomeProduto={"Televisão"} precoProduto={"R$ 400,00"} />

      </div>
    </div>
  );
}

export default App;
