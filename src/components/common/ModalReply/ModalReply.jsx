import ReactDOM from 'react-dom';
import React, {useState} from 'react';

import {
  ModalContainerBig,
  ModalContainer,
  ButtonContainer,
  Icon,
  CreateTweetSubcontainer,
  CreateTweetProfilePicture,
  CreateTweetBoxContainer,
  CreateTweetInputBox,
  CreateTweetButtonsContainer,
  AddersButtonContainer,
  IconsButtons,
  IconsButtonsImg,
  CreateTweetButton,
  TweetButtonContaner,
  Line,
  CaptainDiv,
  Container,
  ProfileCont,
  Img,
  ContentContainer,
  HeadersContainer,
  Text,
  TweetContent,
  Content
} from './ModalReply.styles';
import { GrayText } from '../../utils';
import ProfilePic from '../../../assets/Images/ProfilePic.png'
import closeIcon from '../../../assets/svg/closeicon.svg'
import mediaIcon from '../../../assets/svg/mediaicon.svg'
import gifIcon from '../../../assets/svg/gificon.svg'
import pollIcon from '../../../assets/svg/pollicon.svg'
import emojiIcon from '../../../assets/svg/emojiicon.svg'
import plusIcon from '../../../assets/svg/plusicon.svg'
import elipse from '../../../assets/Images/elipse.png'

export const ModalReply = (props) => {
  console.log(props)
  const [show, setShow] = useState(false);
    const handleChange = (e) => {
        let r = e.target.value
        if (r) {
            setShow(true)
        } else {
            setShow (false)
        }
    }

    const [tweet, setTweet] = useState({});
    const handleTweet = (e) => {
        
    }

  return ReactDOM.createPortal(
    <ModalContainerBig>
      <ModalContainer>
        <ButtonContainer onClick={() => props.closeModalReply(false)}>
            <Icon src={closeIcon} alt="Profile-picture" />
        </ButtonContainer>
        <Container>
          <ProfileCont>
            <Img round src={ProfilePic} alt="Profile-picture" />
          </ProfileCont>
          <ContentContainer>
            <HeadersContainer>
              <Text>{'values.name'}</Text>
              <GrayText light dimmed margin>
                {'values.username'}
              </GrayText>
              <GrayText margin>• {'values.time_ago'}</GrayText>
            </HeadersContainer>
            <Content>
              <TweetContent>{'values.content'}</TweetContent>
            </Content>
          </ContentContainer>
        </Container>
        <CreateTweetSubcontainer>
          <div>
            <CreateTweetProfilePicture src={ProfilePic} alt='Profile'/>
          </div>
          <CreateTweetBoxContainer>
            <CreateTweetInputBox type='text' onChange={handleChange} placeholder='Tweet your reply'/>
            <CreateTweetButtonsContainer>
                <AddersButtonContainer>
                    <IconsButtons>
                        <IconsButtonsImg src={mediaIcon} alt='icon'/>
                    </IconsButtons>
                    <IconsButtons>
                        <IconsButtonsImg src={gifIcon} alt='icon'/>
                    </IconsButtons>
                    <IconsButtons>
                        <IconsButtonsImg src={pollIcon} alt='icon'/>
                    </IconsButtons>
                    <IconsButtons>
                        <IconsButtonsImg src={emojiIcon} alt='icon'/>
                    </IconsButtons>
                </AddersButtonContainer>
                <TweetButtonContaner>
                    <CaptainDiv>
                        {show &&
                            <>
                                <IconsButtonsImg src={elipse} alt='icon'/>
                                <Line/>
                                <IconsButtonsImg src={plusIcon} alt='icon'/>
                            </>
                        }
                    </CaptainDiv>
                    <CreateTweetButton onClick={handleTweet}>Tweet</CreateTweetButton>
                </TweetButtonContaner>
            </CreateTweetButtonsContainer>
          </CreateTweetBoxContainer>
        </CreateTweetSubcontainer>
      </ModalContainer>
    </ModalContainerBig>,
    document.getElementById('modal')
  );
};
