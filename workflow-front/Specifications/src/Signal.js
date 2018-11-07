const {
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
} = require('./Functions');


const CombiningSignalMap = {
    "all": All, 
    "any": Any, 
    "none": None
};

const SignalMap = {
    ...CombiningSignalMap,
    "has": Has,
    "!has": NotHas,
    "==": Equal,
    "!=": NotEqual,
    ">": Greater,
    "<": Less,
    ">=": GreaterAndEqual,
    "<=": LessAndEqual,
    "in": In,
    "!in": NotIn
};

module.exports = {SignalMap, CombiningSignalMap};