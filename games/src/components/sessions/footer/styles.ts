import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
  height: 160px;
  background-color: ${({ theme }) => theme.COLORS.BGCOLOR1};
  text-decoration: none;
  .networks {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;
