import { v4 as uuidv4, validate } from 'uuid';

export default class UuidManager {
  static generate(): string {
    return uuidv4();
  }
  static check(uuid: string): boolean {
    return validate(uuid);
  }
}
