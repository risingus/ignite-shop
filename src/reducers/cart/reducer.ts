import { ProductProps } from '@/context/cart';
import { ActionTypes } from './actions';

interface ReducerStateProps {
  cartItems: ProductProps[]
  cartOpen: boolean
}


export function cartReducer(state: ReducerStateProps, action: any) {
  switch (action.type) {

    case ActionTypes.SHOW_HIDE_CART: {
      return {
        ...state,
        cartOpen: !state.cartOpen
      }
    }

    case ActionTypes.ADD_CART: {
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          action.payload
        ]
      }
    }

    case ActionTypes.REMOVE_CART: {
      return {
        ...state,
        cartItems: [
          ...state.cartItems.filter((product: ProductProps) => product.id !== action.payload),
        ]
      }
    }

    default: {
      return state
    }
  }

}