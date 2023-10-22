import styled from "styled-components";

interface IInputWidthProps {
  sizeInput?: number;
}

const getWidth = (props: IInputWidthProps) => {
  if (props.sizeInput) {
    return `${props.sizeInput}%`;
  }
  return "100%";
};

export const Container = styled.div<IInputWidthProps>`
  display: flex;
  flex-direction: column;
  width: ${getWidth};
  margin-top: 20px;

  label {
    font-size: 0.8rem;
    font-weight: 700;
    padding-bottom: 7px;
    color: ${({ theme }) => theme.COLORS.WHITE};

    @media (max-width: 900px) {
      font-size: 0.8rem;
    }
  }
  input {
    outline: none;
    height: 50px;
    font-size: 1rem;
    padding: 0px 10px;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.COLORS.LIGHT_GRAY_20};
    border: 0;
  }
  @media (max-width: 920px) {
    width: 100%;
  }
`;
