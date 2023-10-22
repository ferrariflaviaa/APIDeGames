import styled, { css } from "styled-components";

interface IContainerProps {
  isPrimary: string;
  space: boolean;
}
export const Container = styled.div<IContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  width: 260px;
  height: 50px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.COLORS.BGCOLOR3};
  margin-top: 32px;

  h1 {
    font-size: 1.1rem;
    font-weight: 600;
  }

  @media (max-width: 550px) {
    width: 100%;
    margin-bottom: 18px;
  }
`;
