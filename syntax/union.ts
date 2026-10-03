// TypeA | TypeB | TypeC

type userId = string;
type LegacyID = number;
type Id = userId | LegacyID;

function formatId(id: Id): string {
    if (typeof id === "string") {
        return id.toUpperCase();
    }
    return `#${id}`;
}

console.log(formatId("abc"));
console.log(formatId(42));