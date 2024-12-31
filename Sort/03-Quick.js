function quickSort(arr) {
    if (arr.length < 2) return arr
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

// TC
// Worst casse (if the array is already sorted) - O(n^2)
// Avg case - O(n log n)

let arr2 = [8, 22, -2, 4, -6]
console.log(quickSort(arr2)) 