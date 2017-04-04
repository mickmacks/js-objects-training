/*

  Create a function `letterCount` that accepts a string, and finds the number of times each letter
  occurs in the string. For example, given the word "apple", letterCount("apple") should count all
  occurrences of the letters "a", "p", "l" and "e" and then return the following output:

  ```javascript
  {
    "a": 1,
    "p": 2,
    "l": 1,
    "e": 1
  }
  ```

  Bonuses
  - Make sure that lower case letters and upper case letters count for the same character.
  - Ignore spaces, special characters, and punctuation.
  - Instead of just counting letters, calculate their percent-based frequency.
    See: http://www.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html

    ```javascript
    {
      "a": 0.2, // percent
      "p": 0.4,
      "l": 0.2,
      "e": 0.2
    }
    ```

*/

// YOUR CODE HERE

// Create a function that accepts a phrase
  function letterCounter(phrase) {

// Create an object to hold the values for each letter
    
  var word = phrase.split('');  
  let result = {};

// Loop through the phrase
  for (var i = 0; i < word.length; i++) {
       
      // if () {
      // i matches a letter in result
      // result[i] ++
      // add 1 to the value.
      // }

      if (result.word[i]) {

        result.word[i] += 1;
      }

      // else if () {
      // i does not match a letter in result

      // result[i].push(phrase[i]);

      // add it and set the value to 1
      // }

      else if (!result.word[i]) {

        result.push(word[i]);
        result.word[i] = 1;

      }
  } 

  // once the loop is complete, and result holds all proper values   
  // return result 
  return result

}

letterCounter('doggo');

// NON-PSUEDO VERSION:

  function letterCounter(phrase) {
    
  var letterArray = phrase.split('');
  var result = {};

  letterArray.forEach(function(letter) {
       
      if (result[letter]) {

        result[letter] += 1;

      } else {

        result[letter] = 1;

      }
  }); 

  return result;

}

letterCounter('doggo');