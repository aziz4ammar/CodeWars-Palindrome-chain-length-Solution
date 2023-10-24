function isPalindrome(number) {
    const strNumber = String(number);
    const reversedStr = strNumber.split('').reverse().join('');
    return strNumber === reversedStr;
  }
  
  function palindromeChainLength(n) {
    let steps = 0;
    
    while (!isPalindrome(n)) {
      const reversedN = parseInt(String(n).split('').reverse().join(''), 10);
      n += reversedN;
      steps++;
    }
    
    return steps;
  }
  
  // Example usage:
  const result = palindromeChainLength(87);
  console.log(result); // Should print 4  