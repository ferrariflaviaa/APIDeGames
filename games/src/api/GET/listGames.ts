import { API_GAMES } from "..";

import { Games } from "../../types/Games";

const getListGames = async (): Promise<Games[] | undefined> => {
  return new Promise((resolve) => {
    try {
      API_GAMES.get(`/games`)
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

export { getListGames };
