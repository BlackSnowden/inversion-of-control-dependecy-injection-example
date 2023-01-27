import { Entity } from "../../core/domain/entity";
import { UniqueEntityID } from "../../core/domain/unique-entity-id";

export class UserIdEntity extends Entity<any> {
  get id() {
    return this._id;
  }

  private constructor(id?: UniqueEntityID) {
    super(null, id);
  }

  public static create(id?: UniqueEntityID): UserIdEntity {
    return new UserIdEntity(id);
  }
}
