let victory = 110;
let defeat = 9;

let matches = (victory - defeat)

function hero_elo(matches){

    if(matches <= 10){
        return "Ferro"
    }
    else if(matches >= 11 && matches <= 20){
        return "Bronze"
    }
    else if(matches >= 21 && matches <= 50){
        return "Prata"
    }
    else if(matches >= 51 && matches <= 80){
        return "Ouro"
    }
    else if(matches >= 81 && matches <= 90){
        return "Diamante"
    }
    else if(matches >= 91 && matches <= 100){
        return "Lendário"
    }
    else if(matches >= 101){
        return "Imortal"
    }
}

console.log(`O Herói tem de saldo de ${matches} está no nível ${hero_elo(matches)}`)