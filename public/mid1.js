let min = 1
let max = 100
let arr = [] 
let result = 0

for (let i = 0 ; i < 100; ++i){
    let n = Math.floor(Math.random() * (max - min + 1) + min)
    arr[i] = n 
    result = arr[i] + result    
}

result = result/100
result = Math.floor(result*10)/10

console.log(result)