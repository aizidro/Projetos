var tbody = document.querySelector("tbody")
var thead = document.querySelector("thead")
var tdCount = thead.querySelectorAll("th").length
const modal = document.querySelector ('.modal')
const nomeComercio = document.querySelector("#nome")
const endComercio = document.querySelector("#endereco")
const tellComercio = document.querySelector("#telefone")
const infoCategoria = document.querySelector("#categoria")
const fechar = document.querySelector("#x")
const rodape = document.querySelector(".rodape")

fetch ("http://localhost:3000/lista")
.then(info =>{
    return info.json()
})

.then(data =>{
    for(element of data ){
        let {id, restaurante, categoria, nota, alterar} = element

        let tr = document.createElement("tr")

        tr.innerHTML = `
        <td onclick= "detalhes(${id})">${restaurante}</td>
        <td>${categoria}</td>
        <td>${nota}</td>
        `

        tbody.appendChild(tr);
    }
})

function detalhes(id){
    modal.classList.toggle("oculto")
    fetch(`http://localhost:3000/restauranteInfo/${id}`)
    .then(info =>{
        return info.json();
    })
    .then((data) => {
        const {message} = data;
        console.log(message);
        nomeComercio.textContent = message[0].nome
        endComercio.textContent = message[0].endereco
        tellComercio.textContent = message[0].telefone
        infoCategoria.textContent = message[0].categoria

        rodape.innerHTML = `
        <img src= "../../assets/update.png" alt="update" />
        <img src= "../../assets/delete.png" alt="delete" />
        `
    })
}

fechar.addEventListener("click", () =>{
    modal.classList.toggle("oculto")
})
