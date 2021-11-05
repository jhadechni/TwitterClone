import { Form } from '../../components/common';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../auth';
import { login } from '../../components/utils/requests';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TwitterBlue from "../../assets/svg/twitterSmallLogo.svg";
import { Container, Tools, Img } from './Login.styles';
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

  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem('TOKEN') !== null) {
      history.push('/home');
    }
  }, []);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeUser = (e) => setUsername(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);
  const handleLogin = async (username, password) => {
    const req = await login(username, password);
      console.log(req);
      if (req.status === 200 && req.data.message !=='user not exist'){
        console.log('im here');
        auth(req.data.token, false);
        history.push('/home');
    
      }else{
        history.push('/login')

        toast.error('User or password invalid', {
          position: "bottom-left",
          autoClose: 4500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
    }
  };

  return (
    <Container>
         <ToastContainer
          position="bottom-left"
          autoClose={4500}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
      <Tools>
        <Img alt="Twitter-Logo" src={TwitterBlue} />
        <Label> My twitter</Label>
        <Title>Login to your account</Title>

        <Form>
          <Label htmlFor="userNameInput">Email or username:</Label>
          <Input
            onChange={handleChangeUser}
            id="userNameInput"
            type="text"
            name="username"
            placeholder="John.snow@gmail.com"
          />
          <Label htmlFor="passwordInput">Password:</Label>
          <Input onChange={handleChangePassword} id="passwordInput" type="password" name="password" />
        </Form>

        <Link to="/passwordRecovery" >
          <LightText>Forgot password?</LightText>
        </Link>
        <ButtonLightBlue onClick={() => handleLogin(username, password)}>Login now</ButtonLightBlue>
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
