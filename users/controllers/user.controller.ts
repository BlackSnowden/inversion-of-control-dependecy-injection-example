import { IUserRepository } from "../interfaces/user-repository.interface";

export interface IUserController {
  run(): void;
}

export class UserController {
  constructor(private userRepository: IUserRepository) {}

  run() {
    const findUser = () => {
      const result = this.userRepository.find("Thiago");
      console.log(result?.toJSON());
    };

    findUser();
    setTimeout(findUser, 5000);

    this.userRepository.create({
      name: "Thiago",
      age: 21,
    });
  }
}
