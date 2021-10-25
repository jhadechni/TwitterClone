import cuid from 'cuid';
import { NavBar, Trends, ProfileInfo } from '../../components/common';
import { Container, Box, BoxContent, Root, Title, SubTitle, Icon, Container2, Container3 } from './profileStyles';
import backArrow from '../../assets/svg/backarrow.svg'
import profile from '../../userprofile.json';
export const Profile = () => {
    return (
        <Root>
            <Container>
                <Box>
                    <NavBar />
                </Box>
                <BoxContent>
                    <Container2>
                        <Icon src={backArrow} alt="back-arrow" />
                        {profile.map((e) => {
                        return (
                            <Container3>
                            <Title>{e.name}</Title>
                            <SubTitle>{e.tweets} Tweets</SubTitle>
                        </Container3>
                        );
                        })}
                        
                    </Container2>
                    {profile.map((e) => {
                        return <ProfileInfo key={cuid()} values={e} />;
                    })}
                </BoxContent>

                <Box>
                    <Trends />
                </Box>
            </Container>
        </Root>
    );
};