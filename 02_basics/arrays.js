//array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ['avenger', 'naagra']
const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1])

//array methods
myArr.push(6) //add values in array
myArr.pop() //remove last element

myArr.unshift(5) // shifts value: add at ones place
myArr.shift()

console.log(myArr.includes(9))
console.log(myArr.indexOf(3))

//convert to string
const newArr = myArr.join()

console.log(myArr)
console.log(typeof newArr)


//slice, splice
console.log('A', myArr)

const myn1 = myArr.slice(1, 3) // cuts values in range : last range not included
console.log(myn1)
console.log('B', myArr)

const myn2 = myArr.splice(1, 3) // removes tat range from original
console.log('C', myArr)
console.log(myn2)