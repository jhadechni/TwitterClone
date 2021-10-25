import PropTypes from 'prop-types';
import {
  ContainerItem,
  Trending,
  Name,
  Quantity,
  Line,
  Head
} from './TrendsItem.styles';

export const TrendsItem = (props) => {
  return (
    <ContainerItem>
      <Head>
        <Trending>{props.data.id}. Trending</Trending>
      </Head>
      <Name>#{props.data.hastag}</Name>
      <Quantity>{props.data.quantity}K Tweets</Quantity>
      <Line></Line>
    </ContainerItem>
  );
};

TrendsItem.propTypes = {
  props: PropTypes.object
};
