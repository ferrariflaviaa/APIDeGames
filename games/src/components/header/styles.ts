import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
  color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BGCOLOR1};
  text-decoration: none;
  padding: 0 2rem;
  .options {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    a {
      padding-right: 16px;
      font-weight: 200;
      cursor: pointer;
    }
  }
`;
