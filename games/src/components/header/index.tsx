import { useNavigate } from "react-router-dom";

import { useUserLoginContext } from "../../context/userContext";
import { CustomContainer } from "../../styles/globalStyles";
import { Container } from "./styles";

export const Header = () => {
  const { user, logout } = useUserLoginContext();
  const navigate = useNavigate();

  const logoutUser = () => {
    logout();
  };

  return (
    <CustomContainer>
      <Container>
        <div className="options">
          {!user.token ? (
            <a onClick={() => navigate("/auth")}>
              <h3>Login</h3>
            </a>
          ) : (
            <>
              <a onClick={() => navigate("/")}>
                <h3>Home</h3>
              </a>
              <a onClick={() => navigate("/register")}>
                <h3>Criar</h3>
              </a>
              <a onClick={() => logoutUser()}>
                <h3>Sair</h3>
              </a>
            </>
          )}
        </div>
      </Container>
    </CustomContainer>
  );
};
