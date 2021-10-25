import cuid from 'cuid';
import { NavBar, Trends, Card } from '../../components/common';
import { Container, Box, BoxContent, Root, Title, SubTitle, Icon, Container2, Container3 } from './profileStyles';
import backArrow from '../../assets/svg/backarrow.svg'
import data from '../../data.json';
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
                        <Container3>
                            <Title>Profile</Title>
                            <SubTitle>74 Tweets</SubTitle>
                        </Container3>
                    </Container2>
                    {data.map((e) => {
                        return <Card key={cuid()} values={e} />;
                    })}
                </BoxContent>

                <Box>
                    <Trends />
                </Box>
            </Container>
        </Root>
    );
};