
import { globalStyles } from '@/styles/global'
import { ToastContainer } from 'react-toastify';
import type { AppProps } from 'next/app'
import { Container } from '@/styles/pages/app'
import { Cart } from '@/components/Cart';
import { AppHeader } from '@/components/Appheader';
import { CartProvider } from '@/context/cart';
import 'react-toastify/dist/ReactToastify.css';

globalStyles()

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Container>
      <ToastContainer hideProgressBar />
      <CartProvider>
        <AppHeader />
        <Component {...pageProps} />
        <Cart />
      </CartProvider>
    </Container>
  )
}
