import styled from 'styled-components';
import { max_device, LIGHT_BLACK, DIMMED_GRAY, LIGHT_BLUE } from '../../utils';
import { Link } from 'react-router-dom';

export const ModalContainerBig = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
`;

export const ModalContainer = styled.section`
  background-color: white;
  width: 568px;
  height: auto;
  min-height: 320px;
  border-radius: 16px;
`;

export const ButtonContainer = styled.div`
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-width: 0 0 1px 0;
  @media ${max_device.sm} {
    width: auto;
  }
`;
export const Icon = styled.img`
  width:  '20px';
  height:  '20px';
  background-color: transparent;
  border-radius: 20px;
  &:hover {
        background-color: rgb(231, 231, 232);
    }
`;

export const CreateTweetSubcontainer = styled.div `
  display: flex;
  padding-top: 5px;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 5px;
`

export const CreateTweetProfilePicture = styled.img `
    width: 48px;
    height: 48px;
`

export const CreateTweetBoxContainer = styled.div `
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 10px;
`

export const CreateTweetInputBox = styled.textarea `
    font-size: 19px;
    padding-top: 15px;
    resize: inherit;
    font-family: 'Roboto' , sans-serif;
    border: none;
    outline: none;
    color: #000000;
    overflow-wrap: break-word;
    white-space: pre-wrap;
`

export const CreateTweetButtonsContainer = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

export const AddersButtonContainer = styled.div `
    display: flex;
`

export const IconsButtons = styled.button `
    width: 35px;
    height: 35px;
    margin-right: 24px;
    margin-bottom: 0px;
    cursor: pointer;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border-radius: 20px;

    &:hover {
        background-color: #1da0f21e;
    }
`

export const CreateTweetButton = styled.button `
    height: 35px;
    width: 98px;
    background-color: #1DA1F2;
    border: none;
    border-radius: 55px;
    color: white;
    font-size: 15px;
    cursor: pointer;
    &:hover {
        background-color: #117dc0;
    }
`

export const TweetButtonContaner = styled.div `
    width: 197px;
    height: 42px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const IconsButtonsImg = styled.img `
    width: 20px;
    height: 20px;
    margin: 0px;
    padding: 0px;
`

export const Line = styled.td `
    border-left: 1px solid #BDBDBD;
    height: 70%;
`

export const CaptainDiv = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:50%;
    height: 100%;
    margin-right: 10px;
`;

export const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 15px;
  display: grid;
  grid-template-columns: 0.2fr 2fr 0.2fr;
  @media ${max_device.lg} {
    grid-template-columns: 0.2fr 2fr 0.2fr;
  }
`;
export const ProfileCont = styled.div``;
export const Img = styled.img`
  width: ${(props) => (props.round ? '40px' : '100%')};
  height: ${(props) => (props.round ? '40px' : '50%')};
`;
export const ContentContainer = styled.div``;
export const IconImg = styled.img`
  cursor: pointer;
  border-radius: 24px;
  &:hover {
    background-color: #1da0f21e;
  }
`;
export const HeadersContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Text = styled.h4`
  font-weight: 700;
  margin: 0px 5px 0px 5px;
`;
export const Content = styled.div`
  margin: 0px 0 7px 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media ${max_device.lg} {
    align-items: center;
  }
`;
export const TweetContent = styled.p`
  color: ${LIGHT_BLACK};
  margin: 10px 0px 10px 10px;
  font-weight: 400;
  font-size: 15px;
`;
export const GrayWords = styled.p`
  color: ${DIMMED_GRAY};
  margin: 10px 0px 10px 10px;
  font-weight: 400;
  font-size: 15px;
`;
export const LightBlueText = styled(Link)`
  color: ${LIGHT_BLUE};
  text-decoration: none;
`;