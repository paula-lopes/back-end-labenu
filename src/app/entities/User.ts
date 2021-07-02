export class User {
  readonly id: string;
  public name: string;  
  public email: string;
  public nickname: string;
  public password: string;
  public role: USER_ROLES;

  constructor(props: Omit<User, "id">, id: string) {
    Object.assign(this, props);
   
      this.id = id;
    
  }

  static stringToUserRole(input: string): USER_ROLES {
    switch (input) {
      case "NORMAL":
        return USER_ROLES.NORMAL;
      case "ADMIN":
        return USER_ROLES.ADMIN;
      default:
        throw new Error("Invalid user role");
    }
  }
  static toUserModel(user: any): User {
    const { id, ...props } = user;
    return new User(props, id);
  }
}

export enum USER_ROLES {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN",
}


