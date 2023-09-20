import { hash, compare } from 'bcryptjs';

export default class HashPasswordManager {
  static async hash(pass: string) {
    return await hash(pass, 8);
  }
  static async compare(pass: string, hashPass: string) {
    return await compare(pass, hashPass);
  }
}
