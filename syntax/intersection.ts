// A & B

type Named = { name: string};
type Aged = {age: number};
type Person = Named & Aged;

const p: Person = { name: "Ann", age: 30 };

type Timestamped = { createdAt: Date };
type Entity = Person & Timestamped;

const row: Entity = {
    name: "Ann",
    age: 30,
    createdAt: new Date(),
};

console.log(row.name, row.createdAt.toISOString());

