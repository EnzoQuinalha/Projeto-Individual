let qualImagem = 1

function mudaresq() {
    // imagem = qualImagem == 1 ? link : qualImagem == 2 ? link2 : link3
    if(qualImagem == 1){
        qualImagem = 3
    }else{
        qualImagem--
    }
    conteudo()
    
}
function mudardir() {
    // imagem = qualImagem == 1 ? link : qualImagem == 2 ? link2 : link3
    if(qualImagem == 3){
        qualImagem = 1
    }else{
        qualImagem++
    }
    conteudo()
}

function conteudo(){
    let textosolo = document.getElementById('textsolo')
    let imagem = document.getElementById('textimg')

    if(qualImagem == 1){
        textosolo.innerHTML = `<h1>Irmândade da Lebre Negra</h1><p>Uma gangue de mercenários implacáveis que domina o Distrito de Malum. O combate é um verdadeiro teste de paciência e controle de grupo, onde o Irmão Mais Velho usa sua força bruta enquanto os irmãos menores entram na arena para aplicar efeitos de status e ataques rápidos pelas costas.</p>`
        imagem.innerHTML = `<img src="assets/img/lebreNegraBoss.jpg" alt="imagem boss"><p>O pesadelo do Distrito de Malum. Eles não lutam com honra, lutam para vencer.</p>`
    }
    else if(qualImagem == 2){
        textosolo.innerHTML = `<h1>Rei das Marionetes</h1><p>O mestre do Teatro de Ópera Estella. Esta luta é dividida em dois atos: primeiro, uma batalha contra um colosso mecânico de braços gigantes; depois, o confronto direto contra Romeo, uma figura ágil que utiliza ataques de fogo e uma foice devastadora, revelando a tragédia por trás das marionetes.</p>`
        imagem.innerHTML = `<img src="assets/img/PupeteerMelhordada.jpg" alt="imagem boss"><p>O espetáculo final na Grande Ópera. Um rei que busca proteger seu povo, mesmo em meio ao frenesi.</p>`
    }
    else if(qualImagem == 3){
        textosolo.innerHTML = `<h1>Champion Victor</h1><p>O ápice da "evolução" humana através do Ergo. Victor é um colosso de músculos que abandonou sua humanidade em busca de poder absoluto. No ringue da Grande Exposição, ele utiliza golpes de boxe e wrestling, representando a ambição perigosa de Simon Manus em criar um ser superior.</p>`
        imagem.innerHTML = `<img src="assets/img/Champion_Victor_1.webp" alt"imagem boss"><p>A força bruta personificada. Um campeão que trocou a alma pela imortalidade física.</p>`
    }
}