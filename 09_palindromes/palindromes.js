const palindromes = function (palindrome) {
  palindrome = palindrome.toLowerCase();
  palindrome = palindrome.replace(/[^a-z0-9]/gi, "");
  palindrome = palindrome.split("");
  forwardPalindrome = [...palindrome];
  forwardPalindrome = forwardPalindrome.join("");
  palindrome.reverse();
  palindrome = palindrome.join("");
  console.log(forwardPalindrome);
  console.log(palindrome);

  return forwardPalindrome == palindrome;
};

// Do not edit below this line
module.exports = palindromes;
