import cuid from 'cuid';
import { NavBar, Trends, Card } from '../../components/common';
import { Container, Box, BoxContent, Root, Title } from './Home.styles';
import data from '../../data.json';
export const Home = () => {
  return (
    <Root>
      <Container>
        <Box>
          <NavBar />
        </Box>
        <BoxContent>
          <Title>Home</Title>
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
