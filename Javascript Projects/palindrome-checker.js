function palindrome(str) {
  // Makes a new string that replaces all non-word characters and underscores in the argument string with nothing and turns the string to lowercase
  const newStr = str.replaceAll(/\W/gi, '').replaceAll(/_/gi, '').toLowerCase();
  
  // Reverses the new string
  const revArr = newStr.split('').reverse().join('');

  // Returns true if both strings match
  return newStr === revArr;
}

// should return true
palindrome("eye");

// should return true
palindrome("_eye");

// should return true
palindrome("race car");

// should return false
palindrome("not a palindrome");

// should return true
palindrome("A man, a plan, a canal. Panama");

// should return true
palindrome("never odd or even");

// should return false
palindrome("nope");

// should return false
palindrome("almostomla");

// should return true
palindrome("My age is 0, 0 si ega ym.");

// should return false
palindrome("1 eye for of 1 eye.");

// should return true
palindrome("0_0 (: /-\ :) 0-0");

// should return false
palindrome("five|\_/|four");