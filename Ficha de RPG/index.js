const botao1 = document.querySelector('#enviar')
const tela1 = document.querySelector('.one')
const tela2 = document.querySelector('.two')
const two1 = document.querySelector('.two1')
const two2 = document.querySelector('.two2')


const rc1 = document.querySelector('.humano');
const rc2 = document.querySelector('.elfo');
const rc3 = document.querySelector('.gigante');
const rc4 = document.querySelector('.semihumano');
const rc5 = document.querySelector('.bruxo');
const rc6 = document.querySelector('.druida');

const pais1 = document.querySelector('.pais1')
const pais2 = document.querySelector('.pais2')
const pais3 = document.querySelector('.pais3')


var nome;
var raca;
var pais;

    botao1.addEventListener("click", ()=>{
        nome = document.querySelector('#nome').value;
        tela1.style.display = "none";
        tela2.style.display = "flex";

    })
    rc1.addEventListener("click", ()=>{
        raca = "Humano";
        two1.style.display = "none";
        two2.style.display = "flex";

    })
    rc2.addEventListener("click", ()=>{
        raca = "Elfo";
        two1.style.display = "none";
        two2.style.display = "flex";

    })
    rc3.addEventListener("click", ()=>{
        raca = "Gigante";
        two1.style.display = "none";
        two2.style.display = "flex";

    })
    rc4.addEventListener("click", ()=>{
        raca = "Semi Humano";
        two1.style.display = "none";
        two2.style.display = "flex";

    })
    rc5.addEventListener("click", ()=>{
        raca = "Bruxo(a)";
        two1.style.display = "none";
        two2.style.display = "flex";

    })
    rc6.addEventListener("click", ()=>{
        raca = "Druida";
        two1.style.display = "none";
        two2.style.display = "flex";

    })

    pais1.addEventListener("click", ()=>{
        pais = "Nahh"
        two2.style.display = "none";

    })
    pais2.addEventListener("click", ()=>{
        pais = "Abduur"
        two2.style.display = "none";

    })
    pais3.addEventListener("click", ()=>{
        pais = "Gervenne"
        two2.style.display = "none";

    })

























//3 cidades de nahh

const lyveum = {
    nome:"Lyveum",
    elemento: "Água e Ar",
    descricao: "A terra livre do conhecimento, liderada por uma organização intelectual de magos" +
    " separadas por camadas de cidadelas, onde todas as raças e classes são permitidas" +
    " bibliotecas em cada esquina, cidade mais segura, porém caça excassa e baixa"
    
}
const fillan = {
    nome:"Fillan",
    elemento: "Fogo",
    descricao: "Terra de alto nivel militar, com muita burocracia de visto para treinar e caçar la " +
    "com muitos animais e raças únicas que dão mais xp, foco em melhora de ataque e defesa"
    
}
const auror = {
    nome:"Auror",
    elemento: "Terra",
    descricao: "Terra do comércio livre, aberta para todo tipo de ser vivo, "
    
}
const nahh = [lyveum,fillan,auror]