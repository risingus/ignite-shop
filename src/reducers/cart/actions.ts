import { ProductProps } from '@/context/cart'

export enum ActionTypes {
  SHOW_HIDE_CART = 'SHOW_HIDE_CART',
  ADD_CART = 'ADD_CART',
  REMOVE_CART = 'REMOVE_CART',
}

export function showHideCart() {
  return {
    type: ActionTypes.SHOW_HIDE_CART,
  }
}

export function addCart(item: ProductProps) {
  return {
    type: ActionTypes.ADD_CART,
    payload: item
  }
}


export function removeCart(id: string) {
  return {
    type: ActionTypes.REMOVE_CART,
    payload: id
  }
}