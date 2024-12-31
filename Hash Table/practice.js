function quickSort(arr){
    if(arr.length<2) {
        return arr
    }

    let pivot=arr.length-1
    let left=[]
    let rigth=[]

    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            rigth.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(rigth)]
}


function selectionSort(arr){
    let n=arr.length

    for (let i = 0; i < n; i++) {
        let midIndex=i
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[midIndex]){
                midIndex=j
            }
            [[arr[i],arr[midIndex]]]=[arr[midIndex],arr[i]]
        }
        
    }
    return arr
}

let arr=[8,-2,10,-6,20]
console.log(quickSort(arr));
