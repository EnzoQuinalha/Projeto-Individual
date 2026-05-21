var database = require("../database/config");


function publicar(idUsuario,idBoss,notaTier){
    console.log("ACESSEI O TIERLIST MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", idUsuario,idBoss,notaTier);
    var instrucaoSql = `
        INSERT INTO avaliacoes_tierlist (id_usuario, id_boss, nota) VALUES (${idUsuario}, ${idBoss}, ${notaTier});
    `
    console.log('EXECUTANDO A INSTRUÇÃO SQL:  \n' + instrucaoSql);
    return database.executar(instrucaoSql)
}


function listar(idUsuario){
    console.log("ACESSEI O TIERLIST MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", idUsuario);
    var instrucaoSql = `
        SELECT u.id, u.nome as usuario, b.nome as boss, avat.nota FROM usuario u JOIN avaliacoes_tierlist avat ON avat.id_usuario = u.id JOIN bosses b ON b.id = avat.id_boss WHERE u.id=${idUsuario};
    `
    console.log('EXECUTANDO A INSTRUÇÃO SQL:  \n' + instrucaoSql);
    return database.executar(instrucaoSql)
}

function listarTodos(){
    console.log("ACESSEI O TIERLIST MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ");
    var instrucaoSql = `
        SELECT b.nome as boss, ROUND(AVG(avat.nota), 1) as pontos, COUNT(avat.id_boss) as qtd_votos FROM bosses b JOIN avaliacoes_tierlist avat ON avat.id_boss = b.id GROUP BY b.nome ORDER BY pontos DESC, qtd_votos DESC;
    `

    console.log('EXECUTANDO A INSTRUÇÃO SQL:  \n' + instrucaoSql);
    return database.executar(instrucaoSql)
}
module.exports = {
    publicar,
    listar,
    listarTodos
}
