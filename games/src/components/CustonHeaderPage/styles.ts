import styled from "styled-components";

export const CustonHeaderPageContainer = styled.div`
  transition: 0.3s all;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 0 1rem;
  margin: 0;

  h1 {
    font-weight: 500;
    font-size: 2rem;
    margin-left: 0.5rem;
  }
`;
