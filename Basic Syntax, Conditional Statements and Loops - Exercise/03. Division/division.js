function division(number) {

    let array = [2, 3, 6, 7, 10]

    let dividedNums = [];

    array.forEach(num => {
        if ( number % num ===0 ) {
            dividedNums.push(num);
        }
    })

    if (dividedNums.length === 0) {
        console.log('Not divisible');
    } else {
        console.log(`The number is divisible by ${dividedNums[dividedNums.length - 1]}`)
    } 
    
}

division(30);