import { Section, Title } from "../../GlobalStyle";
import { SkillsGrid, SkillsImg } from "./style";
import html from "../../assets/logos/html.png";
import css from "../../assets/logos/css.png";
import js from "../../assets/logos/js.png";
import react from "../../assets/logos/react.png";
import vite from "../../assets/logos/vite.png";
import styled_components from "../../assets/logos/styled_components.png";
import python from "../../assets/logos/python.png";
import mysql from "../../assets/logos/mysql.png";
export const Skills = () => {
  return (
    <Section>
      <Title>Skills</Title>
      <SkillsGrid>
        <SkillsImg src={html} />
        <SkillsImg src={css} />
        <SkillsImg src={js} />
        <SkillsImg src={react} />
        <SkillsImg src={vite} />
        <SkillsImg src={styled_components} />
        <SkillsImg src={python} />
        <SkillsImg src={mysql} />
      </SkillsGrid>
    </Section>
  );
};
