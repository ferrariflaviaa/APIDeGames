import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .card {
    flex-basis: calc(
      25% - 10px
    ); /* Ajuste o valor conforme necessário para a margem desejada entre os cards */
    margin-bottom: 10px; /* Adicione margem inferior para separar as linhas */
    /* Outros estilos para seus cards */
  }
`;
