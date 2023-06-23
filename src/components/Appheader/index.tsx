import { Handbag } from '@phosphor-icons/react'
import Image from 'next/image'
import logo from '@/assets/img/logo.svg'
import { CartButton, CartCounter, Header } from './styles'
import { useCart } from '@/context/cart'
import { useRouter } from 'next/router'

export const AppHeader = () => {
  const { handleCart, cartCount } = useCart()
  const { pathname } = useRouter();
  return (
    <Header success={pathname === '/success'}>
      <Image src={logo} alt="" />
      {
        pathname !== '/success'
        && (
          <CartButton notEmpty={cartCount > 0} onClick={handleCart}>
            <Handbag size={24} weight="bold" />
            {
              cartCount > 0
              && (
                <CartCounter>
                  {cartCount}
                </CartCounter>
              )
            }
          </CartButton>
        )
      }
    </Header>
  )
}