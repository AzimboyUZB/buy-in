import React from 'react'
import apple from '../../assets/images/apple-pro-14.png'
import televizor from '../../assets/images/televizor.png'
import kirMoshin from '../../assets/images/kir-moshin.png'
import { H1 as H2, H5 } from '../Typography'
import styled from 'styled-components'
import { Img } from '../Img'
function Products() {

    const products = [
        {
            id: 1,
            name: "Смартфоны",
            title: "по лучшим ценам",
            img: apple,
        },
        {
            id: 2,
            name: "Телевизоры",
            title: "для дома",
            img: televizor,
        },
        {
            id: 3,
            name: "Бытовые техники",
            title: "для дома",
            img: kirMoshin,
        },
        {
            id: 4,
            name: "Бытовые техники",
            title: "для дома",
            img: kirMoshin,
        },
        {
            id: 5,
            name: "Смартфоны",
            title: "по лучшим ценам",
            img: apple,
        },
        {
            id: 6,
            name: "Телевизоры",
            title: "для дома",
            img: televizor,
        },
    ]

  return (
    <Wrapper>
        <Container>
            {
                products.map((item) => (
                    <Box key={item.id}>
                        <BoxTitle>
                            <H2>{item.name}</H2>
                            <H5>{item.title}</H5>
                        </BoxTitle>
                        
                        <BoxImg src={item.img}/>
                    </Box>
                ))
            }
        </Container>
    </Wrapper>
  )
}

export default Products

const Wrapper = styled.div`
    width: 100%;
    height: 37vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
`
const Container = styled.div`
    width: 1340px;
    height: 100%;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items:center;
`

const Box = styled.div`
    width: 433px;
    height: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #27376F;
    margin-bottom: 20px;
`
const BoxTitle = styled.div`
    width: 60%;
    height: 100%;
    padding: 15px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
`
const BoxImg = styled(Img)`
    width: 40%;
    height: 100%;
    padding: 10px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`
