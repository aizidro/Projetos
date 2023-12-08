
const tbody = document.querySelector("tbody")
const thead = document.querySelector("thead")
const tdCount = thead.querySelectorAll("th").length
const modal = document.querySelector('.modal')
const nomeComercio = document.querySelector("#nome")
const endComercio = document.querySelector("#endereco")
const tellComercio = document.querySelector("#telefone")
const infoCategoria = document.querySelector("#categoria")
const fechar = document.querySelector("#x")
const rodape = document.querySelector(".rodape")
const lista = document.querySelector(".listar")
const form = document.querySelector(".form")
const avaliacao = document.querySelector('.formCriarAvaliacao')
const selectRestaurantes = document.querySelector('.restaurantes');

if(!localStorage.getItem('cliente')) {
    alert("Você deve estar logado!")
    top.location.href = "erro.html"
}

listar(tbody)

function detalhes(id) {
    modal.classList.toggle("oculto")
    lista.classList.toggle("oculto")
    fetch(`http://localhost:3000/restauranteInfo/${id}`)
        .then(info => {
            return info.json();
        })
        .then((data) => {
            const { message } = data;
            console.log(message);
            nomeComercio.textContent = message[0].nome
            endComercio.textContent = message[0].endereco
            tellComercio.textContent = message[0].telefone
            infoCategoria.textContent = message[0].categoria

            rodape.innerHTML = `
        <img src= "../../assets/update.png" alt="update" />
        <img src= "../../assets/delete.png" alt="delete" onclick="deletar('${message[0].id}')"/>
        `
        })
}

fechar.addEventListener("click", () => {
    modal.classList.toggle("oculto")
    lista.classList.add("oculto")
    form.classList.add("oculto")
    avaliacao.classList.add("oculto")
    rodape.innerHTML = ''
})

function abrirForm() {
    modal.classList.toggle("oculto")
    form.classList.toggle("oculto")
}

async function abrirAvaliacao(){
    modal.classList.toggle("oculto")
    avaliacao.classList.toggle('oculto')

    const restaurantes = await fetchRestaurantes()
    preencherSelect(selectRestaurantes, restaurantes)

}

const criarAvaliacao = async (e) => {
    e.preventDefault()
    const restauranteId = selectRestaurantes.value
    const nota = document.querySelector('.nota').value
    const descricao = document.querySelector('.descricao').value


    const resposta = await novaAvaliacao(restauranteId, nota, descricao)
    if(resposta.success == true) {
        alert('Avaliação realizada com sucesso!')
        window.location.reload()
    }
}

async function enviarDadosParaFuncaoCriar(e) {
    e.preventDefault()
    const nome = document.querySelector(".nomeInput")
    const categoria = document.querySelector(".categoria")
    const telefone = document.querySelector(".telefone")
    const endereco = document.querySelector(".endereco")
  
    const response = await criar(nome.value, categoria.value, telefone.value, endereco.value)
    console.log(response)
    if(response.success == true) {
        alert("Restaurante criado com sucesso")
        window.location.reload()
    }
}
avaliacao.addEventListener("submit", criarAvaliacao)
form.addEventListener("submit", enviarDadosParaFuncaoCriar)