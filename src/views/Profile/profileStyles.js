import styled from 'styled-components';
import { max_device } from '../../components/utils';

export const Root = styled.section`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  /* padding-top: 30px; */
  display: flex;
  flex-direction: row;
  justify-items: center;
  height: 100%;
  @media ${max_device.lg} {
    flex-direction: column;
  }
`;

export const Container2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
`;

export const Container3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
`;

export const Box = styled.div`
  @media ${max_device.lg} {
    display: none;
  }
`;

export const BoxContent = styled.div`
  /* height: 500px; */
  overflow: auto;
`;

export const Title = styled.h1`
  margin: 0px 0 0 0;
  padding: 25px 0 0px 15px;
  font-size: 30px;
`;

export const SubTitle = styled.h3`
  margin: 0 0 0 0;
  padding: 0px 0 20px 20px;
  font-size: 14px;
  color: #7b8892;
`;

export const Icon = styled.img`
  width:  '20px';
  height:  '20px';
  background-color: transparent;
  border-radius: 20px;
  &:hover {
        background-color: rgb(231, 231, 232);
    }
`;

export const ContainerProfilePic = styled.div`
  position: relative;
  border: 1px solid;
`;