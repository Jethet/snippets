function getIndexToIns(arr, num) {
  
  let sortArr = arr.sort(function(a, b){return a-b})
  
 
  let newArr = []
  for(let i = 0; i <= arr.length; i++) {
    if (arr[i] < num) {
      newArr.push(arr[i])
    } else {
    num = newArr.length
  }
  }
  return num;
}

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN. Check these with:
if (value) {
  // do something
  }

// Dividing arrays: the Array instance splice() method:
const list = [1, 2, 3, 4, 5, 6]
const half = Math.ceil(list.length / 2);

const firstHalf = list.splice(0, half)
const secondHalf = list.splice(-half)


//Remove LAST char of string: (slice does not alter original array, create new)
const text = 'abcdef'
const editedText = text.slice(0, -1) //'abcde'

//Remove FIRST char of string:
const text = 'abcdef'
const editedText = text.slice(1) //'bcdef'
