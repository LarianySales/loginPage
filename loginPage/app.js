//adcionar right-panel-active-add
//remover right=panel-active-remove



const signInButton = document.getElementById("singIn");
const signUpButton = document.getElementById("singUp");
const container = document.getElementById("container")

signUpButton.addEventListener("click",()=>{
    container.classList.add("right-panel-active")//para adicionar a pagina
});
signInButton.addEventListener("click",()=>{
    container.classList.remove("right-panel-active")//para remover a pagina
});

const email1 = document.getElementById('email1')
const usuario = document.getElementById('nome')
const senha1 = document.getElementById('senha-1')

const senha = senha1.value
const email = email1.value
const nome = usuario.value


const btnCadastro = document.getElementById("cadastro")

btnCadastro.addEventListener('click', ()=>{
if(nome == ''){
    alert("Coloque o seu nome por favor")
}

 if(email == ''){
    alert("Preencha o campo de email")
}
else if(senha == ''){
    alert("Digite sua senha")
}

})

