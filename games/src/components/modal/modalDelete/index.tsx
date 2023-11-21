import Modal from "react-modal";
import { toast } from "react-toastify";

import { deleteGame } from "../../../api/DELETE/deleteGame";
import { Button } from "../../Button";
import { Container } from "./styled";

interface IModaDeleteProp {
  isOpen: boolean;
  onRequestClose: () => void;
  id: number;
  title: string;
}
export const ModalDelete = ({
  isOpen,
  onRequestClose,
  id,
  title,
}: IModaDeleteProp) => {
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
          <h1>Deseja excluír o jogo {title}?</h1>
          <div className="rowButton">
            <Button
              isPrimary="blue"
              title="Sim"
              space={true}
              onClink={() =>
                deleteGame({ id }).then((res) => {
                  if (res) {
                    onRequestClose();
                    toast.success("Deletado com sucesso");
                  }
                })
              }
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
