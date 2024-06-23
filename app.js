  // 1-masala
    // function mapFilterToUse(arg) {
    //     let res;
    //     res = arg.filter(function(value) {
    //         return value.length >= 5;
    //     })
    
    //     res = res.map(function(value) {
    //         return value.toUpperCase()
    //     })
    
    //     return res;
    // }
    // console.log(mapFilterToUse(["salom","bye","world","good","funksiya"]));

//2-masala
// function findMaptouse(arg) {
//   let A ;
//   arg.find(function (value) {
//     A = value.name
//     return value.age > 20;
//   });

//   A = A.toUpperCase();
//   return A;
// }
// console.log(findMaptouse([
//     {name:"sardor",age:17},
//     {name:"ali",age:20},
//     {name:"baxrom",age:15},
//     {name:"valenin",age:21}
// ]));

//3-masala
// function filterreducetouse(arg) {
//   let res;
//   res = arg.filter(function (value) {
//     return value.price > 100;
//   });

//   res = res.map(function (value) {
//     return value.price;
//   });

//   let result = 0;
//    res.forEach(function(value) {
//     result += value
//   })

//   return result;
// }
// console.log(
//   filterreducetouse([
//     { name: "apple", price: 95 },
//     { name: "orange", price: 150 },
//     { name: "banan", price: 130 },
//     { name: "peach", price: 105 },
//     { name: "apricot", price: 85 },
//   ])
// );

//4-masala
// function someEverytouce(arg) {
//     let res;
//     res = arg.every(function(value) {
//         return value > 0;
//     })

//     let A = arg.some(function(value) {
//         return value > 100;
//     })

//     let result = ${res}, ${A}

//     return result;
// }
// console.log(someEverytouce([2,5,8,12,29,46,78,100,10]));

//5-masala
// function mapforEachtouce(arg) {
//     let res;
//     res = arg.map(function(value) {
//         return value  2;
//     })

//     res.forEach(function(value) {
//         console.log(value);
//     })

//     return res;
// }

// mapforEachtouce([2,3,5,8,12,29])


//6-masala
// function mapfilterreducetouce(arg) {
//     let res;
//     res = arg.filter(function(value) {
//         return value < 2000;
//     })

//     let A = res.map(function(value) {
//         return value = value + (value*10)/100
//     })

//     return A;
// }
// console.log(mapfilterreducetouce([1200,2000,2010,2500,1500,1900,1700]));

//7-masala
// function mapfilterfindtouce(arg) {
//     let res;
//     let n = arg.find(function(value) {
//         return value.ball > 80
//     })

//     let A = ${n.name} , ${n.age}

//     res = arg.filter(function(value) {
//         return value.ball > 80;
//     })

//     res.forEach(function(value) {
//         console.log(value.name.toUpperCase());
//     })

//     return A ;
// }
// console.log(mapfilterfindtouce([
//     {name:"Ali",age:19,ball:85},
//     {name:"Vali",age:20,ball:75},
//     {name:"Qobil",age:18,ball:95},
//     {name:"Sherzod",age:19,ball:80},
//     {name:"Umid",age:21,ball:70},
//     {name:"Ilhom",age:26,ball:84}
// ]));
//string
//1-masala
// let a = 'salom anor maktab';
// let b = a.toUpperCase();
// console.log(b);

// 2-masala
// function includescheck(arg) {
//     let res;
//     res = arg.includes("substring")

//     return res;
// }
// console.log(includescheck("substring mainstring substr upperstring"));

//3-masala
// function JavaScriptreplasetoJS(arg) {
//   let res;
//     res = arg.replaceAll("JavaScript","JS")
//   return res;
// }
// console.log(JavaScriptreplasetoJS("JavaScript Lorem ipsum dolor JavaScript sit amet, consectetur JavaScript adipisicing elit JavaScript"));


