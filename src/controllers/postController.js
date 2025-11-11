function listarPostagens(req, res) {
    try {
        const { usuarioId, id, categoria } = req.query; 

        let postagens = [];
        if (id) {
            const postagem = postModel.buscarPorId(parseInt(id));
            if (!postagem) {
                //caso for uma busca por ID e não encontrar
                return res.render('pages/index', { error: 'Postagem não encontrada', postagens: [] });
            }
            postagens = [postagem];
        } else {
            // postModel que lista deve aceitar filtros (usuarioId e categoria)
            postagens = postModel.listar(usuarioId ? parseInt(usuarioId) : undefined, categoria); 
        }

        //retorna o resultado da busca
        res.render('pages/index', { postagens });
    } catch (error) {
        res.render('pages/erro', {
            postagens: [],
            error: 'Erro ao listar postagens: ' + error.message
        });
    }
}