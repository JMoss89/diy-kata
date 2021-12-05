const numberToReversedDigits = number => {

    const digitsArr = number.toString().split('').reverse().map(Number);
    return digitsArr;
};

module.exports = numberToReversedDigits;
