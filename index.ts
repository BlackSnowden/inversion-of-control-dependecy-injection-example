import { MyApp } from "./app";
import { UserController } from "./users/controllers/user.controller";
import { UserRepository } from "./users/repositories/user.repository";

const userController = new UserController(new UserRepository());

const myApp = new MyApp({ user: userController });
myApp.start();
