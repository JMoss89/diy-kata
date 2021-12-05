const joinNames = namesObj => {
    const namesArr = namesObj.map(person => person.name). join(', ');    
    const lastComma = namesArr.lastIndexOf(","); 
    const namesStr = namesArr.substr(0, lastComma) + ' &' + namesArr.substr(lastComma + 1); 
    return namesStr;
    
};

module.exports = joinNames;
