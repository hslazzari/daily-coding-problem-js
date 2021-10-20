
const getRandomInt = () => {
    min = Math.ceil(0);
    max = Math.floor(1);
    return Math.floor(Math.random() * (2));
}

const toss_biased = () => {
    if(Math.random() > 0.8) {
        return 1;
    } else {
        return 0;
    }
}

const toss_unbiased = () => {

    while(true) {
        const diff = toss_biased() - toss_biased();
        if(diff > 0) {
            return 0;
        } 

        if(diff < 0) {
            return 1;
        }
    }
}


const limit = 10000000;
let inc = 0;

for(let i = 0; i < limit; i++) {
    inc+=toss_unbiased();
}

console.log(inc / limit);

