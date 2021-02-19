import { CardSelectionService } from './services/CardSelectionService';
import { AbstractPlayer } from "./AbstractPlayer";

export class BotPlayer extends AbstractPlayer {
    requestCard(): boolean {
        const cardSelectionService = new CardSelectionService();
        return cardSelectionService.decide();
    }
}