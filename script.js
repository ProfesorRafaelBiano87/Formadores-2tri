
function inserirNome(){
let nomeusuario = prompt("Salve piazada Qual seu nome");
let elemento = document.querySelector("#Nome_usuario") ;
elemento.textContent = nomeusuario;
}
inserirNome ();

let linguagens = ["JavaScript", "Python", "C++"];
console.log(linguagens[0]) //"JavaScript";
console.log(linguagens[1]) //Python;
console.log(linguagens[2]) //C++;

const intem = document.querySelector("#lista");
intem.textContent = linguagens[2]