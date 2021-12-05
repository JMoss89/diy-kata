const { humanCatDogYears } = require("../src");

describe ("humanCatDogYears", () =>{
    it ("return an array of three numbers represent human cat and dog ages", () =>{
        expect (humanCatDogYears(10)).toEqual([10, 56, 64]);
        expect (humanCatDogYears(18)).toEqual([18, 88, 104]);
    })
})
// Look Ma, no handlebars!!!
