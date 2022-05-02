import cardsCollection from "../cardsCollection";
console.log(cardsCollection);

class GameModel{
    constructor(cardsCollection){
        this.cardsCollection = cardsCollection;
    }
    chooseCollection(name){
        return this.cardsCollection.get(name);
    }
}

const gameModel = new GameModel(cardsCollection);

export default gameModel;