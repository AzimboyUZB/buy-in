import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { CloseIcon } from '../../assets/icons'
import { colors } from '../../helpers/colors'
import { AddProduvtToCart, DeleteCartProduct, RemoveCartProduct } from '../../redux/reducers/cartReduser'
import { Counter, Flex, H4, Img, Span } from '../index'

function ProductCartTwo({ product }) {
    const { image, name_uz, price, product_id, qty } = product
    const dispatch = useDispatch()

    const handelRemoveButton = () => {
        dispatch(RemoveCartProduct(product_id))
    }

    const handleIncrementButton = () => {
        dispatch(AddProduvtToCart(product_id, 1))
    }
    const handleDecrementButton = () => {
        dispatch(DeleteCartProduct(product_id))
    }

    return (
        <Wrapper>
            <ImageWrap>
                <Img src={image} alt={name_uz} objectFit='contain' />
            </ImageWrap>
            <Content qty={qty}>
                <Flex
                    alineItems='center'
                    justifyContent='space-between'
                    mb='14px'
                >
                    <Span>{name_uz}</Span>
                    <RemoveButton onClick={handelRemoveButton}>
                        <CloseIcon />
                    </RemoveButton>
                </Flex>
                <Flex mb={14}>
                    <Counter 
                        qty={qty} 
                        incrementButton={handleIncrementButton} 
                        decrementButton={handleDecrementButton} 
                        />
                </Flex>
                <Flex gap={24}>
                    <Flex gap={14}>
                        <Span>Сумма:</Span>
                        <H4>{price} UZB</H4>
                    </Flex>
                    <Flex gap={14}>
                        <Span>Сумма доставки:</Span>
                        <H4>{0} UZB</H4>
                    </Flex>
                </Flex>
            </Content>
        </Wrapper>
    )
}

export default ProductCartTwo

const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 10px;
    background: ${colors.white};
    box-shadow: 0px 0px 10px rgba(0,0,0,0.15);
    border-radius: 10px;
    padding: 8px;
    margin-top: 15px;
`
const ImageWrap = styled.div`
    width: 95px;
    height: 105px;
    border-radius: 10px;
    overflow: hidden;
`
const Content = styled.div`
    flex: 1 1 auto;
`

const RemoveButton = styled.button`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #A5A5A5;
`