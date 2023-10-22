import styled from "styled-components";

export const CustomContainerCard = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const CustomContentCard = styled.div`
  width: 250px;
  height: 300px;
  background: #d9d9d9;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .about {
    height: 50%;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    background: #3a3838;

    h1 {
      color: #fff;
      text-align: center;
      font-family: Inter;
      font-size: 32px;
      font-weight: 400;
      padding: 8px 0;
    }

    .subtTitle {
      color: #fff;
      text-align: start;
      font-size: 16px;
      font-weight: 150px;
      font-family: Inter;
      padding-left: 14px;

      h3 {
        padding: 2px 0;
      }
    }
  }
`;
