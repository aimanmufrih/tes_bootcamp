
function count_vowels(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}
console.log(count_vowels('programmer', 'r'));

//source
/*
https://www.w3resource.com/javascript-exercises/javascript-function-exercise-22.php
*/