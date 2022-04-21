const items = [1,3,2,3,2,3,3,3,4,10,8];

const rta = items.reduce((obj, item) => {
    if( !obj[item] ) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

//console.log('rta');
//console.log(rta);

const data = [
    {
        name:"Nicolas",
        level: "hight"
    },
    {
        name:"Andres",
        level: "medium"
    },
    {
        name:"Roberta",
        level: "low"
    },
    {
        name:"Aureliana",
        level: "low"
    },
    {
        name:"Berta",
        level: "hight"
    }
];

const rta1 = data
.map(item => item.level)
.reduce((obj, item) => {
    if( !obj[item] ) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

//console.log('rta1');
//console.log(rta1);

const between = (x,min, max) => x >= min && x<=max;

const test = items.reduce((accum, item) => {
    if(between(item, 1, 5)) accum["1-5"] += 1;
    if(between(item, 6, 8)) accum["6-8"] += 1;
    if(between(item, 9, 10)) accum["9-10"] += 1;
    return accum;
}, {
    "1-5" :0,
    "6-8" :0,
    "9-10" :0
});

console.log(test);
