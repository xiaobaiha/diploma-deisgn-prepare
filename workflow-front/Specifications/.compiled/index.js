import { SignalMap } from './Signal';
import { CombiningSignals } from './Combining';

const typeArray = Object.keys(SignalMap);

const Specifications = (target, rules) => {
    const type = rules.shift();
    let func;
    console.log(typeArray.includes(type));

    func = SignalMap[type];
    if (CombiningSignals.includes(type)) {
        return func.apply(null, target, Specifications, ...rules);
    } else {
        return func.apply(null, target, ...rules);
    }
};

console.log(11)

export { Specifications };
//# sourceMappingURL=index.js.map