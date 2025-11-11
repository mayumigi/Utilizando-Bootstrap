let postagens = [
  {
    id: 1,
    conteudo: "Primeira postagem de exemplo",
    userId: 1,
    categoria: "Geral",
    data: new Date()
  }
];

// gera IDs automáticos
function gerarId() {
  return postagens.length > 0 ? postagens[postagens.length - 1].id + 1 : 1;
}

// lista todas as postagens, podendo filtrar por usuário ou categoria
function listar(usuarioId, categoria) {
  let resultado = [...postagens];

  if (usuarioId) {
    resultado = resultado.filter(p => p.userId === usuarioId);
  }

  if (categoria && categoria.trim() !== '') {
    resultado = resultado.filter(
      p => p.categoria && p.categoria.toLowerCase() === categoria.toLowerCase()
    );
  }

  return resultado;
}

// busca uma postagem específica pelo ID
function buscarPorId(id) {
  return postagens.find(p => p.id === id);
}

// cria uma nova postagem
function criar(conteudo, usuarioId, categoria) {
  const novaPostagem = {
    id: gerarId(),
    conteudo,
    userId: usuarioId,
    categoria: categoria || "Geral",
    data: new Date()
  };

  postagens.push(novaPostagem);
  return novaPostagem;
}

// atualiza uma postagem existente
function atualizar(id, conteudo, categoria) {
  const index = postagens.findIndex(p => p.id === id);
  if (index === -1) {
    throw new Error('Postagem não encontrada');
  }

  postagens[index].conteudo = conteudo;
  postagens[index].categoria = categoria || postagens[index].categoria;
  postagens[index].data = new Date(); // atualiza data
  return postagens[index];
}

// remove uma postagem
function remover(id) {
  const index = postagens.findIndex(p => p.id === id);
  if (index === -1) {
    throw new Error('Postagem não encontrada');
  }

  postagens.splice(index, 1);
  return true;
}

module.exports = {
  listar,
  buscarPorId,
  criar,
  atualizar,
  remover
};
