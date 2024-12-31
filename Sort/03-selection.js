// Selection Sort 
// Selection Sort is an in-place comparison-based sorting algorithm.
// It divides the input list into two parts: a sorted subset at the beginning and an unsorted subset at the end.
// It repeatedly selects the smallest (or largest, depending on sorting order)
// element from the unsorted subset and moves it to the end of the sorted subset.

function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap the elements
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

// Example usage:
let arr = [5, 6, 8, 4, 6, 7, 2, 3, 1];
let sortedArr = selectionSort(arr);
console.log("Sorted array:", sortedArr);
