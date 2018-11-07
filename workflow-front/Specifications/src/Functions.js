const {checkMatch} = require('./ErrorMessage');

const All = (ctx, func, ...assertions) => assertions.every(assertion => func.call(null, ctx, assertion));

const Any = (ctx, func, ...assertions) => assertions.some(assertion => func.call(null, ctx, assertion));

const None = (ctx, func, ...assertions) => assertions.every(assertion => !func.call(null, ctx, assertion));

const Has = (ctx, key) => {
    checkMatch("has", Object.keys(ctx).includes(key), key); // throw new Error(`Match Error(has): Target don't has key: ${key}.`)
    return true;
};

const NotHas = (ctx, key) => {
    checkMatch("!has", !Object.keys(ctx).includes(key), key); //&& throw new Error(`Match Error(!has): Target has key: ${key}.`)
    return true;
};

const Equal = (ctx, e1, e2) => {
    console.log({ctx, e1, e2})
    checkMatch("==", ctx[e1] === e2, e1, e2);
    // const ifEq = (ctx[e1] === e2);
    // hrow new Error(`Match Error(==): Target.${key} is not equal to ${e2}.`)
    return true;
};

const NotEqual = (ctx, e1, e2) => {
    checkMatch("!=", ctx[e1] !== e2, e1, e2);
    // const ifNotEq = (ctx[e1] !== e2);
    // throw new Error(`Match Error(!=): Target.${key} is equal to ${e2}.`)
    return true;
};

const Greater = (ctx, e1, e2) => {
    checkMatch(">", ctx[e1] > e2, e1, e2);
    // const ifGreater = (ctx[e1] > e2);
    // throw new Error(`Match Error(>): Target.${key} is not greater than ${e2}.`)
    return true;
};

const Less = (ctx, e1, e2) => {
    checkMatch("<", ctx[e1] < e2, e1, e2);
    // const ifLess = (ctx[e1] < e2);
    // throw new Error(`Match Error(<): Target.${key} is not less than ${e2}.`)
    return true;
};

const GreaterAndEqual = (ctx, e1, e2) => {
    checkMatch(">=", ctx[e1] >= e2, e1, e2);
    // const ifGreaterAndEqual = (ctx[e1] >= e2);
    // throw new Error(`Match Error(>=): Target.${key} is not greater than ${e2} or equal to ${e2}.`)
    return true;
};

const LessAndEqual = (ctx, e1, e2) => {
    checkMatch("<=", ctx[e1] <= e2, e1, e2);
    // const ifLessAndEqual = (ctx[e1] <= e2);
    // throw new Error(`Match Error(<=): Target.${key} is not less than ${e2} or equal to ${e2}.`)
    return true;
};

const In = (ctx, key, ...set) => {
    checkMatch("in", set.includes(ctx[key]), key);
    // const ifIn = set.includes(ctx[key]);
    //  throw new Error(`Match Error(in): Key: ${key} is not in the set.`)
    return true;
};

const NotIn = (ctx, key, ...set) => {
    checkMatch("!in", !set.includes(ctx[key]), key);
    // const ifNotIn = !set.includes(ctx[key]);
    // throw new Error(`Match Error(!in): Key: ${key} is in the set.`)
    return true;
};

module.exports = {
    All,
    Any,
    None,
    Has,
    NotHas,
    Equal,
    NotEqual,
    Greater,
    Less,
    GreaterAndEqual,
    LessAndEqual,
    In,
    NotIn
}