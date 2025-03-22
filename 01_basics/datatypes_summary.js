//stack(primitive) , Heap(Non-primitive)

let myYoutubname = "hiteshchoudhary"

let anothername = myYoutubname

anothername = 'chaiaurcode'

console.log(myYoutubname);
console.log(anothername);

let userOne = {
    email: 'user@test.co',
    upi: '098755@yapl'
}

let userTwo = userOne

userTwo.email = "Khush@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);
