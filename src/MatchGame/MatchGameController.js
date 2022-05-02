import gameModel from "./matchGameModel";
import gameView from "./matchGameView";
import img from "../../public/car1.jpg";

class GameController{
    constructor(gameModel,gameView){
        this.model = gameModel;
        this.gameView = gameView;
    }
    init(){
        this.gameView.init();
        this.gameView.start = this.start.bind(this);
    }
    start(){
        console.log(1)
        const gameSettings = this.gameView.getStartOptions();
        console.log(gameSettings);
        if(gameSettings === null) return;
        const cards = this.model.chooseCollection(gameSettings.skirt + gameSettings.difficult);
        console.log(gameSettings.skirt + gameSettings.difficult);
        console.log(cards);
        for(let i = cards.length-1; i >= 0; i--){
            let j = Math.floor(Math.random() * i + 1);
            [cards[j],cards[i]] = [cards[i],cards[j]]
        }
        this.gameView.gameStart(cards);
    }
}

const gameController = new GameController(gameModel,gameView);

export default gameController;