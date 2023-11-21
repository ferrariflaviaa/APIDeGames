import { useState, Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

import { useUserLoginContext } from "../../context/userContext";
import { teste } from "../../pages/home/services";
import { Games } from "../../types/Games";
import { formatMonetary } from "../../utils/formartMonetary";
import { formatDate } from "../../utils/formatDate";
import { ModalDelete } from "../modal/modalDelete";
import { CustomContainerCard, CustomContentCard } from "./styles";

interface ICards {
  data: Games;
  update: boolean;
  setUpdate: Dispatch<SetStateAction<boolean>>;
}
export const Cards = ({ data, setUpdate, update }: ICards) => {
  const { PRICE, TITLE, YEAR, id } = data;
  const { user } = useUserLoginContext();
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const navigateToEdition = (id: number) => {
    navigate(`/edition/${id}`);
  };
  const handleStateModal = () => {
    teste({ setUpdate, update });
    setModalOpen(!modalOpen);
  };
  return (
    <CustomContainerCard>
      <CustomContentCard>
        <div className="about">
          <h1>{TITLE}</h1>
          <div className="subtTitle">
            <h3>Preço: {formatMonetary(PRICE)}</h3>
            <h3>Ano: {formatDate(YEAR)}</h3>
            {user.token && (
              <div className="options">
                <a onClick={() => navigateToEdition(Number(id))}>
                  <h3>Edição</h3>
                </a>
                <a onClick={() => handleStateModal()}>
                  <h3>Deletar</h3>
                </a>
              </div>
            )}
          </div>
        </div>
        <ModalDelete
          isOpen={modalOpen}
          onRequestClose={handleStateModal}
          id={Number(id)}
          title={TITLE}
        />
      </CustomContentCard>
    </CustomContainerCard>
  );
};
