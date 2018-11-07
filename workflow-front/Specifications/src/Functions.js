const All = (ctx, func, ...assertions) => assertions.every(assertion => func.call(null, ctx, assertion));

const Any = (ctx, func, ...assertions) => assertions.some(assertion => func.call(null, ctx, assertion));

const None = (ctx, func, ...assertions) => assertions.every(assertion => !func.call(null, ctx, assertion));

const Has = (ctx, key) => Object.keys(ctx).includes(key);

const NotHas = (ctx, key) => !Object.keys(ctx).includes(key);

const Equal = (ctx, e1, e2) => ctx[e1] === e2;

const NotEqual = (ctx, e1, e2) => ctx[e1] !== e2;

const Greater = (ctx, e1, e2) => ctx[e1] > e2;

const Less = (ctx, e1, e2) => ctx[e1] > e2;

const GreaterAndEqual = (ctx, e1, e2) => ctx[e1] >= e2;

const LessAndEqual = (ctx, e1, e2) => ctx[e1] <= e2;

const In = (ctx, key, ...set) => set.includes(ctx[key]);

const NotIn = (ctx, key, ...set) => !set.includes(ctx[key]);

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