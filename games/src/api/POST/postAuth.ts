import { toast } from "react-toastify";

import { API_GAMES } from "..";

import { User } from "../../types/User";

interface IAuth {
  email: string;
  password: string;
}
const postAuth = async ({
  email,
  password,
}: IAuth): Promise<User | undefined> => {
  const data = { email, password };

  return new Promise((resolve) => {
    try {
      API_GAMES.post("/games/auth", data)
        .then((res) => {
          const user: User = res.data;
          resolve(user);
          return user;
        })
        .catch((_) => {
          toast.warning("EMAIL OU SENHA INCORRETOS");
          resolve(undefined);
          return undefined;
        });
    } catch (erro) {
      resolve(undefined);
    }
  });
};

export { postAuth };
