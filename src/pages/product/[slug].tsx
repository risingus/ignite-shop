import { Button } from '@/components/Button'
import { useCart } from '@/context/cart'
import { stripe } from '@/libs/stripe'
import { ImageContainer, ProductContainer, ProductDetails } from '@/styles/pages/product'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Stripe from 'stripe'

interface ProductsProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    formatedPrice: string
    description: string
    defaultPriceId: string
  }
}


export default function Product({ product }: ProductsProps) {
  const { addToCart } = useCart()
  const { isFallback } = useRouter();

  if (isFallback) return <p>carregando...</p>

  async function handleBuyProduct() {
    addToCart(product)
  }

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} width={520} height={480} alt='' />
      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.formatedPrice}</span>

        <p>{product.description}</p>

        <Button onClick={handleBuyProduct}>
          Colocar na sacola
        </Button>
      </ProductDetails>
    </ProductContainer>
  )
}


export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { slug: string }> = async ({ params }) => {
  const productId = typeof params?.slug === 'string' ? params.slug : '';

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: Number(new Intl.NumberFormat('pt-Br', {
          currency: 'BRL',
        }).format((price.unit_amount || 0) / 100)),
        formatedPrice: new Intl.NumberFormat('pt-Br', {
          style: 'currency',
          currency: 'BRL',
        }).format((price.unit_amount || 0) / 100),
        description: product.description,
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 * 1, // 1 hora
  }
}