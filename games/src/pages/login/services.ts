import { toast } from "react-toastify";

import { postAuth } from "../../api/POST/postAuth";

interface IValidLogin {
  email: string;
  password: string;
}
const validLogin = ({ email, password }: IValidLogin) => {
  if (email !== "" && password !== "") {
    postAuth({ email, password }).then((res) => {
      if (res) {
        toast.success("LOGIN COM SUCESSO");
      }
    });
  } else {
    toast.warning("PREECHA TODOAS OS CAMPOS");
  }
};

export { validLogin };
