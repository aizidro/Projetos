const form = document.querySelector("form");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");

form.addEventListener("submit", e => {
    e.preventDefault ()
})

function autenticar() {
    let data = {
        "email": email.value,
        "senha": senha.value
    }

    let options = {
        "method": "POST",
        "headers": {
            "Content-Type":"application/json"
        },
        "body": JSON.stringify(data)
    }

    fetch("http://localhost:3000/login", options)
    .then(resp => { return resp.json() })
    .then(info => {
        if(info.id != undefined) {
            localStorage.setItem("corretor", JSON.stringify(info));

            window.location.href="./pages/home.html";
        }else {
            alert(info.msg);
        }
    })
}