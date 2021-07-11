import React from  'react'
import {Text} from  'react-native'
import styled from  'styled-components/native'

const Container = styled.View`
    top: 22px;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    position: absolute;
    z-index: 1;
`
const Menu = styled.Text`
    color: #ffffff;
    letter-spacing: 0.8px;
    margin: 11px 12px;
    font-weight: ${props => (props.bold ? 'bold' : 'normal')};
    opacity: ${props => (props.bold ? 1 : 0.8)};
    font-size: ${props => (props.bold ? '16px' : '15px')};
`
const Separator = styled.View`
    width: 1px;
    height: 1px;
    background-color: #d8d8d8;
    opacity: 0.6
`
const Header = () => {
    return (
        <Container>
            <Menu>Recommend</Menu>
            <Separator />
            <Menu bold="true">Following</Menu>
        </Container>
    )
}
export default Header