import { useState } from "react";

import { postCreateGames } from "../../api/POST/createGames";
import { Button } from "../../components/Button";
import { CustonHeaderPage } from "../../components/CustonHeaderPage";
import { InputForm } from "../../components/InputForm";
import { CustomContainer } from "../../styles/globalStyles";
import { NewClientForm } from "./styled";

export const RegisterGame = () => {
  const [title, setTitle] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  return (
    <CustomContainer>
      <NewClientForm>
        <CustonHeaderPage title="Cadastro de jogos" />
        <InputForm
          name="game"
          title="Nome do game"
          type="text"
          sizeInput={35}
          value={title}
          onChange={setTitle}
          disabled={false}
        />
        <InputForm
          name="game"
          title="Valor do jogo"
          type="text"
          sizeInput={35}
          value={price}
          onChange={setPrice}
          disabled={false}
        />
        <InputForm
          name="game"
          title="Ano de lançamento:"
          type="text"
          sizeInput={35}
          value={year}
          onChange={setYear}
          disabled={false}
        />
        <Button
          isPrimary="blue"
          title="Cadastrar"
          onClink={() =>
            postCreateGames({ price, title, year }).then((res) => {
              if (res) {
                setPrice("");
                setTitle("");
                setYear("");
              }
            })
          }
          space={false}
        />
      </NewClientForm>
    </CustomContainer>
  );
};
