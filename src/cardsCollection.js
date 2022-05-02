import car1 from "../public/car1.jpg";
import car2 from "../public/car2.jpg";
import car3 from "../public/car3.jpg";
import car4 from "../public/car4.jpg";
import car5 from "../public/car5.jpg";
import smile1 from "../public/smile1.jpg";
import smile2 from "../public/smile2.jpg";
import smile3 from "../public/smile3.jpg";
import smile4 from "../public/smile4.jpg";
import smile5 from "../public/smile5.jpg";
import minion1 from "../public/minion1.png";
import minion2 from "../public/minion2.png";
import minion3 from "../public/minion3.png";
import minion4 from "../public/minion4.png";
import minion5 from "../public/minion5.png";

const cars5x2 = [car1,car2,car3,car4,car5,car1,car2,car3,car4,car5];
const cars6x3 = [...cars5x2,car1,car2,car3,car4,car1,car2,car3,car4];
const cars8x3 = [...cars5x2,...cars5x2,car1,car2,car1,car2];
const emojies5x2 = [smile1,smile2,smile3,smile4,smile5,smile1,smile2,smile3,smile4,smile5];
const emojies6x3 = [...emojies5x2,smile1,smile2,smile3,smile4,smile1,smile2,smile3,smile4];
const emojies8x3 = [...emojies5x2,...emojies5x2,smile1,smile2,smile1,smile2];
const minions5x2 = [minion1,minion2,minion3,minion4,minion5,minion1,minion2,minion3,minion4,minion5];
const minions6x3 = [...minions5x2,minion1,minion2,minion3,minion4,minion1,minion2,minion3,minion4];
const minions8x3 = [...minions5x2,...minions5x2,minion1,minion2,minion1,minion2];

const cardsCollection = new Map([
    ["cars5x2", cars5x2],
    ["cars6x3", cars6x3],
    ["cars8x3", cars8x3],
    ["emojies5x2", emojies5x2],
    ["emojies6x3", emojies6x3],
    ["emojies8x3", emojies8x3],
    ["minions5x2", minions5x2],
    ["minions6x3", minions6x3],
    ["minions8x3", minions8x3],
]);

export default cardsCollection;