const { joinNames } = require("../src");

describe("joinNames", () => {
  it ("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames([{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}])).toEqual('Bart, Lisa & Maggie');
    expect(joinNames([{name: 'July'}, {name: 'Lisa'}, {name: 'Harry'}, {name: 'Joe'}, {name: 'Dan'}])).toEqual('July, Lisa, Harry, Joe & Dan');    
  });
});
