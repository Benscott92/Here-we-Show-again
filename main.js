// Rules :For these katas, instead of using console.log(), document.write(), or someElement.innerHTML, you are required to insert your results into the HTML using the document.createElement() and node.append() methods.

let kataList = document.createElement('div')
document.body.append(kataList)
const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];


// Kata 1 Display the numbers from 1 to 20. (1, 2, 3, …, 19, 20)



let kata1 = document.createElement('div')

let kataOneHeading = document.createElement('h3')

kataOneHeading.append('Kata 1')

kata1.append(kataOneHeading)

kataList.append(kata1)

for(let index = 1; index <= 20; index++){
    if(index === 20){
        kata1.append(index)
    }else{
    kata1.append(index + ',')
  }
}

// Kata 2 Display the even numbers from 1 to 20. (2, 4, 6, …, 18, 20)
let kata2 = document.createElement('div')
let kataTwoHeading = document.createElement('h3')
kataTwoHeading.append('Kata 2')
kata2.append(kataTwoHeading)
kataList.append(kata2)
for(let index = 2; index <= 20; index += 2){
    if(index === 20){
        kata2.append(index)
    }else{
    kata2.append(index + ',')
  }
}


// Kata 3 Display the odd numbers from 1 to 20. (1, 3, 5, …, 17, 19)
let kata3 = document.createElement('div')
let kataThreeHeading = document.createElement('h3')
kataThreeHeading.append('Kata 3')
kata3.append(kataThreeHeading)
kataList.append(kata3)
for(let index = 1; index <= 20; index += 2){
    if(index === 19){
        kata3.append(index)
    }else{
    kata3.append(index + ',')
  }
}


// Kata 4 Display the multiples of 5 up to 100. (5, 10, 15, …, 95, 100)
let kata4 = document.createElement('div')
let kataFourHeading = document.createElement('h3')
kataFourHeading.append('Kata 4')
kata4.append(kataFourHeading)
kataList.append(kata4)
for(let index = 5; index <= 100; index += 5){
    if(index === 100){
        kata4.append(index)
    }else{    
    kata4.append(index + ',')
    }
}


// Kata 5 Display the square numbers from 1 up to 100. (1, 4, 9, …, 81, 100)
let kata5 = document.createElement('div')
let kataFiveHeading = document.createElement('h3')
kataFiveHeading.append('Kata 5')
kata5.append(kataFiveHeading)
kataList.append(kata5)
for(let index = 1; index <= 100; index++){
    const indexIsPerfectSquare = Number.isInteger(Math.sqrt(index))
    if(indexIsPerfectSquare && index != 100){
      kata5.append(index + ',')
    }else if(indexIsPerfectSquare){
        kata5.append(index)
    }
  }

// Kata 6 Display the numbers counting backwards from 20 to 1. (20, 19, 18, …, 2, 1)
let kata6 = document.createElement('div')
let kataSixHeading = document.createElement('h3')
kataSixHeading.append('Kata 6')
kata6.append(kataSixHeading)
kataList.append(kata6)
for(let index = 20; index >= 1; index--){
    if(index === 1){
        kata6.append(index)

    }else{
    kata6.append(index + ',')
    }
}


// Kata 7 Display the even numbers counting backwards from 20 to 1. (20, 18, 16, …, 4, 2)
let kata7 = document.createElement('div')
let kataSevenHeading = document.createElement('h3')
kataSevenHeading.append('Kata 7')
kata7.append(kataSevenHeading)
kataList.append(kata7)
for(let index = 20; index >= 2; index -= 2){
    if(index === 2){
        kata7.append(index)
    }else{
    kata7.append(index + ',')
  }
}



// Kata 8 Display the odd numbers from 20 to 1, counting backwards. (19, 17, 15, …, 3, 1)
let kata8 = document.createElement('div')
let kataEightHeading = document.createElement('h3')
kataEightHeading.append('Kata 8')
kata8.append(kataEightHeading)
kataList.append(kata8)
for(let index = 19; index >= 1; index -= 2){
    if(index === 1){
        kata8.append(index)
    }else{
    kata8.append(index + ',')
  }
}


// Kata 9 Display the multiples of 5, counting down from 100 to 1. (100, 95, 90, …, 10, 5)
let kata9 = document.createElement('div')
let kataNineHeading = document.createElement('h3')
kataNineHeading.append('Kata 9')
kata9.append(kataNineHeading)
kataList.append(kata9)
for(let index = 100; index >= 5; index -= 5){
    if(index === 5){
        kata9.append(index)
    }else{    
    kata9.append(index + ',')
    }
}


// Kata 10 Display the square numbers, counting down from 100. (100, 81, 64, …, 4, 1)
let kata10 = document.createElement('div')
let kataTenHeading = document.createElement('h3')
kataTenHeading.append('Kata 10')
kata10.append(kataTenHeading)
kataList.append(kata10)
for(let index = 100; index >= 1; index--){
    const indexIsPerfectSquare = Number.isInteger(Math.sqrt(index))
    if(indexIsPerfectSquare && index != 1){
      kata10.append(index + ',')
    }else if(indexIsPerfectSquare){
        kata10.append(index)
    }
  }


// Kata 11 Display the 20 elements of sampleArray. (469, 755, 244, …, 940, 472)
let kata11 = document.createElement('div')
let kataElevenHeading = document.createElement('h3')
kataElevenHeading.append('Kata 11')
kata11.append(kataElevenHeading)
kataList.append(kata11)
for(let index = 0; index < sampleArray.length; index++){
    kata11.append(sampleArray[index] + ' ')
}


// Kata 12 Display all the even numbers contained in sampleArray. (244, 758, 450, …, 940, 472)
let kata12 = document.createElement('div')
let kataTwelveHeading = document.createElement('h3')
kataTwelveHeading.append('Kata 12')
kata12.append(kataTwelveHeading)
kataList.append(kata12)
for(let index = 0; index < sampleArray.length; index++){
    if(sampleArray[index] % 2 === 0){
        kata12.append(sampleArray[index] + ' ')

    }
}


// Kata 13 Display all the odd numbers contained in sampleArray. (469, 755, 245, …, 179, 535)
let kata13 = document.createElement('div')
let kataThirteenHeading = document.createElement('h3')
kataThirteenHeading.append('Kata 13')
kata13.append(kataThirteenHeading)
kataList.append(kata13)
for(let index = 0; index < sampleArray.length; index++){
    if(sampleArray[index] % 2 != 0){
        kata13.append(sampleArray[index] + ' ')
    }
}

// Kata 14 Display the square of each element in sampleArray. (219961, 570025, …, 222784)
let kata14 = document.createElement('div')
let kataFourteenHeading = document.createElement('h3')
kataFourteenHeading.append('Kata 14')
kata14.append(kataFourteenHeading)
kataList.append(kata14)
for(let index = 0; index < sampleArray.length; index++){
    kata14.append((sampleArray[index] * sampleArray[index]) + ' ')
}


// Kata 15 Display the sum of all the numbers from 1 to 20.
let kata15 = document.createElement('div')
let kataFifteenHeading = document.createElement('h3')
kataFifteenHeading.append('Kata 15')
kata15.append(kataFifteenHeading)
kataList.append(kata15)
let result15 = 0
for(let index = 1; index <= 20; index++){
    result15 += index
}
kata15.append(result15)


// Kata 16 Display the sum of all the elements in sampleArray.
let kata16 = document.createElement('div')
let kataSixteenHeading = document.createElement('h3')
kataSixteenHeading.append('Kata 16')
kata16.append(kataSixteenHeading)
kataList.append(kata16)

let result16 = 0
for(let index = 0; index < sampleArray.length; index++){
    result16 += sampleArray[index]
}
kata16.append(result16)


// Kata 17 Display the smallest element in sampleArray.
let kata17 = document.createElement('div')
let kataSeventeenHeading = document.createElement('h3')
kataSeventeenHeading.append('Kata 17')
kata17.append(kataSeventeenHeading)
kataList.append(kata17)

let smallestElement = sampleArray[0]
for(let index = 0; index < sampleArray.length; index++){
    if(smallestElement > sampleArray[index]){
        smallestElement = sampleArray[index]
    }
}
kata17.append(smallestElement)


// Kata 18 Display the largest element in sampleArray.
let kata18 = document.createElement('div')
let kataEighteenHeading = document.createElement('h3')
kataEighteenHeading.append('Kata 18')
kata18.append(kataEighteenHeading)
kataList.append(kata18)
let largestElement = sampleArray[0]
for(let index = 0; index < sampleArray.length; index++){
    if(largestElement < sampleArray[index]){
        largestElement = sampleArray[index]
    }
}
kata18.append(largestElement)


// Display 20 solid gray rectangles, each 20px high and 100px wide.
let kata19 = document.createElement('div')
kata19.className = 'kata19container'
let kataNineteenHeading = document.createElement('h3')
kataNineteenHeading.append('Kata 19')
kata19.append(kataNineteenHeading)
kataList.append(kata19)

for(let index = 0; index < 20; index ++){
    let rectangle = document.createElement('div')
    rectangle.className = 'kata19'
    kata19.append(rectangle)
}

// Display 20 solid gray rectangles, each 20px high, with widths ranging evenly from 105px to 200px (remember #4, above).


// Display 20 solid gray rectangles, each 20px high, with widths in pixels given by the 20 elements of sampleArray.


// As in #21, but alternate colors so that every other rectangle is red.


// As in #21, but color the rectangles with even widths red.