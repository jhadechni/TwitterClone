import React, {useState} from 'react'
import PropTypes from 'prop-types';
import { GrayText } from '../../utils';
import Verified from '../../../assets/svg/verifiedicon.svg';
import Retweet from '../../../assets/svg/retweeticon.svg';
import Like from '../../../assets/svg/likeicon.svg';
import Reply from '../../../assets/svg/replyicon.svg';
import Share from '../../../assets/svg/shareicon.svg';
import Threedots from '../../../assets/svg/threedots.svg';
import {
  Container,
  ProfileCont,
  Img,
  MoreCont,
  ContentContainer,
  HeadersContainer,
  TweetContent,
  Text,
  Icons,
  IconImg,
  Margins,
  Content,
  ImgContent
} from './Card.styles';
import { ModalReply } from '../ModalReply'
import { ModalMore } from '../ModalMore'

export const Card = ({ values }) => {
  const [showModalReply, setShowModalReply] = useState(false);
  const [showModalMore, setShowModalMore] = useState(false);
  return (
    <Margins>
      <Container>
        <ProfileCont>
          <Img round src={values.profile_picture} alt="Profile-picture" />
        </ProfileCont>
        <ContentContainer>
          <HeadersContainer>
            <Text>{values.name}</Text>
            {values.is_verified && <IconImg src={Verified} alt="verify-icon" />}
            <GrayText light dimmed margin>
              {values.username}
            </GrayText>
            <GrayText margin>• {values.time_ago}</GrayText>
            <MoreCont>
              <IconImg onClick={() => setShowModalMore(true)} src={Threedots}/>
              {showModalMore && <ModalMore closeModalMore={setShowModalMore}/>}
            </MoreCont>
          </HeadersContainer>

          <Content>
            <TweetContent>{values.content}</TweetContent>
            {values.include_image && (
              <ImgContent src={values.content_image} alt="Image" />
            )}
          </Content>
        </ContentContainer>
      </Container>
      <Icons>
        <IconImg onClick={() => setShowModalReply(true)} src={Reply} alt="Comment-Icon" />
        {showModalReply && <ModalReply closeModalReply={setShowModalReply} values={values} />}
        <IconImg src={Retweet} alt="RT-Icon" />
        <IconImg src={Like} alt="Like-Icon" />
        <IconImg src={Share} alt="ShareIcon" />
      </Icons>
    </Margins>
  );
};

Card.propTypes = {
  values: PropTypes.object.isRequired
};