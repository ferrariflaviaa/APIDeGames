import { useNavigate } from "react-router-dom";

import { Games } from "../../types/Games";
import { CustomContainerCard, CustomContentCard } from "./styles";

interface ICards {
  data: Games;
}
export const Cards = ({ data }: ICards) => {
  const { PRICE, TITLE, YEAR, id } = data;
  const navigate = useNavigate();
  const navigateToEdition = (id: number) => {
    navigate(`/edition/${id}`);
  };
  return (
    <CustomContainerCard>
      <CustomContentCard>
        <div className="about">
          <h1>{TITLE}</h1>
          <div className="subtTitle">
            <h3>Preço: {PRICE}</h3>
            <h3>Ano: {YEAR}</h3>
            <div className="options">
              <a onClick={() => navigateToEdition(Number(id))}>
                <h3>Edição</h3>
              </a>
              <a href="">
                <h3>Deletar</h3>
              </a>
            </div>
          </div>
        </div>
      </CustomContentCard>
    </CustomContainerCard>
  );
};
