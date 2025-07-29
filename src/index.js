const player1 = {
    name: 'Mario',
    velocidade: 4,
    manobrabilidade: 3,
    poder: 3,
    pontos: 0,
};
const player2 = {
    name: 'Luigi',
    velocidade: 3,
    manobrabilidade: 4,
    poder: 4,
    pontos: 0,
};
const player3 = {
    name: 'Peach',
    velocidade: 3,
    manobrabilidade: 4,
    poder: 2,
    pontos: 0,
};
const player4 = {
    name: 'Bowser',
    velocidade: 5,
    manobrabilidade: 2,
    poder: 5,
    pontos: 0,
};
const player5 = {
    name: 'Yoshi',
    velocidade: 2,
    manobrabilidade: 4,
    poder: 3,
    pontos: 0,
};
const player6 = {
    name: 'Toad',
    velocidade: 3,
    manobrabilidade: 3,
    poder: 4,
    pontos: 0,
};

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    let random = Math.random()
    let result = 0;

    switch(true) {
        case random < 0.33:
            result = 'reta';
            break;
        case random < 0.66:
            result = 'curva';
            break;
        default:
            result = 'Confronto';
    }
}

async function playRaceEngine(charactere1, charactere2) {
    for(let round = 1; round <= 5; round++) {
        console.log(`\n🏁 Rodada ${round} 🏁`);
        
        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);
    }

}
async function main() {

    console.log('Iniciando o jogo...');
    console.log(`🚦🏁 corrida entre ${player1.name} e ${player2.name} começando!\n`);

    playRaceEngine(player1, player2);

}
main()