import { Form } from '../../components/common';
import TwitterBlue from "../../assets/svg/twitterSmallLogo.svg"
import { Container, Tools, Img } from './loginstyles';
import {
  ButtonLightBlue,
  GrayText,
  LightText,
  Input,
  Link,
  Title,
  Label
} from '../../components/utils';
export const Login = () => {
  return (
    <Container>
      <Tools>
        <Img alt="Twitter-Logo" src={TwitterBlue} />
        <Label> My twitter</Label>
        <Title>Login to your account</Title>

        <Form>
          <Label htmlFor="userNameInput">Email or username:</Label>
          <Input
            id="userNameInput"
            type="text"
            name="username"
            placeholder="John.snow@gmail.com"
          />
          <Label htmlFor="passwordInput">Password:</Label>
          <Input id="passwordInput" type="password" name="password" />
        </Form>

        <Link to="/passwordRecovery" >
          <LightText>Forgot password?</LightText>
        </Link>
        <Link to="/home" >
          <ButtonLightBlue>Login now</ButtonLightBlue>
        </Link>
        <GrayText align>
          Dont have an account?{' '}
          <Link to="/signup">
            <LightText>Join free today</LightText>
          </Link>
        </GrayText>
      </Tools>
    </Container>
  );
};
