//function to create a pottery object with 4 values. id value increments by 1 each time function is called.
let potteryPieces = 1
export const makePottery = (shape, weight, height) => {
    const pottery = {
        shape: shape,
        weight: weight,
        height: height,
        id: potteryPieces++
    }
    return pottery
}

