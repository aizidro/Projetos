const listar = (tbody) => {
    console.log("listar");
    fetch("http://localhost:3000/lista")
        .then(info => {
            return info.json()
        })

        .then(data => {
            for (element of data) {
                console.log(data);
                let { id, nome, categoria, alterar,nota } = element

                let tr = document.createElement("tr")

                tr.innerHTML = `
        <td onclick= "detalhes(${id})">${nome}</td>
        <td>${categoria}</td>
        <td>${nota}</td>
        `

                tbody.appendChild(tr);
            }
        })
}

const criar = async (nome, categoria, telefone, endereco) => {

    if (!nome || !categoria || !telefone || !endereco) {
        alert('Erro ao criar um novo restaurante')
        return
    }
    const body = JSON.stringify({
        nome, categoria, telefone, endereco
    })
    const options = {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: body
    }
    const info = await fetch("http://localhost:3000/criar", options)
    console.log(info);
    const data = await info.json()
    return data
}

const fetchRestaurantes = async () => {
    const info = await fetch("http://localhost:3000/listarRestaurantes", {method :"GET"})
    const data = await info.json()
    return data
}

const preencherSelect = (select, restaurantes) => {
    select.innerHTML = '';
    
    restaurantes.forEach((restaurante) => {
        const option = document.createElement('option')
        option.value = restaurante.id
        option.textContent = restaurante.nome

        select.appendChild(option)
    })
}

const novaAvaliacao = async (restauranteId, nota, descricao) => {

    const body = JSON.stringify({
        restauranteId: restauranteId,
        data: new Date().toLocaleDateString(),
        nota: nota,
        descricao: descricao
    })
    const info = await fetch("http://localhost:3000/criarAvaliacao", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: body
    })
    const data = await info.json()
    return data
}

const deletar = async (id) => {
    if (window.confirm("Você realmente deseja deletar?")) {
        console.log(id);
        const info = await fetch(`http://localhost:3000/delete/${id}`, { method: "DELETE", headers: { "Content-Type": "application/json" } })
        window.location.reload()
    }
}

const listarInfo = (id) => {
    console.log(id)
}