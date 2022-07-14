import React from 'react'
import styled from 'styled-components'
import Compose from '../buttons/Compose'
import { sideBarButtonsItems } from '../../data/SidebarButtonItems'
import { bottomIcons } from '../../data/BottomIcons'

import VideocamIcon from '@material-ui/icons/Videocam';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import UserIcon from '@material-ui/icons/AccountCircle';

const Sidebar = () => {
  return (
    <Wrapper>
        <SidebarTopWrapper>
        <ComposeWrapper>
            <Compose />
        </ComposeWrapper>
        <SideButtonsWrapper>
            {
                sideBarButtonsItems.map(item => (
                    <SidebarButtonItem> {item.icon} {item.text}</SidebarButtonItem>
                ))
            }
        </SideButtonsWrapper>
        </SidebarTopWrapper>

        <SidebarBottomWrapper>
        <SidebarSectionWrapper>
            <Title>Meet</Title>
            <p><VideocamIcon /> New Meeting</p>
            <p><KeyboardIcon /> Join Meeting</p>
        </SidebarSectionWrapper>
        <SidebarSectionWrapper>
            <Title>Hangouts</Title>
            <p><UserIcon /> Diego Jojoa</p>
        </SidebarSectionWrapper>
        <BottomIconsWrapper>
            {
                bottomIcons.map(item => (
                    <>
                        {item}
                    </>
                ))
            }
        </BottomIconsWrapper>
        </SidebarBottomWrapper>

    </Wrapper>
  )
}

export default Sidebar
const Wrapper = styled.div`
    border-right: 1px solid lightgrey;
    height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const SidebarTopWrapper = styled.div``

const ComposeWrapper = styled.div`
    display: grid;
    place-items: start;
    padding: 10px 20px;
`

const Title = styled.h4`
    padding-left: 25px;
    margin-bottom: 4px;
    margin-top: 8px;
`
const SideButtonsWrapper = styled.div``

const SidebarBottomWrapper = styled.div`
    margin-bottom: 30px;
`

const SidebarButtonItem = styled.div`
    display: grid;
    grid-template-columns: 14% auto;
    color: gray;
    padding: 5px 25px;
    border-radius: 0 100px 100px 0;
    cursor: pointer;
    margin-right: 8px;

    :hover {
        background-color: #f5f7f7;
    }
`
const SidebarSectionWrapper = styled.div`
    border-top: 1px solid lightgrey;

    p {
        color: gray;
        display: grid;
        grid-template-columns: 14% auto;
        height: 30px
        align-items: center;
        padding-left: 25px;
    }
`

const BottomIconsWrapper = styled.div`
    display: flex;
    justify-content: center;
    color: gray;
    border-top: 1px solid lightgray;
    margin-top: 60px;

    .MuiSvgIcon-root{
        padding: 2px;
    }
`