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
  GrayWords
} from './ProfileInfo.styles';
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
            <Text>{values.name}</Text>
            <GrayText light dimmed margin>
              {values.username}
            </GrayText>
          </HeadersContainer>
          <BioSection>
            <BlackText margin>{values.bio}</BlackText>
            <LightBlueText> Translate bio</LightBlueText>
            <GrayWords> {values.location}</GrayWords>
          </BioSection>
        </ContentContainer>
      </Container>
    </Margins>
  );
};

ProfileInfo.propTypes = {
  values: PropTypes.object.isRequired
};
