const checkMatch = (checkType, flag, ...args) => {
    // console.log({flag, checkType, args})
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
            console.log("Before error")
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
        default:
            return `Syntax Error(): Unknown check type: ${checkType}.`;
            break;
    }
};

const checkSyntax = (checkType, key) => {
    if (typeof key !== "string") {
        throw new Error(`Syntax Error(${checkType}): The key in '${checkType}' check should be string type.`)
    }
}

module.exports = {
    checkSyntax,
    checkMatch
};