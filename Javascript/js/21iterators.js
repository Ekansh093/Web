

function sabji(array) {
    let nextIndex = 0;

    return {

        next: function() {
            if (nextIndex < array.length) 
            {
                return {
                    value: array[nextIndex++],
                    done: false
                }
            }
            else 
            {
                return {
                    done: true
                }
            }
        }
    }
}


const arr = ["Bhindi", "Karele", "Tinde", "Kofte"];
console.log(arr);
const sb = sabji(arr)

console.log(sb.next().value);






// console.log('The file is tutorial 51');
// // Iterators

// function fruitsIterator(values) {
//     let nextIndex = 0;
//     // we will return an object
//     return {
//         next: function () {
//             if (nextIndex < values.length) {
//                 // We will return below object
//                 return {
//                     value: values[nextIndex++],
//                     done: false
//                 }
//             }
//             else {
//                 // We will return below object with only done
//                 return {
//                     done: true
//                 }
//             }
//         }
//     }
// }


// const myArray = ['Apples', 'Grapes', 'Oranges', 'Bhindi'];
// console.log("My array is ", myArray)

// // Using the iterator
// const fruits = fruitsIterator(myArray);
// console.log(fruits.next().value)
// console.log(fruits.next().value)
// console.log(fruits.next().value)
// console.log(fruits.next().value)
// console.log(fruits.next().value)
