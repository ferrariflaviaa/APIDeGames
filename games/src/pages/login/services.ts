import { Dispatch, SetStateAction } from "react";
import { NavigateFunction } from "react-router-dom";
import { toast } from "react-toastify";

import { postAuth } from "../../api/POST/postAuth";
import { User } from "../../types/User";

interface IValidLogin {
  email: string;
  password: string;
  setUser: Dispatch<SetStateAction<User>>;
  navigate: NavigateFunction;
}
const validLogin = ({ email, password, setUser, navigate }: IValidLogin) => {
  if (email !== "" && password !== "") {
    postAuth({ email, password }).then((res) => {
      console.log("res ", res);
      if (res) {
        toast.success("LOGIN COM SUCESSO");
        // localStorage.setItem("loged_user", JSON.stringify(res));
        setUser(res);
        navigate("/");
      }
    });
  } else {
    toast.warning("PREECHA TODOAS OS CAMPOS");
  }
};

export { validLogin };
