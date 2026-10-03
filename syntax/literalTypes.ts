type Status = "pending" | "paid" | "failed";
type Dice = 1 | 2 | 3 | 4 | 5 | 6;

function setStatus(s: Status): void {
    console.log("status:", s);
}

const dir = "left" as "left" | "right";
console.log(dir);

setStatus("paid");
