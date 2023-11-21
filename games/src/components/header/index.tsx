import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useUserLoginContext } from "../../context/userContext";
import { CustomContainer } from "../../styles/globalStyles";
import { ModalSair } from "../modal/modalSair";
import { Container } from "./styles";

export const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { user, logout } = useUserLoginContext();
  const navigate = useNavigate();

  const logoutUser = () => {
    logout();
  };
  const handleStateModal = () => {
    setModalOpen(!modalOpen);
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
              <a onClick={() => handleStateModal()}>
                <h3>Sair</h3>
              </a>
            </>
          )}
        </div>
        <ModalSair isOpen={modalOpen} onRequestClose={handleStateModal} />
      </Container>
    </CustomContainer>
  );
};
