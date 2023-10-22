import { Dispatch, SetStateAction } from "react";

import { Container } from "./styles";

interface IInputFormProps {
  sizeInput?: number;
  title: string;
  type: string;
  name: string;
  value?: string;
  onChange: Dispatch<SetStateAction<string>>;
  disabled?: boolean;
}
export function InputForm({
  sizeInput,
  title,
  type,
  name,
  value,
  onChange,
  disabled,
}: IInputFormProps) {
  return (
    <Container sizeInput={sizeInput}>
      <label>{title}</label>
      <input
        required
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      />
    </Container>
  );
}
