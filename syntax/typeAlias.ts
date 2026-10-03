type Email = string;
type Password = string;

type Credentials = {
    email: Email,
    password: Password,
};

type Result<T> = 
| { ok: true, value: T}
| { ok: false, error: string };

function login(c: Credentials): Result<{token: string}> {
    if (c.email.includes("@")) {
        return { ok: true, value: {token: "jwt"} };
    }
    return { ok: false, error: "invalid email" };
}

console.log(login({ email: "a@b.c", password: "x" }));