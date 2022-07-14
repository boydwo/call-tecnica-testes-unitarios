import { PrismaClient } from "@prisma/client"
import { AccountEntity } from "../entities/accountEntities"
import { HttpException } from "../exception/httpException"

type IData = {
  fullName: string
  birthDate: string
  document: string
  address: string
  telephone: string
  email: string
}

export class CreateAccountServiceExample{

  async execute(
    {fullName, birthDate, document, address, telephone, email
    }: IData): Promise<AccountEntity>{

    const [name, lastName] = fullName.split(' ')
    
    if(!(name && lastName)){
      throw new HttpException("Invalid Name!",400)
    }

    const prisma = new PrismaClient()
    const existsAccount= await prisma.account.findFirst({
      where: {  email  }
    })

    if(existsAccount){
      throw new HttpException("Email already exists!", 400)
    }

    const newBirthDate = new Date(birthDate)
    const dateNow = new Date()

    const diffDate = Math.abs(dateNow.getTime() - newBirthDate.getTime())
    const userAge =  Math.ceil(diffDate / (1000 * 60 * 60 * 24 * 365))
    
    if(userAge < 18){ 
      throw new HttpException("Invalid age!", 400)
    }

    const account = await prisma.account.create({
      data:{
        fullName,
        email,
        document,
        birthDate,
        address,
        telephone,
      }
    })

    return account
  }
}