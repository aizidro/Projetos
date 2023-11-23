var tbody = document.querySelector("tbody")
var thead = document.querySelector("thead")
var tdCount = thead.querySelectorAll("th").length
const modal = document.querySelector ('.modal')

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
        tr.addEventListener("click", () => {
            console.log(id);
        })

        tbody.appendChild(tr);
    }
})

function detalhes(id){
    modal.classList.toggle("oculto")
    fetch(`http://localhost:3000/listaInfo/${id}`)
    .then(info =>{
        return info.json();
    })
    .then((data) => {
        console.log(data);
    })
}