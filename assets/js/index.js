const botao = document.getElementById('botao');

async function buscarConselhos() {
    const url = "https://api.adviceslip.com/advice";
    const response = await fetch(url);
    return await response.json()
}

async function criarConselho(){
    const conselhos = await buscarConselhos();
    const idConselho = await conselhos.slip.id;
    const textConselho = await conselhos.slip.advice;
    document.getElementById('message').innerHTML = textConselho;
    document.getElementById('id-conselho').innerHTML = idConselho;
}

criarConselho()

botao.addEventListener("click", function(){
    criarConselho()
})


