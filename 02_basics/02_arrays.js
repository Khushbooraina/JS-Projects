const marvelHeros = ['thor', 'Ironman', 'Spiderman']
const dcHeros = ['superman', 'flash', 'batman']

//marvelHeros.push(dcHeros)
// console.log(marvelHeros)
// console.log(marvelHeros[3][1])

//merge arrays: conccat gives one value
const heros = marvelHeros.concat(dcHeros)
// console.log(heros)

//spread operator: multiple values
const allHeros = [...marvelHeros, ...dcHeros]
// console.log(allHeros)

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const realAnotherArr = anotherArr.flat(Infinity)
// console.log(realAnotherArr)


console.log(Array.isArray('helloe'))
console.log(Array.from('hello'))
console.log(Array.from({name: 'khushboo'})) //gives empty if not mentioned how to make array

let score1 = 100
let score2= 200
let score3 = 300

//Arrays.of: returns new array from set of elements
console.log(Array.of(score1, score2, score3))