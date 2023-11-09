import styled, { createGlobalStyle } from "styled-components";
import detail from "./assets/detalhe_duplo.png";
export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
  font-family: 'Lilita One', sans-serif;
  background-color: #000019;
  color: white
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

export const Title = styled.h1`
  margin-top: 100px;
  font-size: 70px;
  font-weight: bold;
  font-family: "Press Start 2P", cursive;
  position: relative;
  &::before {
    content: "";
    background-image: url(${detail});
    background-position: center;
    background-size: cover;
    position: absolute;
    top: -50px;
    left: -60px;
    height: 130px;
    width: 130px;
    z-index: -1;
  }
`;
export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
