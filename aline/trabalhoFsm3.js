
// Você é um aventureiro e está numa missão, durante seu caminho, você coleta itens e gerencia eles em sua mochila
let mochila =["Carne podre","Tocha","Maçã Dourada","Poção de cura","Carne de Porco"];
//É importante você verificar oque tem em sua mochila
function mostrarMochila(){
    console.log("Conteúdo da mochila: ");
    mochila.forEach((item, index) =>{
        console.log(`- Item ${index + 1}: ${item}`)
    })
}
mostrarMochila(); //vai mostrar os itens que tem dentro da mochila

console.log("Você achou em sua mochila uma Carne podre descarte ela")
function removerIteminutil(){
    const removido = mochila.shift();
    console.log(`Você removeu um item antigo que não será util: ${removido}`)
}
removerIteminutil(); //removeu o primeiro item que é a carne podre 
mostrarMochila();

console.log("Você viajou muito é no caminho achou um bau")
function adicionarItemEncontrado(item){
    mochila.unshift(item);  
    console.log(`Parabéns,você encontrou um item importante: ${item}!`)
}
adicionarItemEncontrado("Espada de Diamante")

//Vamos ver nossos ultimos itens 
function verItensRecentes(qtd = 2){
    const recentes = mochila.slice(qtd)
    console.log(`Últimos ${qtd} itens coletados: ${recentes.join(", ")}`)
}
verItensRecentes(2);

console.log("Olha, encontramos um outro aventureiro aliado é ele quer te dar itens \n vamos juntar as mochilas")
function juntarMochilas(aliadoMochila){
    const novaMochila = mochila.concat(aliadoMochila)
    console.log("Sua mochila foi combinada com a de um aliado!");
    return novaMochila
}
let mochilaAliado = ["mapa pirata", "esmelrada","diamante"];
mochila = juntarMochilas(mochilaAliado)
console.log("Nossa agora nos temos muitas coisas na mochila,")
function organizarMochila() {
    mochila.sort()
    console.log("Mochila organizada em ordem alfabética")
}
organizarMochila()
mostrarMochila()
console.log("Depois de um grande dia de aventura, nossa mochila ficou pesada, vamos ver o peso dela")
function calcularPeso(){
    const pesos ={
        "Tocha": 2,
        "Maçã Dourada":1,
        "Poção de cura":3,
        "Carne podre":5,
        "mapa pirata":1,
        "esmelrada":2,
        "diamante":3
    }
    const pesoTotal = mochila.reduce((total, item) =>{
        return total + (pesos[item] || 1);

    }, 0)
    console.log(`Peso Total da mochila: ${pesoTotal} kg`)
}
calcularPeso();