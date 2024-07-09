//Generates a random array of 16 digits.

const randomCC = (firstDigit) => {
    let ccNo = Array.from(
        {length: 16},
        (_, index) => {
            if (index === 0) {
                return firstDigit;
            } else {
                return Math.floor(Math.random() * (10))
            }
        }
    )
    return ccNo;
}

// Checks if the CC number is valid according to the Luhn algo

const isValid = (arr) => {
    let arrCopy = arr.slice();
    let res = 0;
    for (let i = arrCopy.length - 1; i >= 0; i--) {
        if ((arrCopy.length - 1 - i) % 2 === 0) {
            let calc = (arrCopy[i] * 2);
            if (calc > 9) {
                calc -= 9
            }
            res += calc;
    } else {
        res += arrCopy[i];
    }
    }
    if (res % 10 === 0) {
        return true;
    } else {
        return false;
    }
}

// Generates a VALID cc number. Continously regenerates if not valid.

const genValCC = (firstDigit) => {
    let valCC = randomCC(firstDigit);
    while (!isValid(valCC)) {
        valCC = randomCC(firstDigit);
        effCount++;
    }
    return valCC;
}

// Monitors loop efficiency

let effCount = 0;

// Random AMEX CC

const genAmex = () => genValCC(3)

// Random Visa CC

const genVISA = () => genValCC(4)

// Random Mastercard CC

const genMastercard = () => genValCC(5)

// Random Discover CC

const genDiscover = () => genValCC(6)


/*let cc1 = genAmex();
let cc2 = genVISA();
let cc3 = genMastercard();
let cc4 = genDiscover();
console.log(cc1)
console.log(cc2)
console.log(cc3)
console.log(cc4)
console.log(isValid(cc3));
console.log(isValid(cc4));
*/

// Let's create 30 valid AMEX credit card numbers!

const longCCList = [];
while (longCCList.length < 30) {
    longCCList.push(genAmex());
}

console.log(longCCList);
console.log(longCCList.length);
console.log(effCount);