const nums = [1, 2, 3, 4, 5]

function doubleValues(arr) {
    let newArr = [];
    arr.forEach(function(val) {
      newArr.push(val * 2);
    });
    return newArr;
};

function EvenValues(arr){
  let newArr = [];
  arr.forEach(function(values){
    if(values % 2 === 0){
        newArr.push(values);
    }
    });
    return newArr;
};

const str = ['dog', 'cat', 'fish', 'bird'];

function showFirstAndLast(arr){ 
    let newArr = [];
    arr.forEach(function(animal){
    newArr.push(animal[0] + animal[animal.length - 1]);
});
    return newArr;
};

const colors = [
    {blue: 'boy'},
    {pink: 'girl'},
    {black: 'emo'}
];

function addKeyAndValue(arr, key, value) {
    arr.forEach(function(val) {
      val[key] = value;
    });
    return arr;
};

// Please help explain this one a bit, especially the last if statement.
function vowelCount(str){
    let splitArr = str.split("");
    let obj = {};
    const vowels = 'aeiou';
    
    splitArr.forEach(function(letter) {
        let lowerCasedLetter = letter.toLowerCase();
        if (vowels.indexOf(lowerCasedLetter) !== -1) {
          if (obj[lowerCasedLetter]) {
            obj[lowerCasedLetter]++;
          } else {
            obj[lowerCasedLetter] = 1;
          }
        }
      });
      return obj;
 };

//  Why do we need to return twice?
 function doublesWithMap(arr){
    return arr.map(function(value){
        return (value * 2);
    });
 };

//  How does this even work? How does it know what to do with the index and the value??
 function valTimesIndex(arr){
    return arr.map(function(value, index){
        return(value * index);
    });
 };

//  Please explain val[key].  
 function extractKey(arr, key){
    return arr.map(function(val){
        return val[key];
    });
 };

 function extractFullName(arr){
  return arr.map(function(val){
    return val.first + "" + val.last;
  });
 }

 function filterByValue(arr, key){
  return arr.filter(function(val){
    return val[key] !== undefined;
   });
 }

//  Please explain the index of 0 just chilling at the end of the code.
 function find(arr, searchValue){
  return arr.filter(function(val){
    return searchValue === val;
  })[0];
 }

 function findInObj(arr, key, searchValue){
  return arr.filter(function(val){
    return val[key] === searchValue;
  })[0];
 }

//  can you explain the order in which these operations are done? Also the join at the end.
function removeVowels(str){
  const vowels = "aeiou";
  return str.toLowerCase().split().filter(function(val){
    return vowels.indexOf(val) === -1;
  })
  .join("");
}


function doubleOddNumbers(arr){
  return arr.filter(function(val){
    return val % 2 !== 0;
  })
  .map(function(val){
    return val * 2;
  });
}