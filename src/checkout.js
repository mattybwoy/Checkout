export default class Shop {

  checkout(item) {
    let split = item.split('')
  
    let priceA = 0;
    let priceB = 0;
    let priceC = 0;
    let priceD = 0;
    const prices = {"A": 50, "B": 30, "C": 20, "D": 15}
    // const deals = {"BB": 45}

    // if(item === "BB"){
    //   return 45
    // } else if(item === "AAA"){
    //   return 130
    // }

    for(let i=0; i< split.length; i++) {
      var countA = (item.match(/A/g) || []).length;
      var countB = (item.match(/B/g) || []).length;
      var countC = (item.match(/C/g) || []).length;
      var countD = (item.match(/D/g) || []).length;

      if(!prices[split[i]]) {
        return -1
      }
      if(countA % 3 === 0) {
        priceA = countA / 3 * 130
      } else if (countA % 3 !== 0) {
        var whole = Math.floor(countA / 3) * 130
        var remain = countA % 3 * 50
        priceA = whole + remain
      } 
      
      if(countB % 2 === 0) {
        priceB = countB / 2 * 45
      } else if(countB % 2 !== 0) {
        var whole = Math.floor(countB / 2) * 45
        var remain = countB % 2 * 30
        priceB = whole + remain
      } 
      if (countC > 0) {
        console.log(countC)
        priceC = (countC * 20)
      } 
      if (countD > 0) {
        priceD = (countD *15)
      }
      //price += prices[split[i]]
    }
    return priceC + priceA + priceB + priceD
  }
}  