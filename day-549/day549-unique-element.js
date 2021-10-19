
const unique = (arr) => {
    const auxArr = new Array(32).fill(0);

    for(num of arr) {
        let idx = 0;
        for(bit of num.toString(2).padStart(32, "0")) {
            if(bit === "1") {
                auxArr[idx++]++
            } else {
                idx++;
            }
        }
    }

    return parseInt(auxArr.map((v) => v % 3).join(""), 2);
}

console.log(unique([1, 1, 2, 1]));
console.log(unique([1, 10, 1, 2, 2, 2, 1]));