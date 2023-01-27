import { UserEntity, UserProps } from "../entities/user.entity";

export interface IUserRepository {
  find(userName: string): UserEntity;
  create(user: UserProps): void;
}
