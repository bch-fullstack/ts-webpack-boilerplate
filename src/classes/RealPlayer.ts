import { AbstractPlayer } from "./AbstractPlayer";

export class RealPlayer extends AbstractPlayer {
    requestCard(): boolean {
        return true
    }

}