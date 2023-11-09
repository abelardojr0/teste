import {
  HomeBanner,
  HomePerfil,
  HomePerfilImg,
  HomePerfilName,
  HomePerfilRole,
} from "./style";

export const Home = () => {
  return (
    <HomeBanner>
      <HomePerfil>
        <HomePerfilImg src={"https://i.imgur.com/dsTt3q8.jpg"} />
        <HomePerfilName>Abelardo Júnior</HomePerfilName>
        <HomePerfilRole>Desenvolvedor Front-End</HomePerfilRole>
      </HomePerfil>
    </HomeBanner>
  );
};
