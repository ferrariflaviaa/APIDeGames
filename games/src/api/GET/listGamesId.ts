import { API_GAMES } from "..";

import { Games } from "../../types/Games";

interface IGetListGamesId {
  id: number;
}
const getListGamesId = async ({
  id,
}: IGetListGamesId): Promise<Games | undefined> => {
  console.log(id);
  return new Promise((resolve) => {
    try {
      API_GAMES.get(`/games/${id}`)
        .then((res) => {
          const listGames: Games = res.data.games;
          resolve(listGames);
          return listGames;
        })
        .catch((error) => {
          resolve(undefined);
          return undefined;
        });
    } catch (erro) {
      resolve(undefined);
    }
  });
};

export { getListGamesId };
