import { ReactNode } from "react";

import { CustonHeaderPageContainer } from "./styles";

export interface ICustonHeaderPage {
  title: "Cadastro de jogos" | "Edição de jogo";
}
export const CustonHeaderPage = ({ title }: ICustonHeaderPage) => {
  return (
    <CustonHeaderPageContainer>
      <div className="group">
        <h1>{title}</h1>
      </div>
    </CustonHeaderPageContainer>
  );
};
