import { useEffect, useState } from "react";

import { getListGames } from "../../api/GET/listGames";
import { Cards } from "../../components/Card";
import { CustomContainer } from "../../styles/globalStyles";
import { Games } from "../../types/Games";
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
