import styled from 'styled-components';

export const ModalContainerBig = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
`;

export const ModalContainer = styled.section`
  border-radius: 4px;
  background-color: white;
  position: absolute;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: rgb(101 119 134 / 20%) 0px 0px 15px, rgb(101 119 134 / 15%) 0px 0px 3px 1px;
`;

export const MenuItem = styled.div`
  padding: 16px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  &:hover {
    background-color: #1da0f21e;
  }
`;

export const IconsImg = styled.img `
    width: 20px;
    height: 20px;
    margin: 0px;
    padding: 0px;
`
export const ItemText = styled.span`
  font-family: inherit;
  overflow-wrap: break-word;
  color: ${(props) => (props.red ? "#f4212e" : `inherit`)};
  display: inline;
  padding-left: 5px;
`;