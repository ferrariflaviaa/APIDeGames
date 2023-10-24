import { useEffect, useState } from "react";

import { getListGames } from "../../api/GET/listGames";
import { Cards } from "../../components/Card";
import { CustomContainer } from "../../styles/globalStyles";
import { Games } from "../../types/Games";
import { Container } from "./styles";

export const Home = () => {
  const [listGames, setListGames] = useState<Games[]>();
  // const [update, setUpdate] = useState<boolean>(false);

  useEffect(() => {
    getListGames().then((res) => {
      setListGames(res);
    });
  }, []);

  return (
    <CustomContainer>
      <Container>
        {listGames &&
          listGames.map((item, index) => {
            return (
              <div className="card" key={index}>
                <Cards key={index} data={item} />;
              </div>
            );
          })}
      </Container>
    </CustomContainer>
  );
};
