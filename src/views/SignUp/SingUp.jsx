import { Form } from '../../components/common';
import TwitterBlue from "../../assets/svg/twitterSmallLogo.svg"
import { Container, Tools, Img } from './SignUp.styles';
import {
  ButtonLightBlue,
  GrayText,
  LightText,
  Input,
  Link,
  Title,
  Label
} from '../../components/utils';
export const SingUp = () => {
  return (
    <Container>
      <Tools>
        <Img alt="Twitter-Logo" src={TwitterBlue} />
        <Label> My twitter</Label>
        <Title>Create your account</Title>

        <Form>
          <Label htmlFor="nameInput">Name</Label>
          <Input
          id="nameInput"
          type="text"
          name="name"
          placeholder="John Snow"
          />
          <Label htmlFor="userNameInput">Username</Label>
          <Input
            id="userNameInput"
            type="text"
            name="username"
            placeholder="johnsnow"
          /><Label htmlFor="emailInput">Email</Label>
          <Input
            id="emailInput"
            type="text"
            name="email"
            placeholder="john.snow@gmail.com"
          />
          <Label htmlFor="passwordInput">Password</Label>
          <Input id="passwordInput" type="password" name="password" />
          <Label htmlFor="passwordConfirmationInput">Password Confirmation</Label>
          <Input id="passwordConfirmationInput" type="password" name="passwordConfirmation" />
        </Form>

        <ButtonLightBlue>Sing Up</ButtonLightBlue>
        <GrayText align>
          Already have an account?{' '}
          <Link to="/login">
            <LightText>Login</LightText>
          </Link>
        </GrayText>
      </Tools>
    </Container>
  );
};