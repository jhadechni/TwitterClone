import React from 'react'
import { Container, Title, Image } from "./NavItem.styles"


export const NavItem = (props) => {
    return (
        <Container to={props.url}>
            <Image src={props.icon} />
            <Title>{props.title}</Title>
        </Container>
    )
}