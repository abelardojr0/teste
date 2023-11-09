import { Section, Title } from "../../GlobalStyle";
import { SobreContainer, SobreImg, SobreText } from "./style";
export const Sobre = () => {
  return (
    <Section>
      <Title>Sobre</Title>
      <SobreContainer>
        <SobreText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse atque
          distinctio inventore laudantium possimus nulla autem eius deserunt
          vel, eos, iure optio ex. Ipsum similique eligendi commodi corporis
          odio laborum. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Esse atque distinctio inventore laudantium possimus nulla autem
          eius deserunt vel, eos, iure optio ex. Ipsum similique eligendi
          commodi corporis odio laborum.
        </SobreText>
        <SobreImg src={"https://i.imgur.com/6rDZ9x2.png"} />
      </SobreContainer>
    </Section>
  );
};
