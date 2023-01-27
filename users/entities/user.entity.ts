import { Entity } from "../../core/domain/entity";
import { UniqueEntityID } from "../../core/domain/unique-entity-id";
import { UserIdEntity } from "./user-id.entity";

export type UserProps = {
  name: string;
  age: number;
};

export class UserEntity extends Entity<UserProps> {
  get userId() {
    return UserIdEntity.create(this.id);
  }

  get name() {
    return this.props.name;
  }

  get age() {
    return this.props.age;
  }

  private constructor(props: UserProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(props: UserProps, id?: UniqueEntityID) {
    return new UserEntity(props, id);
  }

  toJSON() {
    return {
      id: this.userId.id.toString(),
      name: this.name,
      age: this.age,
    };
  }
}
