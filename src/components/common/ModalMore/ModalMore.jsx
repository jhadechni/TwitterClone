import ReactDOM from 'react-dom';
import {
  ModalContainerBig,
  ModalContainer,
  MenuItem,
  IconsImg,
  ItemText
} from './ModalMore.styles';
import TrashIcon from '../../../assets/svg/trashicon.svg'
import EmbedIcon from '../../../assets/svg/embedicon.svg'

export const ModalMore = (props) => {
  return ReactDOM.createPortal(
    <ModalContainerBig onClick={() => props.closeModalMore(false)}>
      <ModalContainer>
        <MenuItem>
            <IconsImg src={TrashIcon}/>
            <ItemText red >Delete</ItemText>
        </MenuItem>
        <MenuItem>
            <IconsImg src={EmbedIcon}/>
            <ItemText>Embed Tweet</ItemText>
        </MenuItem>
      </ModalContainer>
    </ModalContainerBig>,
    document.getElementById('modal')
  );
};