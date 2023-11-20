import { API_GAMES } from "..";

// import { Games } from "../../types/Games";

interface IUpdateListGames {
  title: string;
  year: string;
  price: string;
  id: number;
}
const updateListGames = async ({
  id,
  price,
  title,
  year,
}: IUpdateListGames): Promise<boolean> => {
  const game = {
    id,
    price,
    title,
    year,
  };
  return new Promise((resolve) => {
    try {
      API_GAMES.put(`/gameupdate`, game)
        .then(() => {
          // const listGames: Games[] = res.data.games;
          resolve(true);
          return true;
        })
        .catch(() => {
          resolve(false);
          return false;
        });
    } catch (erro) {
      resolve(false);
    }
  });
};

export { updateListGames };
