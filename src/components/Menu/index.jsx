import {
  MenuCurriculo,
  MenuList,
  MenuListItem,
  MenuLogo,
  MenuNav,
} from "./style";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
export const Menu = () => {
  return (
    <>
      <MenuNav>
        <Link to={"/"}>
          <MenuLogo src={logo} />
        </Link>
        <MenuList>
          <li>
            <MenuListItem to={"/"}>Home</MenuListItem>
          </li>
          <li>
            <MenuListItem to={"/sobre"}>Sobre</MenuListItem>
          </li>
          <li>
            <MenuListItem to={"/cursos"}>Cursos</MenuListItem>
          </li>
          <li>
            <MenuListItem to={"/skills"}>Skills</MenuListItem>
          </li>
          <li>
            <MenuListItem to={"/projetos"}>Projetos</MenuListItem>
          </li>
          <li>
            <MenuListItem to={"/contato"}>Contato</MenuListItem>
          </li>
        </MenuList>
        <MenuCurriculo>Currículo</MenuCurriculo>
      </MenuNav>
    </>
  );
};
