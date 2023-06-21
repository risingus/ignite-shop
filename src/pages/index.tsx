import { useState, useMemo } from 'react';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Stripe from 'stripe';
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css';
import { stripe } from '@/libs/stripe';
import { HomeContainer, Product } from '@/styles/pages/home';
import Link from 'next/link';

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[]
}

export default function Home({ products }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, sliderInstanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  const isButtonNextSlideActive = useMemo(() => {
    const active = sliderInstanceRef?.current?.track?.details?.slides
      && Array.isArray(sliderInstanceRef.current.track.details.slides)
      ? sliderInstanceRef.current.track.details.slides
      : []

    return currentSlide === active.length - 1

  }, [currentSlide, sliderInstanceRef])


  const isButtonPrevSlideActive = useMemo(() => {
    return currentSlide === 0

  }, [currentSlide])

  function nextSlide() {
    if (!sliderInstanceRef?.current) return
    sliderInstanceRef.current?.next()
  }

  function prevSlide() {
    if (!sliderInstanceRef?.current) return
    sliderInstanceRef.current?.prev()
  }

  return (
    <HomeContainer ref={sliderRef} className='keen-slider'>
      {
        products.map((product) => {
          return (
            <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
              <Product className='keen-slider__slide'>
                <Image src={product.imageUrl} width={520} height={480} alt='' />
                <footer>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </footer>
              </Product>
            </Link>
          )
        })
      }
    </HomeContainer>

  )
}

export const getStaticProps: GetStaticProps = async ({ }) => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-Br', {
        style: 'currency',
        currency: 'BRL',
      }).format((price.unit_amount || 0) / 100)
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // a cada 2 horas
  }
}
