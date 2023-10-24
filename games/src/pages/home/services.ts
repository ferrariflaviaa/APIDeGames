import { Dispatch, SetStateAction } from "react";

interface ITeste {
  update: boolean;
  setUpdate: Dispatch<SetStateAction<boolean>>;
}
const teste = ({ update, setUpdate }: ITeste) => {
  setUpdate(!update);
};

export { teste };
