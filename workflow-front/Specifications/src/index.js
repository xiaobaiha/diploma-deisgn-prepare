const {SignalMap, CombiningSignalMap} = require('./Signal');


const typeArray = Object.keys(SignalMap);

const Specifications = (target, rules) => {
    const type = rules.shift();
    let func;

    func = SignalMap[type];
    if (Object.keys(CombiningSignalMap).includes(type)){
        return func.call(null, target, Specifications, ...rules);
    } else {
        return func.call(null, target, ...rules);
    }
}

module.exports = {Specifications};