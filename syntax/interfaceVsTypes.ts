interface Animal {
    name: string;
  }
  
  interface Animal {
    // declaration merging — второе объявление дополняет первое
    legs: number;
  }
  
  type Pet = Animal & { owner: string };
  
  const dog: Pet = { name: "Rex", legs: 4, owner: "Bob" };
  
  // type для union — interface так нельзя:
  type Id = string | number;
  
  console.log(dog, typeof (42 as Id));