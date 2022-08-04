import { makePottery } from "./PotteryWheel.js";
let potteryMade = makePottery()
export const firePottery = (pottery, temperature) => {
  
        
        if (temperature > 2200) {
            pottery.fired = true
            pottery.cracked = true
        }
        if (temperature <= 2200) {
            pottery.fired = true
            pottery.cracked = false
        }
        return potteryMade
    
    }
    
