import { useEffect, useState } from "react";

import { getListGames } from "../../../api/GET/listGames";
import { getCreateGames } from "../../../api/POST/createGames";
import { CustomContainer } from "../../../styles/globalStyles";
import { Games } from "../../../types/Games";
import { Cards } from "../../Card";
import { Container } from "./styles";

export const Home = () => {
  const [listGames, setListGames] = useState<Games[]>();
  useEffect(() => {
    getListGames().then((res) => {
      setListGames(res);
    });
  }, []);

  return (
    <CustomContainer>
      <Container>
        {listGames &&
          listGames.map((item) => {
            const { PRICE, TITLE, YEAR, id } = item;
            return (
              <div className="card" key={id}>
                <Cards key={id} price={PRICE} title={TITLE} year={YEAR} />;
              </div>
            );
          })}
      </Container>
    </CustomContainer>
  );
};
