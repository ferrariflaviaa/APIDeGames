import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

import { listNetworks } from "../../../utils/listNetworks";
import { Container } from "./styles";

export const Footer = () => {
  const { github, instagram, linkedin } = listNetworks;

  return (
    <Container>
      <div className="networks">
        <a href={instagram} target="_blank">
          <AiFillInstagram
            style={{ width: "50px", height: "50px", color: "#B1BAC7" }}
          />
        </a>
        <a href={linkedin} target="_blank">
          <AiFillLinkedin
            style={{ width: "50px", height: "50px", color: "#B1BAC7" }}
          />
        </a>
        <a href={github} target="_blank">
          <AiFillGithub
            style={{ width: "50px", height: "50px", color: "#B1BAC7" }}
          />
        </a>
      </div>

      <p> © 2023 Copyright: FlaviaFerrari</p>
    </Container>
  );
};
