"use strict"

//#region Recursive
// console.log(getSumOfNumbers(4));

// function getSumOfNumbers(num) {

//     let res = 0;

//     if (num == 1) {
//         return num;
//     } else {
//         return num + getSumOfNumbers(num - 1)
//     }
// }


// console.log(factorial(3));

// function factorial(num) {
//     if (num == 1) {
//         return num;
//     } else {
//         return factorial(num - 1) * num
//     }
// }
//#endregion

//#region Loops, copyArray 


// numbers.forEach((element, index) => {
//     console.log(`Element: ${element} Index: ${index}`);
//     numbers[index] = element * 2
// });

// console.log(numbers);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]


// for (const item of numbers) {
//     console.log(item);
// }

// for (const key in user1) {
//     console.log(key + " - " + user1[key]);
// }

//for (const item of users) {
//     for (const key in item) {
//         console.log(key + " " + item[key]);
//     }
// }

//users.forEach((element, index) => {
//     for (const key in element) {
//         console.log(key + " " + element[key] + " " + index);
//     }
// });

// for (const item of users) {
//     for (const key in item) {
//         if (key == "surname") {
//             console.log(key + item[key]);
//         }
//     }
// }

//let result = numbers.map(m=>{
//     return m*2
// })

// for (const item of users) {
//     if (item.age > 20) {
//         console.log(`${item.name} ${item.surname}`);
//     }
// }
//

// function getNumbers(n, m, ...arr) {
//     for (const item of arr) {
//         console.log(item + "/" + n + "/" + m);
//     }
// }

// getNumbers(1, 2, 3, 4, 5)

// let copyArray = [...numbers]
// console.log(copyArray);

// const showAverageByAge = (users) => {
//     let sum = 0;
//     let cnt = 0;
//     for (const item of users) {
//         cnt++;
//         sum += item.age
//     }
//     console.log(sum / cnt);
// }

// showAverageByAge(users)

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max)
// }

// console.log(getRandomInt(10));


let user1 = {
    name: "Murad",
    surname: "Jafarov",
    age: 18,
    email: "murad@gmail.com"
}
let user2 = {
    name: "Musa",
    surname: "Afandiyev",
    age: 20,
    email: "musa@gmail.com"
}
let user3 = {
    name: "Cavid",
    surname: "Basirov",
    age: 22,
    email: "cavid@gmail.com"
}
let user4 = {
    name: "Novreste",
    surname: "Aslanzade",
    age: 24,
    email: "novreste@gmail.com"
}
let user5 = {
    name: "Lale",
    surname: "Quliyeva",
    age: 26,
    email: "lale@gmail.com"
}


let users = [user1, user2, user3, user4, user5]


//#endregion

//#region Delegate

// function sumOfOdd(...arr) {
//     let sum = 0
//     for (const item of arr) {
//         if (item % 2 == 1) {
//             sum += item
//         }
//     }
//     console.log(sum);
// }

// sumOfOdd(1,2,3,4,5,6,7,8)


// const sumOfOdd = num => num % 2 == 1

// const sumOfEven = num => num % 2 == 0

// const checkThanFive = num => num > 5


// function sumOfNumbersByCondition(numbers, callback) {
//     let sum = 0;
//     for (const item of numbers) {
//         if (callback(item)) {
//             sum += item;
//         }
//     }
//     return sum;
// }

// console.log(sumOfNumbersByCondition(numbers, sumOfOdd));

// console.log(sumOfNumbersByCondition(numbers, sumOfEven));

// console.log(sumOfNumbersByCondition(numbers, checkThanFive));



// function checkAge(obj) {
//     return obj.age > 18;
// }

// function checkName(obj) {
//     return obj.name == "Novreste";
// }

// function getDatasByFilter(users, callback) {
//     for (const item of users) {
//         if (callback(item)) {
//             console.log(`${item.name} ${item.surname} ${item.age}`);
//         }
//     }
// }


// getDatasByFilter(users, checkAge)
// getDatasByFilter(users, checkName)


// function checkEmail(obj) {
//     for (let i = 0; i < obj.email.length; i++) {
//         if (obj.email[i] == "m") {
//             return true;
//         }
//         return false;
//     }
// }

// getDatasByFilter(users, checkEmail)

// getDatasByFilter(users, m => m.age > 20)

// getDatasByFilter(users, m => m.name == "Novreste")


// let result = users.filter(m=>m.name == "Novreste")

// console.log(result);









//#endregion

//#region HomeTask


function allInfo(Array) {
    let res = 0;
    let date = new Date().getFullYear()

    for (const item of Array) {
        if (item.age > 20) {
            res = date - item.age
            console.log(`${res} ${item.name} ${item.surname}`);
        }
    }
}

allInfo(users)

//#endregion




