function randomNumberGenerator(start,end) {
    let randNum = Math.round(Math.random()*end);
    while (start > randNum) {
        randNum = Math.round(Math.random()*end);
    }
    return Math.random(randNum);
    
}
console.log(randomNumberGenerator(10,20));