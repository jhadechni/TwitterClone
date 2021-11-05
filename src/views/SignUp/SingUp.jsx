import { Form } from '../../components/common';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { createUser } from '../../components/utils/requests';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem('TOKEN') !== null) {
      history.push('/home');
    }
  }, []);
  //Data setting
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setpassword] = useState('');
  const [passwordConfirmation, setpasswordConfirmation] = useState('');

  //Event handlers
  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangeUsername = (e) => setUsername(e.target.value);
  const handleChangepassword = (e) => setpassword(e.target.value);
  const handleChangepasswordConfirmation = (e) => setpasswordConfirmation(e.target.value);


  //request handler
  const handleSignUp = async (name, email, username, password, passwordConfirmation) => {
    const req = await createUser(name, email, username, password, passwordConfirmation);
      console.log(req);
      if (req.status === 200 && req.data.message !=='user created'){
        console.log('im here');
        history.push('/login');
    
      }else{
        history.push('/singup')

        toast.error('User not created', {
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
          onChange= {handleChangeName}
          />
          <Label htmlFor="userNameInput">Username</Label>
          <Input
            id="userNameInput"
            type="text"
            name="username"
            placeholder="johnsnow"
            onChange= {handleChangeUsername}
          /><Label htmlFor="emailInput">Email</Label>
          <Input
            id="emailInput"
            type="text"
            name="email"
            placeholder="john.snow@gmail.com"
            onChange= {handleChangeEmail}
          />
          <Label htmlFor="passwordInput">Password</Label>
          <Input 
          id="passwordInput" 
          type="password" 
          name="password" 
          onChange= {handleChangepassword}
          />
          <Label htmlFor="passwordConfirmationInput">Password Confirmation</Label>
          <Input 
          id="passwordConfirmationInput" 
          type="password" 
          name="passwordConfirmation" 
          onChange= {handleChangepasswordConfirmation}
          />
        </Form>

        <ButtonLightBlue onClick={() => handleSignUp(name, email, username, password, passwordConfirmation)}>Sing Up</ButtonLightBlue>
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