console.log("Sesion2");

// const baseArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//
// console.log(baseArray);
//
// let changedArray = baseArray.map((value) => value * value).reduce((a, b) => {
//     console.log(a, b);
//     return a + b;
// });
//
// console.log(changedArray);
// let sixMemberArray = [1, 2, 3, 4, 5, 6]
//
// console.log(sixMemberArray);
//
// sixMemberArray[10] = 8
//
// console.log(sixMemberArray);
//
// for (let item of sixMemberArray) {
//     console.log(item);
// }

// const students = ["Marc", "John", "Peter", "Mary"]
//
// console.log(students);
//
// const studentsINSO = students.map(student => {
//     return {
//         name: student,
//         group: "INSO"
//     }
// })
//
// console.log(studentsINSO);
//
// const numberArray = [-2, -1, -5, 6, 7, -19.2, 3, 56, 9, "10"]
// console.log(numberArray);
//
// const filteredArray = numberArray.filter(number => (number > 0) && (typeof number == "number"))
// console.log(filteredArray)
//
// const mappedArray = numberArray.map(number => number + number)
// console.log(mappedArray);
//
// const forEachedArray = numberArray.forEach(number => {
//     return number + number
// })
// console.log(forEachedArray);
//
// function foo(number = 10) {
//     return number * number
// }
//
// console.log(foo());
// console.log(foo(5));
//
// function restFunct(number = 10, ...myParams) {
//     return myParams.map(value => number * value)
// }
//
// console.log(restFunct());
// console.log(restFunct(10, 2, 3, 4, 5, 6, 7, 43, 4, 3, 53, 53, 5, 35));
//
// const obj = {
//     name: "John",
//     age: 20,
//     group: "group1"
// }
// console.log(obj);
// const {name, ...rest} = obj;
// console.log(name)
// console.log(rest)

// const arr = [1, 2, 3, 4, 5, 6, 7]
// const arr1 = arr
// const arr2 = [...arr]
//
// console.log("Array base: " + arr)
// console.log("Array 1: " + arr1)
// console.log("Array 2: " + arr2)
//
// arr[0] = 27
//
// console.log("Array base: " + arr)
// console.log("Array 1: " + arr1)
// console.log("Array 2: " + arr2)

let arr1 = [1, 2, 3]
let arr2 = [3, 4, 5, 1, 2, 3, 4, 5, 6, 3, 42, 5, 53, 63, 6, 32, 4, 4, 24, 53, 534, 63, 45, 3, 2, 32, 43, 5, 6]

let arrComb = [...arr1, ...arr2]

console.log(arrComb)

let existing = []
arrComb = arrComb.filter(item => {
    if (existing.find(itemPresent => itemPresent === item) === undefined) {
        existing.push(item)
        return true
    }
    return false
})

console.log(arrComb)
