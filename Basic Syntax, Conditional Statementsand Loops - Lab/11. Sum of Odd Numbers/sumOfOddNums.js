function solve (n) {

    let printedNums = 1;

    let array = [0];

    while (printedNums <= n) {

        for ( let i = array[array.length-1] + 1; i <= 100; i++) {
            if (i % 2 !== 0 ) {
                console.log(i);
                array.push(i)
               printedNums += 1
                break;
            }
        } 
    }

    
    console.log("Sum: " + array.reduce((partialSum, a) => partialSum + a, 0))


}

solve(3);