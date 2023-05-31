import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import logo from '../assets/img/logo.svg'
import Image from 'next/image'
import { Container, Header } from '@/styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logo} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}