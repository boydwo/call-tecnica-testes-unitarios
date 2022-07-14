import { PrismaClient } from "@prisma/client";
import { AccountEntity } from "../entities/accountEntities";

const prismaClient = new PrismaClient();
export class AccountRepository{

  async create(data: {fullName:string, birthDate:string, document:string, address:string, telephone:string, email:string}):Promise<AccountEntity>{
    const account = await prismaClient.account.create({
      data
    }) 

    return account
  }
  async findByEmail(email:string):Promise<AccountEntity | null>{
    const account = await prismaClient.account.findFirst({
      where: {
        email
      }
    }) 

    return account
  }

}