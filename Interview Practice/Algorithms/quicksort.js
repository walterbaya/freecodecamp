/*Here we will move on to an intermediate sorting algorithm: quick sort. Quick sort is an efficient, 
recursive divide-and-conquer approach to sorting an array.
In this method, a pivot value is chosen in the original array.
The array is then partitioned into two subarrays of values less than and greater than the pivot value. We then combine the result of recursively calling the quick sort algorithm on both sub-arrays. This continues until the base case of an
empty or single-item array is reached, which we return. The unwinding of the recursive calls return us the sorted array.

Quick sort is a very efficient sorting method, providing O(nlog(n)) performance on average. It is also relatively easy to implement. These attributes make it a popular and useful sorting method.

Instructions: Write a function quickSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest. While the choice of the pivot value is important, any pivot will do for our purposes here. For simplicity, the first or last element could be used.
 */

function quickSort(array) {

    // Only change code below this line
    if(array.length < 2 || array.length!=0 && array.every((el) => el==array[0])){
        return array;
    }
    else{
        let array1 = new Array();
        let array2 = new Array(); 

        //get random element and set it as pivot. 
        let pivot = Math.floor(Math.random() * (array.length));

        //the array is then partitioned into two subarrays
        for (let i = 0; i < array.length; i++) {
            if(array[i] < array[pivot]){
                array1.push(array[i]);
            }
            else{
                array2.push(array[i]);
            }
        }

        let arrayFirst = quickSort(array1);
        let arraySecond = quickSort(array2);    
        return arrayFirst.concat(arraySecond);
    }
  }

  console.log(quickSort([3,2,1,1]));