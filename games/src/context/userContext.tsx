import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import { User } from "../types/User";

interface IContextProps {
  children: ReactNode;
}

interface IContext {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
  logout: () => void;
}

const Context = createContext({} as IContext);

const UserProvider = ({ children }: IContextProps) => {
  const [user, setUser] = useState<User>({});

  useEffect(() => {
    const searchedUserAdmin = localStorage.getItem("loged_user");
    if (searchedUserAdmin) {
      const myUser: User = JSON.parse(searchedUserAdmin);
      setUser(myUser);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("loged_user");
    setUser({});
  };

  return (
    <Context.Provider value={{ user, setUser, logout }}>
      {children}
    </Context.Provider>
  );
};

const useUserLoginContext = () => {
  const context = useContext(Context);
  return context;
};

export { UserProvider, useUserLoginContext };
