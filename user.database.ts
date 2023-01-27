import { TUser, IUserDatabase } from "./users/interfaces/interface";

export class Users implements IUserDatabase {
  private static users: TUser[];

  create(user: TUser) {
    Users.users.push(user);
  }

  get(userName: string) {
    return Users.users.find((target) => target.name === userName);
  }

  remove(userName: string) {
    Users.users = Array.from(Users.users).filter(
      (target) => target.name !== userName
    );
  }
}
