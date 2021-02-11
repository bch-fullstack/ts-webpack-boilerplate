export class CardSelectionService {
    private getOneOrZero(): number {
        return Math.floor(Math.random() * 2);
    }

    decide() {
        if (this.getOneOrZero() === 1) {
             return true
        } else {
            return false
         }
    } 
}