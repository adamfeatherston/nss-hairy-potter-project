// Imports go first
import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./Kiln.js";

// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 3, 4)
let cup = makePottery("Cup", 2, 3)
let bowl = makePottery("Bowl", 6, 8)
let pot = makePottery("Pot", 5, 6)
let vase = makePottery("Vase", 5, 9)


// Fire each piece of pottery in the kiln
firePottery(mug, 2000);
firePottery(cup, 2200);
firePottery(bowl, 2225);
firePottery(pot, 2199);
firePottery(vase, 2200);
console.log(mug);
console.log(cup);
console.log(bowl);
console.log(pot);
console.log(vase);



// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list



