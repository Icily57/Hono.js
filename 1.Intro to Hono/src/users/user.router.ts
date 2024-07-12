import { Hono } from "hono";
import { type Context } from "hono";

export const userRouter = new Hono();

const users = [
    {
        id: 1,
        name: "John Doe",
        email: "john@gmail.com"
    },
    {
        id: 2,
        name: "Jane Doe",
        email: "jane@gmail.com"
    },
    {
        "id": 3,
        "name": "Kevin",
        "email": "kevin@gmail.com"
    }
]

interface TUser {
    id: number,
    name: string,
    email: string
}

//get all users      api/users
userRouter.get("/users", (c: Context) => {
    return c.json(users, 200);
});

//get a single user    api/users/1
userRouter.get("/users/:id", (c: Context) => {
    const id = Number(c.req.param("id"));
    const user = users.find((user) => user.id === id);
    if (!user) {
        return c.text("User not found", 404);
    }
    return c.json(user, 200);
})

// create a user 

userRouter.post("/users", async (c: Context) => {
    const user = await c.req.json();
    console.log(user)
    users.push(user);
    return c.json(user, 201);
})

//update a user

userRouter.put("/users/:id", async (c: Context) => {
    const id = Number(c.req.param("id"));
    const user = await c.req.json();
    const index = users.findIndex((user) => user.id === id);
    if (index === -1) {
        return c.text("User not found", 404);
    }
    users[index] = user;
    // const foundUser = users.find((user) => user.id === id);
    // if (!foundUser) {
    //     return c.text("User not found", 404);
    // }
    // Object.assign(foundUser, user);  //update the user
    return c.json(user, 200);
})