import React from 'react'
import styled from 'styled-components'
import { Img } from '../Img'
import sponsor from '../../assets/images/sponsor.png'

function Sponsor() {
  return (
    <Wrapper>
        <Container>
            <Img src={sponsor} />
        </Container>
    </Wrapper>
  )
}

export default Sponsor

const Wrapper = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    margin-top: 40px;
`
const Container = styled.div`
    width: 1340px;
    height: 100%;
`