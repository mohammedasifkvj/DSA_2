function sort(arr) {
    for(let i=1;i<arr.length;i++){
        let numberToInsert=arr[i]
        let j=i-1
        while(j>=0 && arr[j] > numberToInsert){
            arr[j+1]=arr[j]
            j=j-1
        }
        arr[j+1]=numberToInsert
    }
}

let arr2 = [8,22,-2,4,-6]
sort(arr2)
console.log(arr2);

// TC- O(n^2)