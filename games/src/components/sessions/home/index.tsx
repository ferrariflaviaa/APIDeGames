import { useEffect, useState } from "react";

import { getListGames } from "../../../api/GET/listGames";
import { Games } from "../../../types/Games";
import { Cards } from "../../Card";

export const Home = () => {
  const [listGames, setListGames] = useState<Games[]>();
  useEffect(() => {
    getListGames().then((res) => {
      setListGames(res);
    });
  }, []);
  return (
    <div>
      {listGames &&
        listGames.map((item) => {
          const { PRICE, TITLE, YEAR, id } = item;
          return <Cards key={id} price={PRICE} title={TITLE} year={YEAR} />;
        })}
    </div>
  );
};
