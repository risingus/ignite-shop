import { addCart, removeCart, showHideCart } from '@/reducers/cart/actions';
import { cartReducer } from '@/reducers/cart/reducer';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ReactNode, createContext, useContext, useMemo, useReducer } from 'react';

interface CartProviderProps {
  children: ReactNode
}

export interface ProductProps {
  id: string
  imageUrl: string
  name: string
  price: number
  formatedPrice: string
  defaultPriceId: string
}

const initialState = {
  cartOpen: false,
  cartItems: []
}

interface CartContextProps {
  cartOpen: boolean
  cartItems: ProductProps[]
  cartCount: number
  cartTotal: {
    total: number
    totalFormated: string
  }
  addToCart: (item: ProductProps) => void
  handleCart: () => void
  removeFromCart: (product: ProductProps) => void
  buyProducts: () => Promise<void>
}

const CartContext = createContext({} as CartContextProps);

function CartProvider({ children }: CartProviderProps) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const cartCount = useMemo(() => {
    return state.cartItems.length
  }, [state.cartItems])

  const cartTotal = useMemo(() => {
    const total = state.cartItems.reduce((accumulator: number, current: ProductProps) => {
      if (!current) return accumulator
      if (typeof current.price !== 'number') return accumulator
      return accumulator + current.price
    }, 0)

    const totalFormated = new Intl.NumberFormat('pt-Br', {
      style: 'currency',
      currency: 'BRL',
    }).format((total || 0))

    return {
      total,
      totalFormated
    }

  }, [state.cartItems])

  function handleCart() {
    dispatch(showHideCart())
  }

  function addToCart(item: ProductProps) {
    if (!item?.id) return;

    const isItemInCart = state.cartItems.find((product: ProductProps) => product?.id === item.id)

    if (isItemInCart) {
      toast('😅 Item já encontra-se no carrinho', {
        position: "top-center",
        autoClose: 4000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
      return
    }

    dispatch(addCart(item))
  }

  function removeFromCart(item: ProductProps) {
    if (!item.id) return
    const isItemInCart = state.cartItems.find((product: ProductProps) => product?.id === item.id);

    if (!isItemInCart) {
      toast('😅 Item já foi removido', {
        position: "top-center",
        autoClose: 4000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
      return
    }

    dispatch(removeCart(item.id))
  }

  async function buyProducts() {
    try {
      const productIdList = state.cartItems.reduce((accumulator: ProductProps[], current: ProductProps) => {
        if (!current?.defaultPriceId) return accumulator
        return [
          ...accumulator,
          current.defaultPriceId,
        ]
      }, [])

      const response = await axios.post('/api/checkout', {
        productIdList
      })

      const { checkoutUrl } = response.data;
      window.location.href = checkoutUrl

    } catch (error) {
      console.dir(error)
      throw error
    }
  }

  return (
    <CartContext.Provider
      value={{ ...state, cartCount, cartTotal, handleCart, addToCart, removeFromCart, buyProducts }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => {
  return useContext(CartContext)
}

export { useCart, CartProvider }