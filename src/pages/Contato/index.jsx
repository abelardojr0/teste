import { Section, Title } from "../../GlobalStyle";
import {
  ContatoBotao,
  ContatoContainer,
  ContatoField,
  ContatoInput,
  ContatoLabel,
  ContatoTextArea,
} from "./style";

export const Contato = () => {
  return (
    <Section>
      <Title>Contato</Title>
      <ContatoContainer>
        <ContatoField>
          <ContatoLabel htmlFor="nome">Nome</ContatoLabel>
          <ContatoInput type="text" id="nome" name="nome" />
        </ContatoField>

        <ContatoField>
          <ContatoLabel htmlFor="email">E-mail</ContatoLabel>
          <ContatoInput type="email" id="email" name="email" />
        </ContatoField>

        <ContatoField>
          <ContatoLabel htmlFor="mensagem">Mensagem</ContatoLabel>
          <ContatoTextArea id="mensagem" name="mensagem" rows={10} />
        </ContatoField>

        <ContatoBotao>Enviar</ContatoBotao>
      </ContatoContainer>
    </Section>
  );
};
