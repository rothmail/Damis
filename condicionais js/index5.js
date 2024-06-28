

let resposta = prompt("você deseja ver o filme? S ou N: ")
if (resposta === 'S') {
    let generofilme = prompt("qual o genero do filme?")
    if (generofilme === 'Fantasia') {
        let valordofilme = Number =  prompt("qual o valor do ingresso? ")
        if (valordofilme <= 15) {
            console.log("bom filme!")
        } else {
            console.log("dinheiro insuficiente")
        }
    } else {
        console.log("escolha outro filme :(")
    }
} else {
    console.log('Tente outro dia!')
}