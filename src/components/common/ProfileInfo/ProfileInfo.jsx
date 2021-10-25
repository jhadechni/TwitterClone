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
} from './ProfileInfo.styles';
export const ProfileInfo = ({ values }) => {
  return (
    <Margins>
      <Container>
        <ProfileCont>
          <Img src={values.banner_image} alt="banner"/>
          <Img round src={values.profile_picture} alt="Profile-picture" />
        </ProfileCont>
        <ContentContainer>
          <HeadersContainer>
            <Text>{values.name}</Text>
            <GrayText light dimmed margin>
              {values.username}
            </GrayText>
            
          </HeadersContainer>
          <BlackText margin> {values.bio}</BlackText>
        </ContentContainer>
      </Container>
    </Margins>
  );
};

ProfileInfo.propTypes = {
  values: PropTypes.object.isRequired
};
