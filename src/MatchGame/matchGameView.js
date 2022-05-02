import question from "../../public/question.jpg";

class GameView{
    turnedCards = [];
    clearedCards = 0;
    constructor(){
        
    }

    init(){
        // console.log(this);
        const skirtMenu = document.querySelector("#submenu1");
        const difficultyMenu = document.querySelector("#submenu2");

        const skirtButton1 = document.querySelector("#skirtButton1");
        const skirtButton2 = document.querySelector("#skirtButton2");
        const skirtButton3 = document.querySelector("#skirtButton3");

        const difficultyButton1 = document.querySelector("#difficultyButton1");
        const difficultyButton2 = document.querySelector("#difficultyButton2");
        const difficultyButton3 = document.querySelector("#difficultyButton3");

        const startButton = document.querySelector(".nav-button3");

        skirtMenu.addEventListener("click",(e)=>{
            if(e.target === skirtButton1){
                this.skirt = "cars";
            }else if(e.target === skirtButton2){
                this.skirt = "emojies";
            }else if(e.target === skirtButton3){
                this.skirt = "minions";
            }
            skirtButton1.style.color = this.skirt === "cars" ? "blue" : "";
            skirtButton2.style.color = this.skirt === "emojies" ? "blue" : "";
            skirtButton3.style.color = this.skirt === "minions" ? "blue" : "";
        });

        difficultyMenu.addEventListener("click",(e)=>{
            if(e.target === difficultyButton1){
                this.difficult = "5x2";
            }else if(e.target === difficultyButton2){
                this.difficult = "6x3";
            }else if(e.target === difficultyButton3){
                this.difficult = "8x3";
            }
            difficultyButton1.style.color = this.difficult === "5x2" ? "blue" : "";
            difficultyButton2.style.color = this.difficult === "6x3" ? "blue" : "";
            difficultyButton3.style.color = this.difficult === "8x3" ? "blue" : "";
        });

        startButton.addEventListener("click",()=>{
            this.start()
        })
    }

    getStartOptions(){
        if(this.difficult && this.skirt){
            return {
                difficult: this.difficult,
                skirt: this.skirt,
            }
        }
        return null;
    }

    gameStart(cards){
        const container = document.querySelector("#container");
        // const container = document.createElement("div");
        container.innerHTML = "";
        // main.appendChild(container)
        this.turnedCards = [];
        this.clearedCards = 0;
        this.stopTimer()
        this.setTimer();

        cards.forEach((i)=>{
            const card = document.createElement("div");
            const cardFrontSide = document.createElement("div");
            const cardBackSide = document.createElement("div");
            const img = document.createElement("img");

            cardBackSide.className = "cardBackSide";
            cardFrontSide.className = "cardFrontSide";
            card.className = "card";
            img.src = i;

            card.style.float = "left";
            card.style.margin = "20px 20px 20px 20px"
            cardBackSide.style.backgroundImage = `url(${question})`

            container.append(card);
            card.append(cardFrontSide);
            card.append(cardBackSide);
            cardFrontSide.appendChild(img);

            setTimeout(()=>{
                cardFrontSide.style.transform = `rotateY(${180}deg)`;
                cardBackSide.style.transform = `rotateY(${360}deg)`;
                cardBackSide.addEventListener("click",(e)=>{
                    console.log(this.turnedCards)
                    if(this.turnedCards.length === 2) return;
                    else if(this.turnedCards[0] === card) return;
                    let deg = +cardFrontSide.style.transform.slice(8).slice(0,-4);
                    let deg1 = +cardBackSide.style.transform.slice(8).slice(0,-4);

                    cardFrontSide.style.transform = `rotateY(${deg+180}deg)`;
                    cardBackSide.style.transform = `rotateY(${deg1+180}deg)`;

                    this.turnedCards.push(card);

                    if(this.turnedCards.length === 2){
                        this.handleTurnCards();
                    }
                });
            },5000)
        })
    }

    handleTurnCards(){
        const card1 = this.turnedCards[0];
        const card2 = this.turnedCards[1];
        const img1 = card1.querySelector("img");
        const img2 = card2.querySelector("img");

        if(img1.src === img2.src){
            console.log(121414)
            setTimeout(()=>{
                this.turnedCards[0].querySelector(".cardFrontSide").remove();
                this.turnedCards[1].querySelector(".cardFrontSide").remove();
                this.turnedCards = [];
                this.clearedCards += 2;
                console.log(this.clearedCards)
                if(this.clearedCards === 10 && this.difficult === "5x2"
                || this.clearedCards === 18 && this.difficult === "6x3"
                || this.clearedCards === 24 && this.difficult === "8x3"){
                    console.log(this,2412412124124)
                    this.endGame();        
                }
            },2000)
        }else{
            setTimeout(()=>{
                let frontCard1 = card1.querySelector(".cardFrontSide");
                let backCard1 = card1.querySelector(".cardBackSide");

                let frontCard2 = card2.querySelector(".cardFrontSide");
                let backCard2 = card2.querySelector(".cardBackSide");

                let frontDegCard1 = +frontCard1.style.transform.slice(8).slice(0,-4);
                let frontDegCard2 = +frontCard2.style.transform.slice(8).slice(0,-4);
                
                let backDegCard1 = +backCard1.style.transform.slice(8).slice(0,-4);
                let backDegCard2 = +backCard2.style.transform.slice(8).slice(0,-4);

                frontCard1.style.transform = `rotateY(${frontDegCard1+180}deg)`;
                frontCard2.style.transform = `rotateY(${frontDegCard2+180}deg)`;

                backCard1.style.transform = `rotateY(${backDegCard1+180}deg)`;
                backCard2.style.transform = `rotateY(${backDegCard2+180}deg)`;
                this.turnedCards = [];
            },2000)
        }
    }
    setTimer(){
        this.time = 0;
        const timer = document.createElement("div");
        timer.style.textAlign = "center";
        timer.textContent = this.time;
        timer.style.fontSize = "36px";
        const container = document.querySelector(".container");
        container.appendChild(timer);
        let setTime = ()=>{
            timer.textContent = ++this.time;  
            timerId = setTimeout(setTime,1000);
            this.timerId = timerId;
        }
        let timerId = setTimeout(setTime, 1000);
        this.timerId = timerId;
        this.timer = timer;
    }
    stopTimer(){
        if(!this.timer) return;
        clearTimeout(this.timerId);
        this.timer.remove();
    }
    endGame(){
        this.end = true;
        console.log("BUHF DC~ GKKLFYJKCM<")
        const container = document.querySelector("#container");
        container.innerHTML = "";
        const end = document.createElement("div");
        end.style.display = "flex";
        end.style.justifyContent = "center";
        end.style.alignItems = "center";
        end.style.width = "100%";
        end.style.height = "100%";
        end.style.fontSize = "36px";
        end.textContent = `Great Work and Congratulations! You did it for ${this.time} seconds`;
        container.appendChild(end);
        this.stopTimer();
    }
}

const gameView = new GameView();

export default gameView;