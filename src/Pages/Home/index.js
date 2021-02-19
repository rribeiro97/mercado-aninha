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
  // Difereça entre função e função()
  // const funcao = aumentaEstoque;
  // const retornoDaFuncao = aumentaEstoque();
  // const retornoDaFuncaoCopiada = funcao();
  // const copiaDaCopia = funcao;

  // 0
  const daDescontoParaLojaInteira = (numeroEmReiasDeDesconto) => {
    listaDeProdutos.map((valorDoProduto) => {});
  };

  // 1
  const nomeTodosProdutosDisponiveis = (nomesDosProdutos) => {
    listaDeProdutos.map(nomeProd => {
      nomeProd.nomeDoProduto += nomesDosProdutos;
    });
  };

  // 2
  const aumentarPrecoPorcentagem = (porcentagemAumento) => {
    listaDeProdutos.map(produto => {
      produto.preco *= 1 + porcentagemAumento / 100;
    });
  };

  // 3
  // const precoMaiorQueVinte = (valorMaiorVinte) => {
  //   listaDeProdutos.filter(valor => {
  //     valor.preco > 20;
  //   });
  // };

  // 4
  const encontrarProdutoApartirDeSeuNome = (nomeDoProdutoPesquisado) => {
    const produtoEncontrado = listaDeProdutos.find(produto = produto.nomeDoProduto === nomeDoProdutoPesquisado);
    return produtoEncontrado;
  } 
  // const itemQuePediParaRicardo = coisasProRicardoEncontrar.find(itensDeMadeira = itensDeMadeira.nome === 'violão');


  debugger;
  aumentarPrecoPorcentagem(100);
  const produtoEncontrado = encontrarProdutoApartirDeSeuNome('Danone');
  console.log(produtoEncontrado);
  return (
    <div className="Home">
      <h1> Mercado da Aninha </h1>
    </div>
  );
};

export default Home;


// 0a Missão Criar uma função que dá desconto em reais todos items - OK
/* 1a Missão Criar um array com o nome de todos os produtos disponíveis no mercado.(Map) */
/* 2a Missão Aumentar o preço de todos os itens em x%, mostrando o índice do item no array - OK */ 
/* 3a Missão Criar um array com itens que custam mais que 20 R$ (filter) */
/* 4a Missão Devolver um item a partir de seu nome (find)*/
// 5a Alterar o estoque de um item (find)
// 6a Alterar o dado de um item (find)
/* 7a Missão Saber quantos R$ valem todos os produtos. */