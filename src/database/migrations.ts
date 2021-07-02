import dotenv from "dotenv";
import { BaseRepository } from "../app/repositories/implementations/BaseRepository";

dotenv.config();
class DatabaseMigrator extends BaseRepository {
  async connect(sql: string) {
    const connection = this.getConnection();
    await connection.raw(sql);
  }

  async destroy() {
    BaseRepository.destroyConnection();
  }
}
