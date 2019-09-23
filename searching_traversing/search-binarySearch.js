/* Binary Search, search for an element and returns the index of array if found and -1 if not found 
    Input array must be sorted for Binary Search
*/

function binarySearch( array,searchItem, start = 0 , end = array.length-1) {

    const mid = Math.floor((start + end)/2);

    if(end-start  < 0) {
        return -1;
    }

    if(array[mid] === searchItem) {
        return mid;
    } else if (searchItem < array[mid]) {
        return binarySearch(array, searchItem,start, mid-1);
    } else {
        return binarySearch(array,searchItem, mid+1, end);
    }  
    
}

var numbers = [3,5,8,10,20,35,41,67];
var searchTerm = 20;
var index = binarySearch(numbers,searchTerm);
console.log(index); //4
searchTerm = 60;
index = binarySearch(numbers, searchTerm);
console.log(index); //-1

/* 
    Time Complexity: O(logn)
    Space Complexity: O(1)
*/