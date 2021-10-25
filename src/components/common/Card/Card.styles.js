import styled from 'styled-components';
import { LIGHT_BLACK } from '../../utils';
import { max_device } from '../../utils';

export const Container = styled.div`
  padding: 15px;
  display: grid;
  /* width: 500px; */
  grid-template-columns: 0.2fr 2fr 0.2fr;
  @media ${max_device.lg} {
    grid-template-columns: 0.2fr 2fr 0.2fr;
  }
`;
export const Margins = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-width: 0 1px 1px 1px;
  width: 694px;
  height: auto;
  /* @media ${max_device.lg} {
    width: auto;
    padding: 0 20px 0 20px;
  } */
  @media ${max_device.sm} {
    width: auto;
  }
`;

export const ProfileCont = styled.div``;
export const Img = styled.img`
  width: ${(props) => (props.round ? '40px' : '100%')};
  height: ${(props) => (props.round ? '40px' : '50%')};
`;

export const ImgContent = styled.img`
  @media ${max_device.lg} {
    max-height: 200px;
    max-width: 500px;
  }
`;

export const ContentContainer = styled.div``;

export const HeadersContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Text = styled.h4`
  font-weight: 700;
  margin: 0px 5px 0px 5px;
`;

export const TweetContent = styled.p`
  color: ${LIGHT_BLACK};
  margin: 10px 0px 10px 10px;
  font-weight: 400;
  font-size: 15px;
`;

export const Icons = styled.div`
  margin-top: -20px;
  padding: 10px 90px 10px 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IconImg = styled.img`
  cursor: pointer;
  border-radius: 24px;
  &:hover {
    background-color: #1da0f21e;
  }
`;

export const Content = styled.div`
  margin: 0px 0 7px 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media ${max_device.lg} {
    align-items: center;
  }
`;