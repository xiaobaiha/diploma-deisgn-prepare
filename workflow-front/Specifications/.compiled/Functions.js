const Equal = (ctx, e1, e2) => ctx[e1] === e2;

const All = (ctx, func, ...assertions) => {
    return assertions.every(assertion => func.apply(null, ctx));
};

export { Equal, All };
//# sourceMappingURL=Functions.js.map