import express from "express";
import bodyParser from "body-parser";
import DsaService from "./src/services/dsa.service.js";
import MathProblemService from "./src/services/math-problem.service.js";

const PORT = 3000;
const dsaService = new DsaService();
const mathProblemService = new MathProblemService();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * DSA
 */
app.get("/bubble-sort", (req, res) => {
  const { data } = req.body;

  const sortedData = dsaService.bubbleSort(data);

  res.send(sortedData);
});

app.get("/quick-sort", (req, res) => {
  const { data } = req.body;

  const sortedData = dsaService.quickSort(data);

  res.send(sortedData);
});

app.get("/linear-search", () => {
  const { data } = req.body;

  const sortedData = dsaService.linearSearch(data);

  res.send(sortedData);
});

app.get("/binary-search", () => {
  const { data, search } = req.body;

  const sortedData = dsaService.quickSort(data);

  const isFound = dsaService.binarySearch(sortedData, search);

  res.send(isFound);
});

/**
 * Math Problems
 */
app.get("/fibonacci", (req, res) => {
  const { level } = req.query;

  const fibonacci = mathProblemService.getFibonacci(level);

  res.send(fibonacci);
});

app.get("/sum-all-prime-numbers", (req, res) => {
  const { num1, num2 } = req.body;

  const totalOfPrimeNumbers = mathProblemService.sumOfAllPrimeNumbers(
    num1,
    num2
  );

  res.send({ total: totalOfPrimeNumbers });
});

app.get("/is-perfect-square", (req, res) => {
  const { num } = req.body;

  const isPerfectSquare = mathProblemService.checkIfPerfectSquare(num);

  res.send({ isPerfectSquare });
});

app.get("/middle-number-of-three", (req, res) => {
  const { numbers } = req.body;

  const middleNumber = mathProblemService.middleNumberOfThree(numbers);

  res.send({ middleNumber });
});

app.get('/sum-even-odd-index', (req, res) => {
  //
})

app.listen(PORT, () => console.log(`LISTENING TO PORT: ${PORT}.`));
