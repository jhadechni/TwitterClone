import styled from 'styled-components';
import { max_device } from '../../utils';
import { LIGHT_BLUE, DIMMED_GRAY } from '../../utils';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  //padding: 15px;
  display: inline-block;
  /* width: 500px; */
  align-items: column;
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

export const ProfileCont = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding-left: 15px;
`;
export const Img = styled.img`
  width: ${(props) => (props.round ? '150px' : '694px')};
  height: ${(props) => (props.round ? '150px' : '210px')};
  display: flex;
  border-radius: ${(props) => (props.round ? '150px' : '0px')};
  z-index: ${(props) => (props.profile ? '1':'0')};
  margin-top: ${(props) => (props.profile ? '-75px':'0')};
  border-style: ${(props) => (props.profile ? 'solid':'0')};
  border-width: ${(props) => (props.profile ? '4px':'0')};
  border-color: white;
`;

export const ImgContent = styled.img`
  @media ${max_device.lg} {
    max-height: 200px;
    max-width: 500px;
  }
`;

export const ContentContainer = styled.div``;

export const HeadersContainer = styled.div`
  flex-direction: row;
  align-items: center;
  padding-left: 15px;
`;
export const Text = styled.text`
  font-weight: 800;
  margin: 0px 5px 0px 5px;
  font-weight: 100px;
  font-size: 20px;
`;


export const Icons = styled.div`
  margin-top: -20px;
  padding: 10px 90px 10px 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BioSection = styled.div`
  padding: 15px;
  flex-direction: column;
  display: inline-flex;
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

export const LightBlueText = styled(Link)`
  color: ${LIGHT_BLUE};
  font-size: 12px;
  text-decoration: none;
  padding-left: 5px;
`;

export const GrayWords = styled.text`
  color: ${DIMMED_GRAY};
  font-size: 15px;
  padding-left: 6px;
  padding-top: 20px;
`;