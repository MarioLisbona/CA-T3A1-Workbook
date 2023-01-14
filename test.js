// let models = Array.from([11, 22, 33, 44], (x,i) => 'hi' + x)
// console.log(models)



// let names = ['Mario', 'Ali', 'Coda', 'Alana', 'Luke', 'Jay', 'Ollie', 'Spek']

// for (i=0; i<names.length; i++) {
//     console.log(names[i])
// }

// let names = ['Mario', 'Ali', 'Coda', 'Alana', 'Luke', 'Jay', 'Ollie', 'Spek']

// while (names.length > 0) {
//  const family = names.pop()
//  console.log(family)
// }

// let yourAge
// do {
//     yourAge = prompt('How old are you?')
// } while (!yourAge)
// console.log(yourAge)


// let petName = prompt('Enter a pet name')
// if (petName == 'Coda') {
//     console.log('You have the same name as my pet!!')
// } else if (petName == 'Koda') {
//     console.log('Your pet\'s name sounds the same as mine but is spelled differently!!')
// } else {
//     console.log('Your pet has a different name to mine')
// }


// switch (prompt('Enter a family member name...')) {
//     case 'Mario':
//         console.log('Thats me!')
//         break
//     case 'Ali':
//         console.log('Thats my wife')
//         break
//     case 'Coda':
//         console.log('Thats our cat!')
//         break
//     case 'Alana':
//         console.log('Thats my sister!')
//         break
//     case 'Luke':
//         console.log('Thats my brother-in-law!')
//         break
// }


// function display(result) {
//     console.log(`The addition result is ${result}`)
// }

// function addition(maxValue, callback) {
//     let result = 0
//     for (i=0; i <= maxValue; i++) {
//         result += i
//     }
//     callback(result)
// }

// addition(10000, display)
// console.log('code after addition function')


// const promise1 = new Promise((resolve, reject) => {
//     let result = 0
//     for (i=0; i <= 1000000000; i++) {
//         result += i
//     }
//     resolve(`Success! - The value of result is ${result}`)
// })

// promise1.then((value) => console.log(value))
// console.log('after promise')
// console.log('after promise')
// console.log('after promise')
// console.log('after promise')
// console.log('after promise')


// const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')

// console.log(fetchPromise)

// fetchPromise
//     .then((response) => console.log(`Received response: ${response.status}`))

// console.log("Started request…")



// function adder(x, y) {
//     return x + y
// }

// console.log(adder(55, 100))

// console.log('Hello from after the adder function')


// function adder(x, y, callback) {
//         callback(x + y) 
// }

// adder(55, 100, result => console.log(result))

// console.log('Hello from after the adder callback function')

// function adder(x, y, callback) {
//     setTimeout(() => callback(x + y), 3000)
// }

// adder(55, 100, result => console.log(result))

// console.log('Hello from after the adder callback function with a setTimeout')


> let name = 'Mario'
undefined
> if (name) {
    console.log(`Your name is ${name})
    }