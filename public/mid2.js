let min = 1
let max = 100
let arr = [] 

for (let i = 0 ; i < 100; ++i){
    let n = Math.floor(Math.random() * (max - min + 1) + min)
    arr[i] = n 
    result = arr[i] + result    
}

arr.sort(sortArr)
console.log(arr)

function sortArr(j, i) {
	return i-j
}