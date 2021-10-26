import styled from 'styled-components';
import { max_device } from '../../utils';

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
  height: max-content;
  min-height: 230px;
  border-radius: 15px;
  padding-bottom: 10px;
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
    margin-right: 25px;
    margin-left: 25px;
    margin-top: 10px;
    height:70%;
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
    border-top: solid 1px #e7ecf065;
`

export const AddersButtonContainer = styled.div `
    display: flex;
    padding-top: 10px;
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
    height: 42px;
    width: 98px;
    background-color: #1DA1F2;
    border: none;
    border-radius: 55px;
    color: white;
    font-size: 15px;
    font-weight: bold;
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
    padding-top: 10px;
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
`