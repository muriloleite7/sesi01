import "./Card.css";

function Card({ nomeProduto, precoProduto }) {
    return (
        <div className="container-card">
            <h1 className="tProduto">Nome do Produto: {nomeProduto}</h1>
            <p className="pProduto">Preço do Produto: {precoProduto}</p>
            <button type="button">Comprar</button>
        </div>
    )
}

export default Card;
