export class User {
    constructor(
      public UserID: string,
      public name: string,
      public Email: string,
      public Token: string,
      public expiration: number
    ) {}

    public get token(): string | null {
      const currentDate: number = Date.now() / 1000
      if(currentDate > this.expiration) {
          return null;
      }
      return this.Token;
  }
}


