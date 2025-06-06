function chegadaDosAmigos() {
    let galera = ['👦', '👧'];
    galera.push('🧑');
    return galera;
}
console.log(chegadaDosAmigos()); 
// ['👦', '👧', '🧑']
//  A galera foi chegando pro rolê

function alguemVaiEmbora(galera) {
    galera.pop();
    return galera;
}
console.log(alguemVaiEmbora(['👦', '👧', '🧑']));
// ['👦', '👧']
//  Um amigo foi embora mais cedo.


function prepararLanches() {
    let lanches = ['🍞', '🧀', '🍅'];
    let prontos = lanches.map(comida => comida + '🍔');
    return prontos;
}
console.log(prepararLanches());
// ['🍞🍔', '🧀🍔', '🍅🍔']
// Cada ingrediente virou um hambúrguer.

function quemFicouAcordado() {
    let status = ['😴', '😎', '😴', '😎'];
    let acordados = status.filter(pessoa => pessoa === '😎');
    return acordados;
}
console.log(quemFicouAcordado());
// ['😎', '😎']
//  Só os fortes ficaram acordados até tarde!

function inverterBrincadeiras() {
    let brincadeiras = ['⚽️', '🎲', '🎮'];
    return brincadeiras.reverse();
}
console.log(inverterBrincadeiras());
// ['🎮', '🎲', '⚽️']
// Decidiram brincar de videogame antes do futebol!

function premiacao() {
    let medalhas = ['🥉', '🥇', '🥈'];
    return medalhas.sort();
}
console.log(premiacao());
// ['🥇', '🥈', '🥉']
//  Ordenando os campeões!