import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterSection = styled.footer`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  border-top: 10px solid #c1002c;
  padding: 20px 0;
`;

export const FooterCopyright = styled.p`
  font-size: 24px;
  color: #7b7579;
`;
export const FooterAutor = styled.p`
  font-size: 36px;
  color: #c1002c;
  font-style: italic;
`;

export const FooterSociais = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const FooterLogo = styled(Link)`
  cursor: pointer;
  & svg {
    font-size: 60px;
    color: white;
  }
  &:hover {
    transform: scale(1.05);
  }
`;
