import { CustomContainer, CustomContent } from "../../styles/globalStyles";
import { CustomContainerCard } from "./styles";

interface ICards {
  title: string;
  price: string;
  year: string;
}
export const Cards = ({ price, title, year }: ICards) => {
  return (
    <CustomContainer>
      <CustomContainerCard>
        <div className="about">
          <h1>{title}</h1>
          <div className="subtTitle">
            <h3>Preço: {price}</h3>
            <h3>Ano: {year}</h3>
          </div>
        </div>
      </CustomContainerCard>
    </CustomContainer>
  );
};
