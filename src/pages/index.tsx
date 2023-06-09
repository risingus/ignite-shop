import { useState, useMemo } from 'react';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Stripe from 'stripe';
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css';
import { stripe } from '@/libs/stripe';
import { HomeContainer, Product, SliderNav } from '@/styles/pages/home';
import Link from 'next/link';
import { CaretLeft, CaretRight, Handbag } from '@phosphor-icons/react';
import { ProductProps, useCart } from '@/context/cart';

interface HomeProps {
  products: ProductProps[]
}

export default function Home({ products }: HomeProps) {
  const { addToCart } = useCart()
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, sliderInstanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    slides: {
      perView: 2,
      spacing: 48,
    }
  })

  const isButtonNextSlideActive = useMemo(() => {
    const active = sliderInstanceRef?.current?.track?.details?.slides
      && Array.isArray(sliderInstanceRef.current.track.details.slides)
      ? sliderInstanceRef.current.track.details.slides
      : []

    return currentSlide === active.length - 2

  }, [currentSlide, sliderInstanceRef])


  const isButtonPrevSlideInactive = useMemo(() => {
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
    <>
      {
        !isButtonPrevSlideInactive
        && (
          <SliderNav left>
            <button onClick={prevSlide}>
              <CaretLeft size={32} />
            </button>
          </SliderNav>
        )
      }

      <HomeContainer ref={sliderRef} className='keen-slider' start={isButtonPrevSlideInactive}>
      {
        products.map((product) => {
          return (
            <Product className='keen-slider__slide' key={product.id} isFallback>
              <Link href={`/product/${product.id}`} prefetch={false}>
                <Image src={product.imageUrl} width={520} height={480} alt='' />
              </Link>
                <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.formatedPrice}</span>
                </div>
                <button onClick={() => addToCart(product)}>
                  <Handbag size={32} weight="bold" />
                </button>
                </footer>
            </Product>
          )
        })
      }

    </HomeContainer>
      {
        !isButtonNextSlideActive
        && (
          <SliderNav>
            <button onClick={nextSlide}>
              <CaretRight size={32} />
            </button>
          </SliderNav>
        )
      }
    </>

  )
}

export const getStaticProps: GetStaticProps = async ({ }) => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });

  console.log(response.data[0].default_price)

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price
    return {
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
      defaultPriceId: price.id
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // a cada 2 horas
  }
}
