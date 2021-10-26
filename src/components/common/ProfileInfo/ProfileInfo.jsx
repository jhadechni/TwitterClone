import PropTypes from 'prop-types';
import { BlackText, GrayText } from '../../utils';
import {
  Container,
  ProfileCont,
  Img,
  ContentContainer,
  HeadersContainer,
  Text,
  Margins,
  BioSection,
  LightBlueText,
  GrayWords,
  IconImg,
  ContainerName
} from './ProfileInfo.styles';
import Verified from '../../../assets/svg/verifiedicon.svg';
import Calendar from '../../../assets/svg/calendaricon.svg';
import Location from '../../../assets/svg/locationicon.svg';
export const ProfileInfo = ({ values }) => {
  return (
    <Margins>
      <Container>
        <Img src={values.banner_image} alt="banner"/>
        <ProfileCont>
          <Img round profile src={values.profile_picture} alt="Profile-picture" />
          
        </ProfileCont>
        <ContentContainer>
          <HeadersContainer>
            <ContainerName>
            <Text>{values.name}</Text>
            {values.is_verified && <IconImg src={Verified} alt="verify-icon" />}
            </ContainerName>
            
            <GrayText light dimmed margin>
              {values.username}
            </GrayText>
          </HeadersContainer>
          <BioSection>
            <BlackText margin light>{values.bio}</BlackText>
            <LightBlueText> Translate bio</LightBlueText>
            <ContainerName>
            {values.showing_location && <IconImg bio src={Location} alt="location-icon" />}
            <GrayWords> {values.location}</GrayWords>
            <IconImg bio bio2 src={Calendar} alt="calendar-icon" />
            <GrayWords> Joined {values.joined_date}</GrayWords>
            </ContainerName>
            <ContainerName>
            <BlackText margin margin_top>{values.following}</BlackText> <GrayWords bio> Following </GrayWords> 
            <BlackText margin margin_top bio>{values.followers}</BlackText> <GrayWords bio> Followers </GrayWords> 
            </ContainerName>
          </BioSection>
        </ContentContainer>
      </Container>
    </Margins>
  );
};

ProfileInfo.propTypes = {
  values: PropTypes.object.isRequired
};
