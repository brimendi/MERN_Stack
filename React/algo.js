/**
 * Venn Diagram Visualization (bottom):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * https://www.researchgate.net/publication/332453167/figure/fig1/AS:748486492450816@1555464494152/A-Venn-diagram-of-unions-and-intersections-for-two-sets-A-and-B-and-their-complements.png
 */

// For Intersection
const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7]; //repeated: 2, 2, 7
const expected1 = [2, 7];// return the distinct intersect numbers

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
const expected3 = [];


/**
 * Efficiently combine the two sorted arrays into a new array that is the a
 * sorted set intersection.
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
function orderedIntersection(sortedA, sortedB) {
    let arr = []
    let leftPointer = 0;
    let rightPointer = 0;
    while (leftPointer < sortedA.length && rightPointer < sortedB.length) {
        if(sortedA[leftPointer] < sortedB[rightPointer]){
            arr.push(sortedA[leftPointer]);
            leftPointer++;
            if (sortedA[leftPointer] > sortedB[rightPointer]) {
                    leftPointer++;
                }
                else {
                    arr[index] = sortedA[leftPointer];
                    leftPointer++;
                    rightPointer++;
                    index++;
                }
            }


}
return arr
    }

console.log(orderedIntersection(numsA1, numsB1))
console.log(orderedIntersection(numsA2, numsB2))
console.log(orderedIntersection(numsA3, numsB3))

// For Union
const numsA4 = [1, 2, 2, 2, 7];
const numsB4 = [2, 2, 6, 6, 7];
const expected4 = [1, 2, 2, 2, 6, 6, 7];

const numsA5 = [1, 2, 2, 2, 7, 10, 15, 20];
const numsB5 = [2, 2, 6, 6, 7];
const expected5 = [1, 2, 2, 2, 6, 6, 7, 10, 15, 20];

/**
 * Combines two already sorted multiset arrays into an ordered multiset union
 * Venn Diagram Visualization (top):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA Both sets are sorted multisets
 *    (contain dupes).
 * @param {Array<number>} sortedB
 * @returns {Array<number>} An ordered multiset union of the given sets.
 *    The return should include dupes, but the amount of dupes for each int
 *    should be based on the max amount that dupe appears from one set,
 *    not the combined amount from both sets.
 */
function orderedMultisetUnion(sortedA, sortedB) {

}



// bonus algo: 

/**
  * Complete the intersection & union algo with 2 unsorted arrays 
  * Try to complete the algo with O(n) time complexity
*/




// function merge(left = [], right = []) {
//     let arrC = []
//     let leftpointer= 0 ;
//     let rightpointer = 0;
//     while (leftpointer < left.length && rightpointer < right.length) {
      
//       if(left[leftpointer] < right[rightpointer]){
//         arrC.push(left[leftpointer]);
//         leftpointer++;
//       }
//       else{
//         arrC.push(right[rightpointer]);
//         rightpointer++;
//       }
      
//     }
//     if(leftpointer < left.length){
//       for(let i=leftpointer;i<left.length;i++){
//         arrC.push(left[i]);
//       }
//     }
//     else{
//       for(let j=rightpointer;j<right.length;j++){
//         arrC.push(right[j]);
//       } 
//     }
//     return arrC;
//   }