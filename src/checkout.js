export default class Shop {

  checkout(item) {
    let split = item.split('')
    let priceA = 0;
    let priceB = 0;
    let priceC = 0;
    let priceD = 0;
    const prices = {"A": 50, "B": 30, "C": 20, "D": 15, "AAA": 130, "BB": 45}

    for(let i=0; i< split.length; i++) {
      let countA = (item.match(/A/g) || []).length;
      let countB = (item.match(/B/g) || []).length;
      let countC = (item.match(/C/g) || []).length;
      let countD = (item.match(/D/g) || []).length;

      if(!prices[split[i]]) {return -1}
      
      if(countA % 3 === 0) {
        priceA = countA / 3 * prices["AAA"]
      } else {
        priceA = (Math.floor(countA / 3) * prices["AAA"]) + (countA % 3 * prices["A"])
      } 
      if(countB % 2 === 0) {
        priceB = countB / 2 * prices["BB"]
      } else {
        priceB = (Math.floor(countB / 2) * prices["BB"]) + (countB % 2 * prices["B"])
      } 
      if (countC > 0) {
        priceC = (countC * prices["C"])
      } 
      if (countD > 0) {
        priceD = (countD * prices["D"])
      }
    }
    return priceA + priceB + priceC + priceD
  }
}  