import { useUserLoginContext } from "../context/userContext";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

const Routes = () => {
  const { user } = useUserLoginContext();
  console.log(user.email);

  return user.token ? <AuthRoutes /> : <AppRoutes />;
};

export { Routes };
