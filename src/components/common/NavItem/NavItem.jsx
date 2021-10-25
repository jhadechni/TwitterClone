import React from 'react'
import { Container, Title, Image } from "./NavItem.styles"
import {Link} from 'react-router-dom';

export const NavItem = (props) => {
    return (
        <Container>
            <Image src={props.icon} />
            <Title>{props.title}</Title>
            <Link to={props.url} ></Link>
        </Container>
    )
}
