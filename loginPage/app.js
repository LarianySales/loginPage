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
const usuario = document.getAnimations('nome')
const senha1 = document.getElementById('senha1')

const btnCadastro = document.getElementById('cadastro')
