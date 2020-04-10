interface TechObject {
  title: string;
  expirence: number;
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | TechObject>;
  techs2?: TechObject[];
}

export default function createUser({
  name,
  email,
  password,
  techs,
  techs2,
}: CreateUserData) {
  const user = {
    name,
    email,
    password,
    techs,
    techs2,
  };

  return user;
}
