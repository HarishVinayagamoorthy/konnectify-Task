function minCoinsWeNeed(coins, target) {
    coins.sort((a, b) => b - a);

    let remaining = target; 
    let result = []; 

    for (let i = 0; i < coins.length; i++) {
        let count = 0; 
        while (remaining >= coins[i]) {
            remaining -= coins[i]; 
            count++; 
        }
        if (count > 0) {
            result.push(`${coins[i]}:${count}`); 
        }
        if (remaining === 0) break; 
    }

    if (remaining > 0) {
        return "Not possible with given coins";
    }

    return result;
}


const input = [1, 2, 3, 4, 10];
const target = 92;
console.log(minCoinsWeNeed(input, target)); 