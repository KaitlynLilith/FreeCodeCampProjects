function rot13(str) {
    // Makes a string of uppercase alphabet characters
    const unshifted = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ';
    // Makes a string of uppercase alphabet characters shifted by 13
    const shifted = 'NOPQRSTUVWXYZABCDEFGHIJKLM ';
    // Makes an empty string for the result
    let decodedStr = '';
    // Makes a regular expression for all non-word characters
    let punc = /\W/;
  
    // For each letter in the argument string
    for (let i = 0; i < str.length; i++) {
        // If the string at location i is a non-word character
        if (punc.test(str[i])) {
            // Add the character to the result string
            decodedStr += str[i];
            // Otherwise,
        } else {
            // Find the index of the unshifted letter
            let found = unshifted.indexOf(str[i]);
            // Add the shifted letter, using the same index, to the result
            decodedStr += shifted[found];
        }
    }
    // Return the decoded string
    return decodedStr;
  }
  
//  Function calls required to pass the tests 
rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");