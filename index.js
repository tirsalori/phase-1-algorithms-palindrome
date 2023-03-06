function isPalindrome(word) {
  let newString = ""
  for (let i = word.length-1; i >= 0; i--) {
    newString += word[i]
  }
  if (newString === word) {
    return true
  } else {
    return false
  }
}

isPalindrome("robot")

if (require.main === module) {

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
