import { stripe } from '@/libs/stripe';
import { ImageContainer, ImagesContainer, SuccessContainer } from '@/styles/pages/success';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Stripe from 'stripe';


interface SuccessProps {
  customerName: string
  products: {
    imageUrl: string
  }[]
}

const Success = ({ customerName, products }: SuccessProps) => {
  return (
    <SuccessContainer>
      <h1>Compra Efetuada!</h1>
      <ImagesContainer>
        {
          products.map((item) => (
            <ImageContainer key={item.imageUrl}>
              <Image src={item.imageUrl} width={120} height={110} alt='' />
            </ImageContainer>
          ))
        }
      </ImagesContainer>


      <p>
        Uhuul, <strong>{customerName}</strong>, sua compra de {products.length} camisetas já está a caminho da sua casa.
      </p>

      <Link href='/'>
        Voltar ao catálogo
      </Link>
    </SuccessContainer>
  )
}

export default Success;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details?.name;

  return {
    props: {
      customerName,
      products: session?.line_items?.data.map((item) => {
        const product = item.price?.product as Stripe.Product;
        const imageUrl = product?.images?.[0]
        return {
          imageUrl
        }
      })
    }
  }
}