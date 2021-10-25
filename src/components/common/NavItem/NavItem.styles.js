import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover{
    color: #1DA1F2;
    transition: color 100ms ease-out;
    background-color: #e8f5fe;
    border-radius: 30px;
    transition: color 100ms ease-out;
  }
`;

export const Title = styled.h2`
 font-weight: 700;
  font-size: 20px;
  margin-right: 20px;
  line-height: 22px;
  margin-right: 20px;
  color: black;
  align-items: center;
  &:hover{
    color: #1DA1F2;
    transition: color 100ms ease-out;
  }
`;

export const Image = styled.img`
  padding: 10px;
  color: #1DA1F2;
  transition: color 100ms ease-out;
`;