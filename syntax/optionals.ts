type Profile = {
    username: string;
    bio?: string;
  };
  
  function show(p: Profile): void {
    console.log(p.username);
    if (p.bio !== undefined) {
      console.log(p.bio.length);
    }
  }
  
  show({ username: "ann" });
  show({ username: "ann", bio: "hi" });

  type User = {
    name: string;
    age: number;
};

type OptionalUser = {
    [K in keyof User]?: User[K];
};

// OptionalUser on line 21 will create:
// 
//  type OptionalUser = {
//    name?: string;
//    age?: number;
//  };