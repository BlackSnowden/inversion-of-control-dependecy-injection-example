import { UserEntity, UserProps } from "../entities/user.entity";
import { IUserRepository } from "../interfaces/user-repository.interface";

export class UserRepository implements IUserRepository {
  private static users: UserEntity[] = [];

  find(userName: string): UserEntity {
    return UserRepository.users.find((target) => target.name === userName);
  }

  create(user: UserProps): void {
    const userEntity = UserEntity.create(user);
    UserRepository.users.push(userEntity);
  }
}
