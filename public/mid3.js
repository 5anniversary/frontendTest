let persons1 = []
let persons2 = []

for (var i = 0 ; i < 3 ; i++){
    let person = {name : "홍길동", age: 16+i }
    persons1.push(person)
}

persons2 = persons1

persons1[0].age = 20

console.log(persons1)
console.log(persons2)
