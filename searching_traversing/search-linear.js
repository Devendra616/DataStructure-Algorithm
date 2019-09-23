/* Linear Search for an element and returns the index of array if found and -1 if not found*/

function linearSearch( array, searchItem) {

    const arrLength = array.length;
    
    if(arrLength >0) {
        for(let index=0; index< arrLength; index++) {
            if(array[index] === searchItem) {
                return index;
            }
        }
    }
    return -1;
}

var numbers = [5,4,7,0,5,2,3,44,22,47,30];
var searchTerm = 2;
var index = linearSearch(numbers, searchTerm);
console.log(index); //5
searchTerm = 60;
index = linearSearch(numbers, searchTerm);
console.log(index); //-1

/* 
    Time Complexity: O(n)
    Space Complexity: O(1)
*/