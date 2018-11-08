const {SignalMap, CombiningSignalMap} = require('./Signal');
const {checkSyntax, checkMatch} = require('./ErrorMessage');

const typeArray = Object.keys(SignalMap);

const Check = (target, rules) => {
    const type = rules.shift();
    let func;

    func = SignalMap[type];
    if (Object.keys(CombiningSignalMap).includes(type)){
        const allArray = rules.every(assertion => assertion instanceof Array);
        if (!allArray) {
            throw new Error("Syntax Error: All the item in 'all' check should be Array.");
        }
        return func.call(null, target, Check, ...rules);
    } else {
        checkSyntax(type, ...rules)
        return func.call(null, target, ...rules);
    }
}

const Specifications = (target, rules) => {
    try {
        const result = Check(target, rules);
        if (result === true){
            return { result: true, message: "Match success."};
        } else {
            throw result;
        }
    } catch (err)
    {
        return { result: false, message: err};
    };
}

module.exports = {Specifications};