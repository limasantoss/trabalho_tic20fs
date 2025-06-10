
function chegadaDosAmigos() {
    let galera = ['👦', '👧'];
    galera.push('🧑');        
    return galera;            
}
console.log(chegadaDosAmigos()); 

function alguemVaiEmbora(galera) {
    galera.pop();  
    return galera;  
}
console.log(alguemVaiEmbora(['👦', '👧', '🧑']));

function prepararLanches() {
    let lanches = ['🍞', '🧀', '🍅']; 
    let prontos = lanches.map(comida => comida + '🍔'); 
    return prontos;
}
console.log(prepararLanches());

function quemFicouAcordado() {
    let status = ['😴', '😎', '😴', '😎']; 
    let acordados = status.filter(pessoa => pessoa === '😎');
    return acordados;
}
console.log(quemFicouAcordado());

function inverterBrincadeiras() {
    let brincadeiras = ['⚽️', '🎲', '🎮']; 
    return brincadeiras.reverse(); 
}
console.log(inverterBrincadeiras());

function premiacao() {
    let medalhas = ['   🥉', '🥇', '🥈']; 
    return medalhas.sort(); 
}
console.log(premiacao());

