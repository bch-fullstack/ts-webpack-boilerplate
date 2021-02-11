import { PlayerBehavior } from "../interfaces/PlayerBehavior";
import { Card } from "./Card";

export abstract class AbstractPlayer implements PlayerBehavior {
    private holdings: Card[] = [];
    private max: number;

    abstract requestCard(): boolean;

    constructor(max: number){
        this.max = max;
    }

    receiveCard(card: Card | undefined) {
        if (this.holdings.length < this.max && card !== undefined) {
            this.holdings.push(card);
        }
    }

    reviewCards(): Card[] {
        const cardSum = this.holdings.reduce((a, b) => +a + +b.name, 0)
        if (cardSum < 20) {
            if (confirm(`the sum of the card in your holding is ${cardSum}. do you want to get a new card?`)) {
                this.requestCard() 
                const newCard= new Card
                this.receiveCard(newCard)
            }
        }
        return this.holdings;
    }
}