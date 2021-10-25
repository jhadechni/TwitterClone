import { Form } from '../../components/common';
import TwitterBlue from "../../assets/svg/twitterSmallLogo.svg"
import { Container, Tools, Img } from './passwordrecovery.styles';
import {
  ButtonLightBlue,
  GrayText,
  LightText,
  Input,
  Link,
  Title,
  Label
} from '../../components/utils';
export const PasswordRecovery = () => {
  return (
    <Container>
      <Tools>
        <Img alt="Twitter-Logo" src={TwitterBlue} />
        <Label> My twitter</Label>
        <Title>Recover your password</Title>

        <Form>
          <Label htmlFor="userNameInput">Email or username:</Label>
          <Input
            id="userNameInput"
            type="text"
            name="username"
            placeholder="John.snow@gmail.com"
          />
        </Form>

        <ButtonLightBlue>Recover your password</ButtonLightBlue>
        <GrayText align>
          Return to{' '}
          <Link to="/login">
            <LightText>Login</LightText>
          </Link>
        </GrayText>
      </Tools>
    </Container>
  );
};