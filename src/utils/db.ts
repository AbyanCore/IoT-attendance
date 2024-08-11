import { PrismaClient } from "@prisma/client";
class Database {
  private static instance: Database;
  private prisma: PrismaClient;

  private constructor() {
    this.prisma = new PrismaClient();
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public getPrisma(): PrismaClient {
    return this.prisma;
  }
}

export default Database.getInstance().getPrisma();
