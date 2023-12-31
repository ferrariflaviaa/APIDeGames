import { useState } from "react";
import { toast } from "react-toastify";

import { postCreateGames } from "../../api/POST/createGames";
import { Button } from "../../components/Button";
import { CustonHeaderPage } from "../../components/CustonHeaderPage";
import { InputForm } from "../../components/InputForm";
import { CustomContainer } from "../../styles/globalStyles";
import { formatMonetary } from "../../utils/formartMonetary";
import { NewClientForm } from "./styled";

export const RegisterGame = () => {
  const [title, setTitle] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [image, setImage] = useState<string>("");

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
          value={formatMonetary(price)}
          onChange={setPrice}
          disabled={false}
        />
        <InputForm
          name="game"
          title="Ano de lançamento:"
          type="date"
          sizeInput={35}
          value={year}
          onChange={setYear}
          disabled={false}
        />
        <InputForm
          name="game"
          title="Link da imagem"
          type="text"
          sizeInput={35}
          value={image}
          onChange={setImage}
          disabled={false}
        />
        <Button
          isPrimary="blue"
          title="Cadastrar"
          onClink={() =>
            postCreateGames({ price, title, year, linkImage: image }).then(
              (res) => {
                if (res) {
                  toast.success("CADASTRO REALIZADA!");
                  setPrice("");
                  setTitle("");
                  setYear("");
                }
              },
            )
          }
          space={false}
        />
      </NewClientForm>
    </CustomContainer>
  );
};
