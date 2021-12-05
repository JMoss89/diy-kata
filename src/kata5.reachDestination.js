const reachDestination = (distance, speed) => {
    const time = distance / speed;
    const roundTime = Math.round(time * 2)/2;
    return `I should be there in ${roundTime} hours.`;
};

module.exports = reachDestination;
