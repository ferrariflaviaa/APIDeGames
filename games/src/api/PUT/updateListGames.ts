import { API_GAMES } from "..";

import { Games } from "../../types/Games";

interface IUpdateListGames {
  id: number;
}
const updateListGames = async ({
  id,
}: IUpdateListGames): Promise<Games[] | undefined> => {
  return new Promise((resolve) => {
    try {
      API_GAMES.get(`/games/${id}`)
        .then((res) => {
          const listGames: Games[] = res.data.games;
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

export { updateListGames };
