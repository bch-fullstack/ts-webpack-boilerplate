import { AbstractPlayer } from "./AbstractPlayer";
import {CardSelectionService} from './services/CardSelectionService'

export class BotPlayer extends AbstractPlayer {
    requestCard(): boolean {
        const service = new CardSelectionService
        const decision = service.decide()
        return decision
    }
    
}