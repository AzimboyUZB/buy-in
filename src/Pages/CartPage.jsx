import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import {
  Box,
  Container,
  Flex,
  H1,
  H2,
  H4,
  H6,
  Page,
  ProductCartTwo,
  SemiSpan
} from '../components/index'
import { colors } from '../helpers/colors'
import { GetCartProducts } from '../redux/reducers/cartReduser'

function CartPage() {
  const { cartProducts, loading } = useSelector(state => state.cartState)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetCartProducts())
  }, [])
  
  return (
    <Page>
      <Container>
        <Box>
          <Flex gap={8} mt='30px'>
            <BreadCrumbItem>Главная &nbsp; /</BreadCrumbItem>
            <BreadCrumbItem>Корзина</BreadCrumbItem>
          </Flex>

          <Flex mt={30}>
            <H2>Товар в корзине {cartProducts?.length > 0 && cartProducts.length}</H2>
          </Flex>
        </Box>
        <Wrapper>
          <LeftBlock>
            <Flex flexDirection="column">
              {loading ? (
                <h2>Loading...</h2>
              ) : (
                <Flex flexDirection="column">
                  {cartProducts?.map((item) => (
                    <ProductCartTwo product={item} keyi={item.id} />
                  ))}
                </Flex>
              )}
            </Flex>
          </LeftBlock>
          <RightBlock>
            <Flex gap={30} justifyContent="center" mb={30}>
              <H1>Итого:</H1>
              <H1>766.000 UZS</H1>
            </Flex>

            <Flex
              flexDirection='column'
              gap={6}
              borderBottom="1px solid #D9D9D9"
              p='0 16px 16px 16px'
              mb={16}
            >
              <Flex justifyContent="space-between">
                <H4>Промокод: </H4>
                <H4 color='#888888'>0 сум</H4>
              </Flex>
              <Flex justifyContent="space-between">
                <H4>Сумма доставки:  </H4>
                <H4 color='#888888'>30.000 сум</H4>
              </Flex>
              <Flex justifyContent="space-between">
                <H4>Сумма товара: </H4>
                <H4 color='#888888'>736.000 сум</H4>
              </Flex>
            </Flex>

            <Flex
              flexDirection='column'
              gap={6}
              p='0 16px 0 16px'
              mb={16}
            >
              <Flex justifyContent="space-between">
                <H4>Доставка: </H4>
                <H4 color='#888888'>Курьером</H4>
              </Flex>
              <Flex justifyContent="space-between">
                <H4>Тип оплаты:  </H4>
                <H4 color='#888888'>Пластик</H4>
              </Flex>
            </Flex>

            <Flex>
              <StyledButton p='0 16px'>
                <H4 color={colors.white}>Оформить заказ</H4>
              </StyledButton>
            </Flex>

            <Flex mt={20}>
              <H6 fontSize={13} color='#888888'>Нажимая 'Оформить заказ', я соглашаюсь с публичным договором оферты</H6>
            </Flex>
          </RightBlock>
        </Wrapper>
      </Container>
    </Page>
  )
}

export default CartPage

const Wrapper = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`
const LeftBlock = styled.div`
  width: 59%;
`

const RightBlock = styled.div`
  width: 32%;
  margin-top: 20px;
  position: sticky;
  top: 30px;
  background: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  padding: 23px;
`

const BreadCrumbItem = styled(SemiSpan)`
    color: ${(props) => (props.active ? '#000' : '#767676')};
`
const StyledButton = styled.button`
  background: ${colors.blue[600]};
  border-radius: 10px;
  padding: 10px 0;
  border: 3px solid ${colors.blue[600]};
  flex: 1 1 auto;
  transition: all 0.3s ease;
  &:hover{
    background-color: transparent;

    h4{
      color: ${colors.blue[600]};
    }
  }
`