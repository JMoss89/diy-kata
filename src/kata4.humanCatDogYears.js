const humanCatDogYears = number => {
    const firstYear = 15;
    const secondYear = 9;
    let laterYears = number - 2;
    let catYears = firstYear + secondYear + laterYears * 4;
    let dogYears = firstYear + secondYear + laterYears * 5;

    return [number,catYears,dogYears];
};

module.exports = humanCatDogYears;
