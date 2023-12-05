function insertInMiddle(arr1, arr2) {
    // calculate middle index
    let midIndex = Math.floor(arr1.length / 2);
    let newArr = [];
   
    // populate the new array with the first half of arr1
    for(let i = 0; i < midIndex; i++) {
        newArr.push(arr1[i]);
    }
   
    // insert all elements from arr2
    for(let i = 0; i < arr2.length; i++) {
        newArr.push(arr2[i]);
    }
   
    // insert the rest of the elements from arr1
    for(let i = midIndex; i < arr1.length; i++) {
        newArr.push(arr1[i]);
    }

    return newArr;
}

let arr1 = [1, 7];
let arr2 = [4, 5, 6];

console.log(insertInMiddle(arr1, arr2)); // [1, 4, 5, 6, 7]