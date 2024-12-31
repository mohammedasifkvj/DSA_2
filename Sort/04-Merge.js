function mergeSort(arr) {
    if(arr.length < 2) return arr

    const mid=Math.floor(arr.length/2)
    const left =arr.slice(0,mid)
    const right =arr.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right) {
    const sortedArr=[]
    while(left.length && right.length){ // each length is positive
        if(left[0]<=right[0]){
            sortedArr.push(left.shift())  // remove from left array & add to sortedArr
        }else{
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr,...left,...right]

}

let arr2 = [8, 22, -2, 4, -6]
console.log(mergeSort(arr2)) 