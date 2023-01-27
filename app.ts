import { IUserController } from "./users/controllers/user.controller";

export interface IAppControllers {
  user: IUserController;
}

export class MyApp {
  constructor(private controllers: IAppControllers) {}

  start() {
    this.controllers.user.run();
  }
}
