import { X } from '@phosphor-icons/react'
import { CartContainer, CartFooter, CartInfo, CartItem, CartItemButton, CartItemImageContainer, CartItemInfo, CartItems, CloseCartButton, ContentContainer, InfoContainer } from './styles'
import { Button } from '../Button'
import Image from 'next/image'
import { useCart } from '@/context/cart'
import { useState } from 'react'
import { toast } from 'react-toastify'


export function Cart() {
  const { cartOpen, cartTotal, cartItems, cartCount, handleCart, removeFromCart, buyProducts } = useCart()
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);

  async function handleCheckout() {
    try {
      setIsCreatingCheckoutSession(true)
      await buyProducts();
    } catch (error) {
      setIsCreatingCheckoutSession(false)
      toast.error('😅 Erro inesperado', {
        position: "top-center",
        autoClose: 4000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    }
  }

  return (
    <CartContainer open={cartOpen}>
      <CloseCartButton onClick={handleCart}>
        <X size={24} weight="bold" />
      </CloseCartButton>

      <ContentContainer>
        <h3>Sacola de compras</h3>

        <CartItems>
          {
            Array.isArray(cartItems)
            && cartCount > 0
            && cartItems.map((product) => (
              <CartItem key={product.id}>
                <CartItemImageContainer>
                  <Image src={product.imageUrl} alt='' width={102} height={93} />
                </CartItemImageContainer>

                <CartItemInfo>
                  <InfoContainer>
                    <span>{product.name}</span>
                    <strong>{product.formatedPrice}</strong>
                  </InfoContainer>
                  <CartItemButton onClick={() => removeFromCart(product)}>
                    Remover
                  </CartItemButton>
                </CartItemInfo>
              </CartItem>

            ))
          }

          {
            cartCount === 0 && ('Seu 🛒 carrinho está vazio')
          }
        </CartItems>


        <CartFooter>
          <CartInfo>
            <div>
              <p>
                Quantidade
              </p>

              <span>{cartCount} itens</span>
            </div>

            <div>
              <strong>Valor total</strong>

              <strong>
                {cartTotal.totalFormated}
              </strong>
            </div>
          </CartInfo>

          <Button onClick={handleCheckout} disabled={isCreatingCheckoutSession}>
            Finalizar compra
          </Button>
        </CartFooter>
      </ContentContainer>
    </CartContainer>
  )
}