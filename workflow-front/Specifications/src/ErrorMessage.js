const checkMatch = (checkType, flag, ...args) => {
    if (flag) {
        return true;
    }
    switch (checkType) {
        case "has":
            return `Match Error(has): Target don't has key: ${args[0]}.`;
            break;
        case "!has": 
            return `Match Error(!has): Target has key: ${args[0]}.`;
            break;
        case "==":
            return `Match Error(==): Target.${args[0]} is not equal to ${args[1]}.`;
            break;
        case "!=":
            return `Match Error(!=): Target.${args[0]} is equal to ${args[1]}.`;
            break;
        case ">":
            return `Match Error(>): Target.${args[0]} is not greater than ${args[1]}.`;
            break;
        case "<":
            return `Match Error(<): Target.${args[0]} is not less than ${args[1]}.`;
            break;
        case ">=":
            return `Match Error(>=): Target.${args[0]} is not greater than ${args[1]} or equal to ${args[1]}.`;
            break;
        case "<=":
            return `Match Error(<=): Target.${args[0]} is not less than ${args[1]} or equal to ${args[1]}.`;
            break;
        case "in":
            return `Match Error(in): Key: ${args[0]} is not in the set.`;
            break;
        case "!in":
            return `Match Error(!in): Key: ${args[0]} is in the set.`;
            break;
        case "all":
            return `Match Error(all): Not all sub item matches. Error(s) is as follows: `;
        case "any":
            return `Match Error(any): No sub item matches. Error(s) is as follows: `;
        case "none":
            return `Match Error(none): At least one item matches.`;
        default:
            return `Syntax Error(): Unknown check type: ${checkType}.`;
            break;
    }
};

const checkSyntax = (checkType, key) => {
    if (typeof checkType !== "string") {
        throw `Syntax Error(${checkType}): Check type ${checkType} should be string type.`
    } else if (typeof key !== "string") {
        throw `Syntax Error(${checkType}): The key in '${checkType}' check should be string type.`
    }
}

module.exports = {
    checkSyntax,
    checkMatch
};