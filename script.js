// CRIAR FUNCTION QUE MUDE PARA UMA VERSÃO DARK O PORTFOLIO E QUE TRADUZA PARA INGLES //
// download do meu curriculo //

let dark__mode = document.getElementById('dark__mode');
let body = document.querySelector('body');

dark__mode.addEventListener('click', ()=> {
    dark__mode.classList.toggle('dark');
    body.classList.toggle('dark');
})