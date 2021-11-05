import cuid from 'cuid';
import { NavBar, Trends, ProfileInfo, Card } from '../../components/common';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getTweets } from '../../components/utils/requests';
import { toast } from 'react-toastify';
import { Container, Box, BoxContent, Root, Title, SubTitle, Icon, Container2, Container3 } from './profileStyles';
import backArrow from '../../assets/svg/backarrow.svg'
import profile from '../../userprofile.json';
import data from '../../data.json';
export const Profile = () => {
    const history = useHistory();
    var data1 = null;
    const handleTweets = async () => {
        const req = await getTweets ();
        console.log(req);
        if (req.status === 200 ){
            console.log('Recibí los tweets');
            //auth(req.data.token, false);
            data1 = req.data.data;
            console.log(data1);
            console.log(data);
        }
    };
    useEffect(() => {
        if (localStorage.getItem('TOKEN') === null) {
            history.push('/');
        }else {
            handleTweets();
        }
    }, []);



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
                    {data.map((e)=>{
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