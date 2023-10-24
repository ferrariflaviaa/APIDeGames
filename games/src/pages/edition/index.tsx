/* eslint-disable consistent-return */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { getListGamesId } from "../../api/GET/listGamesId";
import { postCreateGames } from "../../api/POST/createGames";
import { updateListGames } from "../../api/PUT/updateListGames";
import { Button } from "../../components/Button";
import { CustonHeaderPage } from "../../components/CustonHeaderPage";
import { InputForm } from "../../components/InputForm";
import { CustomContainer } from "../../styles/globalStyles";
import { Games } from "../../types/Games";
import { formatMonetary } from "../../utils/formartMonetary";
import { NewClientForm } from "./styled";

export const Edition = () => {
  const { id } = useParams();
  const [data, setData] = useState<Games>();
  const [title, setTitle] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  useEffect(() => {
    if (id) {
      getListGamesId({ id: Number(id) }).then((res) => {
        if (res) {
          const { PRICE, TITLE, YEAR } = res;
          setTitle(TITLE);
          setPrice(PRICE);
          setYear(YEAR);
        }
      });
    }
  }, []);

  return (
    <CustomContainer>
      <NewClientForm>
        <CustonHeaderPage title="Edição de jogo" />
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
        <Button
          isPrimary="blue"
          title="Atualizar"
          onClink={() =>
            updateListGames({ price, title, year, id: Number(id) }).then(
              (res) => {
                if (res) {
                  return toast.success("ATUALIZAÇÃO REALIZADA!");
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
