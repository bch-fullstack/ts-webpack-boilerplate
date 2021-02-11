import { RealPlayer } from './classes/RealPlayer';
import { BotPlayer } from "./classes/BotPlayer";
import { AbstractPlayer } from './classes/AbstractPlayer';
import {CardDealer} from './classes/CardDealer'


const players = [
    new BotPlayer(5),
    new BotPlayer(5),
    new RealPlayer(5)
]

const dealer = new CardDealer(52);

players.forEach(player => {
    let counter = 2;
    while (Boolean(counter--)) {
        dealer.dealTo(player);
    }
})

players.forEach((player:AbstractPlayer) => {
    if(player.requestCard()) {
        dealer.dealTo(player);
    }
})

players.forEach((player:AbstractPlayer) => {
    console.log('reviewing cards', player.reviewCards())
})

