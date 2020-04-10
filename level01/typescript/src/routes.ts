import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(req: Request, res: Response) {
  const user = createUser({
    email: "ade@ade",
    password: "123",
    techs: [
      "Node",
      "ReactJS",
      "React Native",
      { title: "Javascript", expirence: 10 },
      { title: "Java", expirence: 11 },
    ],
    techs2: [{ title: "Tech 2", expirence: 1 }],
  });

  console.log("user", user);

  return res.json({ message: "ok" });
}
