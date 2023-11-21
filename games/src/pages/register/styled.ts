import styled from "styled-components";

export const NewClientForm = styled.form`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  transition: 0.3s all;

  @media (max-width: 929px) {
    flex-direction: column;
  }
`;
