const {checkMatch} = require('./ErrorMessage');

const All = (ctx, func, ...assertions) => {
    const ifAllMatchArr = assertions.map(assertion => {
        const funcResult = func.call(null, ctx, assertion);
        return funcResult
    }).filter(item => item!==true);

    if (ifAllMatchArr.length === 0){
        return true
    } else {
        const errMsg = checkMatch("all", ifAllMatchArr.length === 0) + '\n    Unexpected false: ' + (
            ifAllMatchArr.join('\n    Unexpected false: ')
        );
        throw errMsg;
    };
};

const Any = (ctx, func, ...assertions) => {
    const ifAnyMatchArr = assertions.map(assertion => {
        const funcResult = func.call(null, ctx, assertion);
        return funcResult
    }).filter(item => item!==true);
    if (ifAnyMatchArr.length !== assertions.length){
        return true 
    } else {
        const errMsg = checkMatch("any", ifAnyMatchArr.length !== assertions.length) + '\n    Unexpected all false: ' + (
            ifAnyMatchArr.join('\n    Unexpected all false: ')
        );
        throw errMsg;
    };
};

const None = (ctx, func, ...assertions) => {
    const ifNoneMatchArr = assertions.map(assertion => {
        const funcResult = func.call(null, ctx, assertion);
        return funcResult
    }).filter(item => item!==true);
    if (ifNoneMatchArr.length === assertions.length){
        return true 
    } else {
        const errMsg = checkMatch("none", ifNoneMatchArr.length === assertions.length);
        throw errMsg;
    };
};

const Has = (ctx, key) => {
    return checkMatch("has", Object.keys(ctx).includes(key), key); 
};

const NotHas = (ctx, key) => {
    return checkMatch("!has", !Object.keys(ctx).includes(key), key); 
};

const Equal = (ctx, e1, e2) => {
    return checkMatch("==", ctx[e1] === e2, e1, e2);
};

const NotEqual = (ctx, e1, e2) => {
    return checkMatch("!=", ctx[e1] !== e2, e1, e2);
};

const Greater = (ctx, e1, e2) => {
    return checkMatch(">", ctx[e1] > e2, e1, e2);
};

const Less = (ctx, e1, e2) => {
    return checkMatch("<", ctx[e1] < e2, e1, e2);
};

const GreaterAndEqual = (ctx, e1, e2) => {
    return checkMatch(">=", ctx[e1] >= e2, e1, e2);
};

const LessAndEqual = (ctx, e1, e2) => {
    return checkMatch("<=", ctx[e1] <= e2, e1, e2);
};

const In = (ctx, key, ...set) => {
    return checkMatch("in", set.includes(ctx[key]), key);
};

const NotIn = (ctx, key, ...set) => {
    return checkMatch("!in", !set.includes(ctx[key]), key);
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