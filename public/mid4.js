function sum(element){
    let result = 0
    for(let i=0; i<element.length ; i++){
        result = result + element[i]
    }
    return result
}

function test_sum(f){
    let min = 0
    let max = 10
    let arr = [] 
    for(let i=0; i<5; i++){
        let n = Math.floor(Math.random() * (max - min + 1) + min)
        arr[i] = n     
    }
    let result = f(arr)
    console.log(result)
}

for(let i=0; i<5; i++){
    test_sum(sum)
}
