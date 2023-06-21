import { useState } from 'react';
import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import logo from '../assets/img/logo.svg'
import Image from 'next/image'
import { CartButton, CartCounter, Container, Header } from '@/styles/pages/app'
import { Handbag } from '@phosphor-icons/react'
import { Cart } from '@/components/Cart';

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  function handleCart() {
    setIsCartOpen((state) => !state);
  }

  return (
    <Container>
      <Header>
        <Image src={logo} alt="" />

        <CartButton notEmpty={2 > 1} onClick={handleCart}>
          <Handbag size={24} weight="bold" />
          <CartCounter>
            2
          </CartCounter>
        </CartButton>
      </Header>

      <Component {...pageProps} />

      <Cart isOpen={isCartOpen} handleCart={handleCart} />
    </Container>
  )
}
