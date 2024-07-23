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

const buttonCC = (num) => {
    console.log('ButtonCC called')
    console.log(document.getElementById("output"))
    document.getElementById("output").innerHTML = genValCC(num).join("");
};

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



document.getElementById("gen-cc").addEventListener("click", () => buttonCC(3));
document.getElementById("gen-visa").addEventListener("click", () => buttonCC(4));
document.getElementById("gen-mc").addEventListener("click", () => buttonCC(5));
document.getElementById("gen-disc").addEventListener("click", () => buttonCC(6));


document.getElementById("generate").addEventListener("click", () => {
    let selectedCard = document.querySelector('input[name="mulcard"]:checked').value;
    console.log(selectedCard);
    return buttonCC(selectedCard);

});