import { X } from '@phosphor-icons/react'
import logo from '@/assets/img/logo.svg'
import { CartContainer, CartFooter, CartInfo, CartItem, CartItemButton, CartItemImageContainer, CartItemInfo, CartItems, CloseCartButton, ContentContainer, InfoContainer } from './styles'
import { Button } from '../Button'
import Image from 'next/image'

interface CartProps {
  isOpen: boolean
  handleCart: () => void
}

export function Cart({ isOpen, handleCart }: CartProps) {
  return (
    <CartContainer open={isOpen}>
      <CloseCartButton onClick={handleCart}>
        <X size={24} weight="bold" />
      </CloseCartButton>

      <ContentContainer>
        <h3>Sacola de compras</h3>

        <CartItems>
          <CartItem>
            <CartItemImageContainer>
              <Image src={logo} alt='' width={102} height={93} />
            </CartItemImageContainer>

            <CartItemInfo>
              <InfoContainer>
                <span>Camiseta Sem Limites</span>
                <strong>R$ 79,90</strong>
              </InfoContainer>
              <CartItemButton>
                Remover
              </CartItemButton>
            </CartItemInfo>
          </CartItem>

          <CartItem>
            <CartItemImageContainer>
              <Image src={logo} alt='' width={102} height={93} />
            </CartItemImageContainer>

            <CartItemInfo>
              <InfoContainer>
                <span>Camiseta Sem Limites</span>
                <strong>R$ 79,90</strong>
              </InfoContainer>
              <CartItemButton>
                Remover
              </CartItemButton>
            </CartItemInfo>
          </CartItem>

          <CartItem>
            <CartItemImageContainer>
              <Image src={logo} alt='' width={102} height={93} />
            </CartItemImageContainer>

            <CartItemInfo>
              <InfoContainer>
                <span>Camiseta Sem Limites</span>
                <strong>R$ 79,90</strong>
              </InfoContainer>
              <CartItemButton>
                Remover
              </CartItemButton>
            </CartItemInfo>
          </CartItem>
        </CartItems>


        <CartFooter>
          <CartInfo>
            <div>
              <p>
                Quantidade
              </p>

              <span>3 itens</span>
            </div>

            <div>
              <strong>Valor total</strong>

              <strong>
                R$ 270,00
              </strong>
            </div>
          </CartInfo>

          <Button onClick={() => null}>
            Finalizar compra
          </Button>
        </CartFooter>
      </ContentContainer>
    </CartContainer>
  )
}