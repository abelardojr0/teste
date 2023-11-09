import Carousel from "better-react-carousel";
import { Section, Title } from "../../GlobalStyle";
import {
  ProjetosContainer,
  ProjetosImg,
  ProjetosInfos,
  ProjetosInfosTitle,
  ProjetosButton,
  ProjetosDivButtons,
} from "./style";
import img from "../../assets/projeto.png";
export const Projetos = () => {
  return (
    <Section>
      <Title>Projetos</Title>
      <ProjetosContainer>
        <Carousel cols={2} rows={1} gap={10} loop>
          <Carousel.Item>
            <ProjetosInfos>
              <ProjetosInfosTitle>Rick and Morty Api</ProjetosInfosTitle>
              <ProjetosImg src={img} />
              <ProjetosDivButtons>
                <ProjetosButton
                  href="https://infinity-rick-morty.vercel.app/"
                  target="_blank"
                >
                  Ver projeto
                </ProjetosButton>

                <ProjetosButton
                  href="https://github.com/abelardojr0/infinity_rick_morty"
                  target="_blank"
                >
                  Ver Código
                </ProjetosButton>
              </ProjetosDivButtons>
            </ProjetosInfos>
          </Carousel.Item>

          <Carousel.Item>
            <ProjetosInfos>
              <ProjetosInfosTitle>Rick and Morty Api</ProjetosInfosTitle>
              <ProjetosImg src={img} />
              <ProjetosDivButtons>
                <ProjetosButton
                  href="https://infinity-rick-morty.vercel.app/"
                  target="_blank"
                >
                  Ver projeto
                </ProjetosButton>

                <ProjetosButton
                  href="https://github.com/abelardojr0/infinity_rick_morty"
                  target="_blank"
                >
                  Ver Código
                </ProjetosButton>
              </ProjetosDivButtons>
            </ProjetosInfos>
          </Carousel.Item>

          <Carousel.Item>
            <ProjetosInfos>
              <ProjetosInfosTitle>Rick and Morty Api</ProjetosInfosTitle>
              <ProjetosImg src={img} />
              <ProjetosDivButtons>
                <ProjetosButton
                  href="https://infinity-rick-morty.vercel.app/"
                  target="_blank"
                >
                  Ver projeto
                </ProjetosButton>

                <ProjetosButton
                  href="https://github.com/abelardojr0/infinity_rick_morty"
                  target="_blank"
                >
                  Ver Código
                </ProjetosButton>
              </ProjetosDivButtons>
            </ProjetosInfos>
          </Carousel.Item>

          <Carousel.Item>
            <ProjetosInfos>
              <ProjetosInfosTitle>Rick and Morty Api</ProjetosInfosTitle>
              <ProjetosImg src={img} />
              <ProjetosDivButtons>
                <ProjetosButton
                  href="https://infinity-rick-morty.vercel.app/"
                  target="_blank"
                >
                  Ver projeto
                </ProjetosButton>

                <ProjetosButton
                  href="https://github.com/abelardojr0/infinity_rick_morty"
                  target="_blank"
                >
                  Ver Código
                </ProjetosButton>
              </ProjetosDivButtons>
            </ProjetosInfos>
          </Carousel.Item>
        </Carousel>
      </ProjetosContainer>
    </Section>
  );
};
