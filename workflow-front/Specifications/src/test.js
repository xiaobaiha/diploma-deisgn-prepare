const {Specifications} = require('./index');

const result = Specifications({
        a:1,
        b:2
    }, 
    ["all",
        ["none",
            ["has", "abc"],
            ["has", "bcd"],
            ["has", "a"]
        ],
        ["==", "a", 1], 
        ["==", "b", 2],
        ["!=", "a",100],
        ["!has", "c"],
        [">=", 'a', -1],
        ["<=", 'b', 2],
        ["in", 'a', 1,2,3],
        ["!in", 'b', 3,4,5]
    ]
);

console.log(result)