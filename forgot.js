// function pigIt(str){

//     var array = str.split(" ")
//     var subFinal = []
    
//     for (var i = 0; i < array.length; i++) {

//         if (array[i].charAt(0).match(/[a-z]/i)) {

//             var temp = array[i].split("")
//             var letter = temp.shift()
//             temp.push(letter, 'a', 'y')
//             newJoin = temp.join("")
//             subFinal.push(newJoin)

//         } else {
//             subFinal.push(array[i])
//         }
        
//     }

//     var final = subFinal.join(' ')
//     console.log(final)

//   }

//   console.log(pigIt('how are you today ?'))

// var brian = 'brian'
// var week = 'weekssyy'
// var choss = brian.concat(week)
// console.log(choss)


////////////////////////////////////
//////////////////////////////////////
//ABC THREAD REDUCER//////////////////
//////////////////////////////////////

// function StringReduction(str) { 

//     var stringLength;
  
//     ///FUNCTION TO CHECK IF STRING IS REDUCED
//     function isReduced(string) {
  
//       if (string.length === 1) {
//         return true
//       }
  
//       const array = string.split("");
  
//       let isTrue = true;
//       for (var i = 0; i < array.length - 1; i++) {
        
//         if (array[i] === array[i + 1]) {
//           isTrue = true;
//         } else {
//           isTrue = false;
//         }
  
//         if (!isTrue) {
//           break;
//         }
//       }
  
//       return isTrue;
  
//     }
//             // i     2    j   0
//     ///FUNCTION TO REDUCE STRING
//     function innerReduction(string) {
  
//       let newString = "";
//       let j = 0;
//       const array = string.split("");
  
//       for (var i = 0; i < array.length; i++) { ///aaab
  
//         if (array[i + j] != undefined && array[i + j] === array[i + j + 1]) {
  
//           newString += array[i + j];
          
//         } else if (array[i + j] && array[i + j + 1] === undefined) {

//           newString += array[i + j]

//         } else if (j + i < array.length && array[i + j] === array[i + j + 1]) {
          
//           newString += array[i + j]
//           j++
  
//         } else if ((array[i + j] === 'a' || array[i + j] === 'b') && (array[i + j + 1] === 'a' || array[i + j + 1] === 'b')) {
  
//           newString += 'c';
//           j++
  
//         } else if ((array[i + j] === 'b' || array[i + j] === 'c') && (array[i + j + 1] === 'b' || array[i + j + 1] === 'c')) {
  
//           newString += 'a';
//           j++
  
//         } else if ((array[i + j] === 'a' || array[i + j] === 'c') && (array[i + j + 1] === 'a' || array[i + j + 1] === 'c')) {
  
//           newString += 'b';
//           j++
//         }
//       }    
  
//       if (isReduced(newString)) {

//         stringLength = newString.length
        
//       } else {

//         innerReduction(newString)
//       }
  
//       return stringLength;
//     }
  
    
    
//    return innerReduction(str)
    
    
    
  
//   }
  
//   console.log(StringReduction('cab'));

/////////////////// ^^^^^^^^^^^^^^^^^
  ////////////////////////////////////
//////////////////////////////////////
//ABC THREAD REDUCER//////////////////
//////////////////////////////////////

// function solution(a,b) {

//   var answer = '';
//   a.length > b.length ? answer += b + a + b : answer += a + b + a;

//   return answer;
// }

// console.log(solution('22', '1'))

// function fakeBin(x){

//   var answer = '';
//   for (var i = 0; i < x.length; i++) {
//     x[i] < 5 ? answer += '0' : answer += '1'
//   }

//   return answer

// }

// console.log(fakeBin('123456'))

// function sakuraFall(v) {
//   if (v <= 0) {
//     return 0
//   }

//   return 400/v
// }

// function isDivisible(n, x, y) {
//   var bool
//   (n % x) + (n % y) === 0 ? bool = true : bool = false;
//   return bool
// }

// console.log(isDivisible(16, 2, 4))

// function litres(time) {
//   return Math.floor(time * .5)
// }

// console.log(litres(3))

// function capitalizeWord(word) {
//   return word.charAt(0).toUpperCase() 
  
// }

// function capitalizeWord(word) {
//   return word[0].toUpperCase() + word.substr(1);
  
// }

// console.log(capitalizeWord('word'));

// function findMultiples(integer, limit) {
//   var array = [];
//   var number = integer
//   array.push(integer)
//   for (var i = 0; i < limit; i++) {
//     if (number + integer <= limit) {
//       number = number + integer
//       array.push(number)
//     }
//   }

//   return array;
// }

// console.log(findMultiples(3,21))


// function towerBuilder(nFloors) {
//   var tower = [];
//   for (var i = 0; i < nFloors; i++) {
//     tower.push(" ".repeat(nFloors - i - 1)
//              + "*".repeat((i * 2)+ 1)
//              + " ".repeat(nFloors - i - 1));
//   }
//   return tower;
// }

// console.log(towerBuilder(6))
function topThreeWords(text) {

}


