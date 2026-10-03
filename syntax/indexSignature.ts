type Scores = {
    [player: string]: number;
};

const table: Scores = {
    ann: 10,
    bob: 7,
};

function addScore(t: Scores, name: string, delta: number): Scores {
    return { ...t, [name]: (t[name] ?? 0) + delta };
}

console.log(addScore(table, "ann", 5));


// it is about the object behavior then add existing key it overrides
// previous value -> example below:

type BorisJohnson = {
    name: string,
    secondName: string,
}

const bj: BorisJohnson = {
    name: "Boris",
    secondName: "Johnson",
};


function addName(bj: BorisJohnson, key: string, name: string): BorisJohnson {
    return { ...bj, [key]: name };
};

console.log(addName(bj, 'name', 'Morris'));
