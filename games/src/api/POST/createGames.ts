import { API_GAMES } from "..";

import { Games } from "../../types/Games";

interface IGetCreateGames {
  // data: Games;
  title: string;
  year: string;
  price: string;
}
const getCreateGames = async ({
  price,
  title,
  year,
}: IGetCreateGames): Promise<boolean> => {
  const game = {
    price,
    title,
    year,
  };
  console.log(game);
  return new Promise((resolve) => {
    try {
      API_GAMES.post(`/game`, game)
        .then((res) => {
          console.log("deu certo");
          resolve(true);
          return true;
        })
        .catch((error) => {
          console.log("deu error", error);
          resolve(false);
          return false;
        });
    } catch (erro) {
      console.log("deu erro", erro);
      resolve(false);
    }
  });
};

export { getCreateGames };
