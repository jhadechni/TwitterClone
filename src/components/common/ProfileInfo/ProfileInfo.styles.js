import styled from 'styled-components';
import { max_device } from '../../utils';

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

`;
export const Img = styled.img`
  width: ${(props) => (props.round ? '150px' : '694px')};
  height: ${(props) => (props.round ? '150px' : '210px')};
  display: flex;
  border-radius: ${(props) => (props.round ? '150px' : '0px')};
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

export const IconImg = styled.img`
  cursor: pointer;
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
