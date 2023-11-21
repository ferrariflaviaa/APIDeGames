import { API_GAMES } from "..";

interface IPostCreateGames {
  title: string;
  year: string;
  price: string;
  linkImage: string;
}
const postCreateGames = async ({
  price,
  title,
  year,
  linkImage,
}: IPostCreateGames): Promise<boolean> => {
  const game = {
    price,
    title,
    year,
    linkImage,
  };
  return new Promise((resolve) => {
    try {
      API_GAMES.post(`/game`, game)
        .then(() => {
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

export { postCreateGames };
