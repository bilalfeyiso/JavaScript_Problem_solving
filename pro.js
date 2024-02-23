// 1. Print all of all the names 

console.log("Feras, Nance, Shaay, Bilal, Goerge, Eliyad, Saveura, Renaro, Milan")

// 2. Print all of the names in reverse order

const names = ["Feras", "Nance", "Shaay", "Bilal", "Goerge", "Eliyad", "Saveura", "Renaro", "Milan"]

names.forEach((names) => {
    console.log(`${names.split('').reverse().join('')}`)
})

// 3. Print all of the names that have even length
const evenNames = names.filter(name => name.length % 2 === 0)

evenNames.forEach(name => {
console.log(`Even name: ${name}`)
})

// 4. Print all of the names that have odd length

const longestNames = names.reduce((acc, name) => (name.length > acc.length ? name : acc), "")

console.log(longestNames)

const shortName = names.reduce((acc, name) => (name.length < acc.length  || acc==="" ? name : acc), "");

console.log(shortName);

// 5. Print all of the names that are alphabetically sorted

const sortedNames = names.slice().sort((a, b) => a.localeCompare(b));

console.log(sortedNames);


// 6. Print fibonacci numbers


function fibonacci(n) {
    let sequence = [0, 1];

    for (i = 2; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i -2];
    }
    return sequence;
}

const result = fibonacci(100)

console.log(result);

// 7. Print all the value of N^2 for N in (0, 10)

for (let N = 0; N <= 10; N++) {
   const double = N * N;
 console.log(double);
}

// 8. Given a value N, print the sum of all first N natural numbers.

function sumNaturalNumbers (N) {

    const sum = N * (N + 1)/2;
    console.log(`sum: ${sum}`);
}

sumNaturalNumbers(5);

// 9. Given a number N, find the factorial of N. N!

function factorial(N) {
    if( N === 0 || N === 1) {
        return 1;
    } else {
        let result = 1;
        for(let i = 2; i <= N; i++) {
            result *= i;
        }
        return result;
    }
}

const result5 = factorial(5)

console.log(result5);

// 10. Given a value N, check if N is a prime number.


function isPrime(N) {
    if (N <= 1){
        return false;
    }

    for (let i = 2;  i <= Math.sqrt(N); i++){
        if (N % i === 0){
            return false;
        }
    }

    return true;
}

console.log(isPrime(9));


// i. Print all the values of X² + Y²  for  X & Y in (0,10)

function printUknownValues() {
    for (let X = 0; X <= 10; X++){
        for (let Y = X; Y<=10; Y++){
            const result =  X * X + Y * Y;
            console.log(result);
        }
    }
}

printUknownValues(10);




// 11. Bot saved princess


function displayPathtoPrincess(n, grid) {
    let botPosition;
    let princessPosition;


    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === 'm') {
                botPosition = {row: i, col: j};
            } else if (grid[i][j] === 'p') {
                princessPosition = {row: i, col: j};
            }
        }
    }


    const verticalSteps = botPosition.row - princessPosition.row;
    const horizontalSteps = botPosition.col - princessPosition.col;

    if (verticalSteps > 0) {
        console.log("UP".repeat(verticalSteps));
    } else if(verticalSteps < 0) {
        console.log("DOWN".repeat(Math.abs(verticalSteps)));
    }

    if (horizontalSteps > 0) {
        console.log("LEFT".repeat(horizontalSteps));
    } else if (horizontalSteps < 0) {
        console.log("RIGHT".repeat(Math.abs(horizontalSteps)));
    }
}

const n = 3;
 const grid = [
    ['-', '-', '-'],
    ['-', 'm', '-'],
    ['p', '-', '-']
 ];

 displayPathtoPrincess(n, grid);