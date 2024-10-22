function sort(arr) {
    let swapped
    do{
        swapped=false
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            let temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
            swapped=true
        }
    }
   }while(swapped)
}

let arr2 = [8,22,-2,4,-6]
sort(arr2)
console.log(arr2);

// TC- O(n^2)

// Anther Method
function bubbleSort1(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Example usage
console.log(bubbleSort1([64, 34, 25, 12, 22, 11, 90]));
