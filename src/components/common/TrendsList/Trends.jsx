import cuid from 'cuid';
import {
    ContainerTrend,
    Container,
    Icon,
    InputSearch,
    Input,
    Title,
    Head,
    MoreTrend,
    Text
  } from './Trends.styles';
import searchIcon from '../../../assets/Images/search.png';
import { TrendsItem } from '../TrendsItem';

const data = [
    { id: 1, hastag: 'JaimeSierra', quantity: '2000' },
    { id: 2, hastag: 'Uninorte', quantity: '456' },
    { id: 3, hastag: 'Spiderman', quantity: '456' },
    { id: 4, hastag: 'VictorMendoza', quantity: '456' },
    { id: 5, hastag: 'DiomedesDiaz', quantity: '456' },
    { id: 6, hastag: 'RollingStone', quantity: '456' }
  ];

export const Trends = () => {
    return (
      <ContainerTrend>
        <InputSearch>
          <Icon primary src={searchIcon} />
          <Input placeholder="Search Twitter" type="text" />
        </InputSearch>
  
        <Container>
          <Head>
            <Title>Paris Trend</Title>
          </Head>
          {data.map((item) => {
            return <TrendsItem data={item} key={cuid()} />;
          })}
  
          <MoreTrend to="">
            <Text>Show More</Text>
          </MoreTrend>
        </Container>
      </ContainerTrend>
    );
  };