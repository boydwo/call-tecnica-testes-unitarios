import { AccountEntity } from "../../src/entities/accountEntities";

type IData = {
  fullName: string
  birthDate: string
  role: string
  document: string
  address: string
  telephone: string
  email: string
}

export class FakeCreateAccountRepository {
  private repository:AccountEntity[] = []

  async create(data:IData){
    const id = this.repository.length
    this.repository.push({...data, id })
    return this.repository[id]
  }

  async findByEmail(email:string): Promise<AccountEntity | null>{
    const account = this.repository.find((acc)=> acc.email === email)
    return account || null
  }
}