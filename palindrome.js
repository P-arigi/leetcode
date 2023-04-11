var isPalindrome = function(x) {
      /**
       * Solution 1 : JavaScript way
       */
      //   const reverseNumber = x.toString().split("").reverse().join("");
      //   return x == reverseNumber;

      /**
       * Solution 2: Traditional Programming way
       */
      let initialX = x,
        reverseNumber = 0;

      // Reverse the number.
      while (x != 0) {
        reverseNumber = parseInt(reverseNumber * 10 + parseInt(x % 10));
        console.log(reverseNumber)
        x = parseInt(x / 10);
      }

      // Handle for negative numbers.
      if (initialX < 0) {
        return initialX === -1 * reverseNumber;
      }

      return initialX === reverseNumber;
};
console.log(isPalindrome(121))