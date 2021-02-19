import { AbstractPlayer } from "./AbstractPlayer";
import { Card } from "./Card";

export class RealPlayer extends AbstractPlayer {
    requestCard(): boolean {
        return confirm(`Your sum is currently ${this.getSum()}. Would you like to request another card?`);
    }
}