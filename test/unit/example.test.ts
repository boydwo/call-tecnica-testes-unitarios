function sum(a:number, b:number){
  return a + b;
}

describe('test example 1', () => {

  beforeEach(() =>{
    console.log('Before Each Test');
  })

  beforeAll(() =>{
    console.log('Before All Test');
  })

  afterEach(() =>{
    console.log('AfterEach All Test');
  })
  
  afterAll(() =>{
    console.log('AfterAll All Test');
  })


  it('should return sum between numbers', () => {
      const result = sum(1, 2);
      expect(result).toBe(3)
  });
  it('should return sum between numbers', () => {
      const result = sum(1, 2);
      expect(result).toBe(3)
  });

});