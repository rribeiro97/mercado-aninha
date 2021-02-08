const Home = () => {
  const listaDeProdutos = [
    {
      nomeDoProduto: "Café",
      preco: 4,
      estoque: 5,
    },
    {
      nomeDoProduto: "Suco",
      preco: 10,
      estoque: 2,
    },
    {
      nomeDoProduto: "Danone",
      preco: 8,
      estoque: 3,
    },
    {
      nomeDoProduto: "Arroz",
      preco: 30,
      estoque: 9,
    },
    {
      nomeDoProduto: "Feijão",
      preco: 20,
      estoque: 10,
    },
  ];

  const aumentaEstoque = (numeroDeUnidadesRecebidas) => {
    listaDeProdutos.map((produto) => {
      produto.estoque += numeroDeUnidadesRecebidas;
    });
  };

  const daDescontoParaLojaInteira = (numeroEmReiasDeDesconto) => {
    listaDeProdutos.map((valorDoProduto) => {});
  };

  const aumentarPrecoPorcentagem = (porcentagemAumento) => {
    listaDeProdutos.map((produto) => {
      produto.preco *= 1 + porcentagemAumento / 100;
    });
  };

  debugger;
  aumentarPrecoPorcentagem(100);
  return (
    <div className="Home">
      <h1> Mercado da Aninha </h1>
    </div>
  );
};

export default Home;
