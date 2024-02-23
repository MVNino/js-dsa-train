export default class MathProblemService {
  /**
   * Fibonacci
   */
  getFibonacci = (level) => {
    // Level: 5, Expect: [0, 1, 1, 2, 3]
    const fibonnaci = [0, 1];

    for (let i = 2; i < level; i++) {
      fibonnaci[i] = fibonnaci[i - 2] + fibonnaci[i - 1];
    }

    return fibonnaci;
  };

  /**
   * Prime Numbers
   */
  sumOfAllPrimeNumbers = (num1, num2) => {
    if (num1 > num2) throw "Number 2 must be greater then Number 1.";

    const totalOfPrimeNumbers = Array.from(
      { length: num2 - 1 },
      (_, index) => index + 2
    )
      .filter(this.isPrimeNumber)
      .reduce((accumulate, current) => accumulate + current, 0);

    return totalOfPrimeNumbers;
  };

  isPrimeNumber(num) {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  }

  /**
   * Perfect Square
   */
  checkIfPerfectSquare(num) {
    // Edge case: if num is zero, it is not perfect square
    if (num === 0) return false;

    // With js built in function
    // return Math.sqrt(num) % 1 === 0

    // Without js built in function
    let i = 1;

    while (i * i <= num) {
      if (i * i === num) {
        return true;
      }

      i++;
    }

    return false;
  }

  /**
   * Middle Number of Three
   */
  middleNumberOfThree(numbers) {
    if (numbers.length !== 3) return null;

    // JS Sort the numbers
    const sortedNumbers = numbers.sort((a, b) => a - b);

    return sortedNumbers[1];
  }
}
