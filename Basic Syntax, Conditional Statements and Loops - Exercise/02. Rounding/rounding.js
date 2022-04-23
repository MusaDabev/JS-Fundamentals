function rounding (firstNum, secondNum) {

    if (secondNum > 15) {
        secondNum = 15;
    }

   let roundedNum = firstNum.toFixed(secondNum);
   let parsedNum =  parseFloat(roundedNum)


    console.log(parsedNum)
}

rounding(10.5,3)