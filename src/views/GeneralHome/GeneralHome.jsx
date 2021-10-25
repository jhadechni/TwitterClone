import { LightText, GrayText } from '../../components/utils';
import {
  Container,
  LogoContainer,
  FormContainer,
  Button,
  Space,
  Img
} from './generalHome.styles';
import TwitterLogo from '../../assets/svg/twitterBigLogo.svg';
import twitterSmallLogo from '../../assets/svg/twitterSmallLogo.svg';
import { Link } from "react-router-dom"

export const GeneralHome = () => {
  <html>
    <meta name="Home" content="Welcome to Twitter!" />
    <meta property="og:title" content="Twitter" />
    <meta property="og:site_name" content="Twitter" />
    <meta property="og:type" content="App" />
    <meta property="og:description" content="This is a Twitter clone" />

  </html>

  return (
    <>
      <Container>
        <LogoContainer>
          <Img primary src={TwitterLogo} />
        </LogoContainer>
        <FormContainer>
          <Img src={twitterSmallLogo} />
          <h1>Welcome to Twitter</h1>
          <Link to="/login">
            <Button> Login now </Button>
          </Link>
          <Space>
            <GrayText>
              Dont have an account?{' '}
              <Link to="/signup">
                <LightText>Join free today</LightText>{' '}
              </Link>
            </GrayText>
            <Link to="signup">
              <Button> Sign Up</Button>
            </Link>
          </Space>
        </FormContainer>
      </Container>
    </>
  );
};
