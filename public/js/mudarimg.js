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
        textosolo.innerHTML = `<h1>Irmândade da Lebre Negra</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eligendi ex aspernatur magni inventore? Perspiciatis incidunt, quidem, dolore ipsam explicabo repellat veniam dolorum accusamus sint doloribus, rerum accusantium libero similique nemo obcaecati eum doloremque dignissimos consequuntur officiis! Officia, nesciunt quia!</p>`
        imagem.innerHTML = `<img src="assets/img/lebreNegraBoss.jpg" alt="imagem boss"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin orci non suscipit viverra. Pellentesque vel molestie orci, in tincidunt augue.</p>`
    }
    else if(qualImagem == 2){
        textosolo.innerHTML = `<h1>Rei das Marionetes</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eligendi ex aspernatur magni inventore? Perspiciatis incidunt, quidem, dolore ipsam explicabo repellat veniam dolorum accusamus sint doloribus, rerum accusantium libero similique nemo obcaecati eum doloremque dignissimos consequuntur officiis! Officia, nesciunt quia!</p>`
        imagem.innerHTML = `<img src="assets/img/PupeteerMelhordada.jpg" alt="imagem boss"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin orci non suscipit viverra. Pellentesque vel molestie orci, in tincidunt augue.</p>`
    }
    else if(qualImagem == 3){
        textosolo.innerHTML = `<h1>Champion Victor</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eligendi ex aspernatur magni inventore? Perspiciatis incidunt, quidem, dolore ipsam explicabo repellat veniam dolorum accusamus sint doloribus, rerum accusantium libero similique nemo obcaecati eum doloremque dignissimos consequuntur officiis! Officia, nesciunt quia!</p>`
        imagem.innerHTML = `<img src="assets/img/Champion_Victor_1.webp" alt="imagem boss"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin orci non suscipit viverra. Pellentesque vel molestie orci, in tincidunt augue.</p>`
    }
}