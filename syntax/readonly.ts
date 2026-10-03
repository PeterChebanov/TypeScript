type Point = {
    readonly x: number,
    readonly y: number,
};

const p: Point = { x: 1, y: 2 };
// p.x = 3; // error

const ids: readonly number[] = [1, 3, 4];
// ids.push(5); // error

console.log(p, ids);