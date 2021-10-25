import { Container, Text } from './button.styles';
export const Button = ({ children }) => {
  return (
    <Container>
      <Text>{children}</Text>
    </Container>
  );
};
