import { ReactNode } from "react";

import { CustonHeaderPageContainer } from "./styles";

export interface ICustonHeaderPage {
  title: "Cadastro de jogos" | undefined;
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
