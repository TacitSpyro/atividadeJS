let prova1 = 6
let prova2 = 7
let prova3 = 8
let prova4 = 5

let mediaNota = (prova1 + prova2 + prova3 + prova4) / 4

console.log(mediaNota)

if (mediaNota >= 7){
    console.log("Aprovado")
}else if(mediaNota > 5 && mediaNota < 6.9){
    console.log("Recuperação")
}else if(mediaNota < 5){
    console.log("Reprovado")
}
