const Produto = ({ props }) => {
  return (
    <div>
      <h3>{props.nome}</h3>
      <p>Preço: {props.preco}</p>
    </div>
  );
};

export default Produto;
