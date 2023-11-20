import axios, { AxiosHeaders } from "axios";

import { API_GAMES } from "..";

interface IDeleteGame {
  id: number;
}
const deleteGame = async ({ id }: IDeleteGame): Promise<boolean> => {
  return new Promise((resolve) => {
    try {
      API_GAMES.delete(`/game/${id}`)
        .then((res) => {
          resolve(true);
          return true;
        })
        .catch((error) => {
          console.log("error ", error);
          resolve(false);
          return false;
        });
    } catch (erro) {
      resolve(false);
    }
  });
};

export { deleteGame };
