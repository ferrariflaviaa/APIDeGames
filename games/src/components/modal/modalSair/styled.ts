import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  height: 160px;

  .rowButton {
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: 400;
  }
`;
