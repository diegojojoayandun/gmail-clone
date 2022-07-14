import React from 'react'
import styled from 'styled-components'

//Icon imports
import Checkbox from '@material-ui/core/Checkbox'
import RefreshIcon from '@material-ui/icons/Refresh'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import IconButton from '@material-ui/core/IconButton'

const EmailsView = () => {
  return (
    <Wrapper>
        <TopWrapper>
            <Checkbox />

            <IconButton>
                <RefreshIcon />
            </IconButton>

            <IconButton>
                <MoreVertIcon />
            </IconButton>

        </TopWrapper>

        <EmailsContainer>

        </EmailsContainer>

    </Wrapper>
  )
}

export default EmailsView

const Wrapper = styled.div`
`
const TopWrapper = styled.div`
    padding-left: 20px;
    height: 48px;
`

const EmailsContainer = styled.div``