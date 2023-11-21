import { useUserLoginContext } from "../context/userContext";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

const Routes = () => {
  const { user } = useUserLoginContext();

  return user.token === undefined ? <AuthRoutes /> : <AppRoutes />;
};

export { Routes };
