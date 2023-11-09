import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import {
  FooterAutor,
  FooterCopyright,
  FooterLogo,
  FooterSection,
  FooterSociais,
} from "./style";

export const Footer = () => {
  return (
    <FooterSection>
      <FooterAutor>Desenvolvido por Abelardo Júnior</FooterAutor>
      <FooterCopyright>
        PortINfólio © - Todos os direitos reservados
      </FooterCopyright>
      <FooterSociais>
        <FooterLogo to={"https://github.com/abelardojr0"}>
          <GitHubIcon />
        </FooterLogo>
        <FooterLogo to={"https://www.linkedin.com/in/abelardo-junior/"}>
          <LinkedInIcon />
        </FooterLogo>
      </FooterSociais>
    </FooterSection>
  );
};
