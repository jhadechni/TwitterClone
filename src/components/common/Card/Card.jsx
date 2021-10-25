import PropTypes from 'prop-types';
import { GrayText } from '../../utils';
import Verified from '../../../assets/svg/verifiedicon.svg';
import Retweet from '../../../assets/svg/retweeticon.svg';
import Like from '../../../assets/svg/likeicon.svg';
import Reply from '../../../assets/svg/replyicon.svg';
import Share from '../../../assets/svg/shareicon.svg';
import {
  Container,
  ProfileCont,
  Img,
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
export const Card = ({ values }) => {
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
        <IconImg src={Reply} alt="Comment-Icon" />
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
