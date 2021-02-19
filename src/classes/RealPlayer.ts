import { AbstractPlayer } from "./AbstractPlayer";
import { Card } from "./Card";

export class RealPlayer extends AbstractPlayer {
    requestCard(): boolean {
        return this.getSum() < 21;
    }
}