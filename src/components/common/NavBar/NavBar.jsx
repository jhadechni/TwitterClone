import React, {useState} from 'react'
import { NavItem } from '../NavItem/index'
import { NabVarContainer, Twitterlogo, ButtonLightBlue } from "./navBar.styles"
import homeicon from '../../../assets/svg/homeicon.svg'
import bellicon from '../../../assets/svg/bellicon.svg'
import hastagicon from '../../../assets/svg/hastagicon.svg'
import mailicon from '../../../assets/svg/mailicon.svg'
import bookmarkicon from '../../../assets/svg/bookmarkicon.svg'
import listicon from '../../../assets/svg/listicon.svg'
import ProfilePic from '../../../assets/svg/defaultProfilePic.svg'
import moreicon from '../../../assets/svg/moreicon.svg'
import twittericon from '../../../assets/svg/twittericon.svg'
import { ModalTweet } from '../ModalTweet'

export const NavBar = () => {
    const [showModalTweet, setShowModalTweet] = useState(false);
    return (
        <NabVarContainer>
            <Twitterlogo src={twittericon} width="30,27" height="24,61"/>
            <NavItem icon={homeicon} title="Home" url="/home"/>
            <NavItem icon={hastagicon} title="Explore" ulr="/explore" ></NavItem>
            <NavItem icon={bellicon} title="Notifications" url="/notifications"></NavItem>
            <NavItem icon={mailicon} title="Messages" url="/mail"></NavItem>
            <NavItem icon={bookmarkicon} title="Bookmarks" url="/book"></NavItem>
            <NavItem icon={listicon} title="Lists" url="/list"></NavItem>
            <NavItem icon={ProfilePic} title="Profile" url="/profile"></NavItem>
            <NavItem icon={moreicon} title="More" url="/more"></NavItem>
            <ButtonLightBlue onClick={() => setShowModalTweet(true)}>
                Tweet
            </ButtonLightBlue>
            {showModalTweet && <ModalTweet closeModalTweet={setShowModalTweet} />}
        </NabVarContainer>
    )
}