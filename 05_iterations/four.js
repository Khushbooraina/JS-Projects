const myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by app'
}

for (const key in myObject) {
   // console.log(`${key} shortcut is for ${myObject[key]}`);    
}


const prog = ['js', 'java', 'cpp']

for (const key in prog) {
    //console.log(prog); gives keys
   // console.log(prog[key]); //gives values
    
}

//forin loop gives keys in array


const map = new Map()
map.set('IN', "India")
map.set("USA", "United States of America")
map.set("FR", "France")



//map is not iterable
for (const key in map) {
   //console.log(key);
   
}



//