// Maps and Sets Exercise
// Quick Question #1
// What does the following code return?

new Set([1,1,2,2,3,4]) // {1, 2, 3, 4}

// Quick Question #2
// What does the following code return?

[...new Set("referee")].join("") // "ref"

// Quick Questions #3
// What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

// 0: {array(3) => true}
// 1: {array(3) => false}

// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

//function takes in array, creates a new set which removes duplicates and compares it to the original array's length and if it's the same size then there are no duplicates, if not then there are duplicates and it returns true 
const hasDuplicate = arr => new Set(arr).size !== arr.length
// function hasDuplicate(arr) {
//     return arr.forEach(val).includes(val) ? false : true;
// }
hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false


// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

// function isVowel takes in a character, checks if it is a vowel and returns true if it does and false if it doesn't
function isVowel(char) {
    return "aeiou".includes(char);
}

function vowelCount(str) {
    // setup vowelMap to store vowels and vowel count
    const vowelMap = new Map();
    //use for of loop to loop through the string one character at a time
    for(let char of str) {
        // convert character to lowercase to equalize vowels for isVowel function to work
        let lowerCase = char.toLowerCase();
        //check if character is a vowel
        if(isVowel(lowerCase)) {
            //if char is a vowel, set it into vowelMap as the first value, as {'vowel' => number of times seen + 1} and increment it to the checked vowel
            vowelMap.set(lowerCase, vowelMap.get(lowerCase) + 1);
        } else {
            // if vowel has not been seen yet in vowelMap set it to 1 and increment it if seen again.
            vowelMap.set(lowerCase, 1)
        }
    }
    return vowelMap
}

// function vowelCount(string) {
//     const vowels ='aeiou';
//     let myMap = new Map(string);
//     for(let letter of myMap) {
//         if(letter.includes(vowels)){
//             myMap[letter]++;
//         } else {
//             myMap[letter] = 1;
//         }
//     }
//     return myMap;
// }

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }