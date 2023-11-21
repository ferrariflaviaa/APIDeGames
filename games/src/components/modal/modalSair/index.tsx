import Modal from "react-modal";

import { useUserLoginContext } from "../../../context/userContext";
import { Button } from "../../Button";
import { Container } from "./styled";

interface IModaDeleteProp {
  isOpen: boolean;
  onRequestClose: () => void;
}
export const ModalSair = ({ isOpen, onRequestClose }: IModaDeleteProp) => {
  const { logout } = useUserLoginContext();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >
      <Container>
        <form>
          <h1>Deseja sair?</h1>
          <div className="rowButton">
            <Button
              isPrimary="blue"
              title="Sim"
              space={true}
              onClink={() => logout()}
            />
            <Button
              isPrimary="blue"
              title="Não"
              space={false}
              onClink={onRequestClose}
            />
          </div>
        </form>
      </Container>
    </Modal>
  );
};
