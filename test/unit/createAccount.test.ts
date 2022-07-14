import { HttpException } from "../../src/exception/httpException";
import { CreateAccountService } from "../../src/services/createUserServiceExample2";
import { FakeCreateAccountRepository } from "../fake/fakeAccountRepository";

describe('Create Account', () => {

  const mockAccount = {
    fullName: 'John Doe',
    birthDate:'1990-04-22', 
    document: '2999999', 
    address: "Rua dos amorosos, s2, coração, lado esquerdo ",
    telephone: "312312313213",
    email: "johndoe5@gmail.com"
  }
    //arrange

    let fakeCreateAccountRepository: FakeCreateAccountRepository
    let createAccountService: CreateAccountService

    beforeEach(()=>{
      fakeCreateAccountRepository = new FakeCreateAccountRepository()
  
      createAccountService = new CreateAccountService(fakeCreateAccountRepository)
    })


  it('should call findByEmail from accountRepository', async () => {
    
     const accountRepositoryFindByEmailSpy =  jest.spyOn(fakeCreateAccountRepository, 'findByEmail')
 

    //act
    const createAccount = await createAccountService.execute(mockAccount)

    //assert

    expect(accountRepositoryFindByEmailSpy).toBeCalledWith("johndoe5@gmail.com")
   
  });
  it('should call create from accountRepository', async () => {
    
     const accountRepositoryCreateEmailSpy =  jest.spyOn(fakeCreateAccountRepository, 'create')

    //act
    const createAccount = await createAccountService.execute(mockAccount)

    //assert

    expect(accountRepositoryCreateEmailSpy).toBeCalledWith({
      fullName: 'John Doe',
      birthDate:'1990-04-22', 
      document: '2999999', 
      address: "Rua dos amorosos, s2, coração, lado esquerdo ",
      telephone: "312312313213",
      email: "johndoe5@gmail.com"
    })

  });
  it('should return created account', async () => {
    
    //act
    const createAccount = await createAccountService.execute(mockAccount)

    //assert

    expect(createAccount).toEqual({
      "address": "Rua dos amorosos, s2, coração, lado esquerdo ",
    "birthDate": "1990-04-22",
    "document": "2999999",
    "email": "johndoe5@gmail.com",
    "fullName": "John Doe",
    "id": 0,
    "telephone": "312312313213",
    })

  });

it('should throw if fullName is invalid', async () => {
  
  //act 

  try {
    await createAccountService.execute({
      fullName: 'John',
      birthDate:'1990-04-22', 
      document: '2999999', 
      address: "Rua dos amorosos, s2, coração, lado esquerdo ",
      telephone: "312312313213",
      email: "johndoe5@gmail.com"
    })
  } catch (error) {
    expect(error instanceof HttpException).toBeTruthy()
    expect((error as Error).message).toBe('Invalid Name!')
  }
   
});
it('should throw if email already exits', async () => {
  
  //act 

  jest.spyOn(fakeCreateAccountRepository, 'findByEmail').mockReturnValueOnce(
   Promise.resolve( {
    id:1,
    fullName: 'string',
    email: 'string',
    birthDate: 'string',
    address: 'string',
    telephone: 'string',
    document:'string' ,
  })
  )

  try {
    const response = await createAccountService.execute({
      fullName: 'John Doe',
      birthDate:'1990-04-22', 
      document: '2999999', 
      address: "Rua dos amorosos, s2, coração, lado esquerdo ",
      telephone: "312312313213",
      email: "johndoe5@gmail.com"
    })

    expect(response).toBeFalsy()
  } catch (error) {
    expect(error instanceof HttpException).toBeTruthy()
    expect((error as Error).message).toBe("Email already exists!")
  }
   
});

it('should throw if birthDate is invalid', async () => {
  
  //act 

  try {
    await createAccountService.execute({
      fullName: 'John Doe',
      birthDate: new Date().toISOString(), 
      document: '2999999', 
      address: "Rua dos amorosos, s2, coração, lado esquerdo ",
      telephone: "312312313213",
      email: "johndoe5@gmail.com"
    })
  } catch (error) {
    expect(error instanceof HttpException).toBeTruthy()
    expect((error as Error).message).toBe('Invalid age!')
  }
   
});

});