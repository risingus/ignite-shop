import { styled } from '@/styles'


export const CartContainer = styled('div', {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  width: '30rem',
  height: '100%',
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: '$gray800',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',
  overflowX: 'auto',
  marginRight: '-30rem',
  pointerEvents: 'none',
  transition: 'marginRight 0.2s ease-in-out',

  variants: {
    open: {
      true: {
        marginRight: 0,
        pointerEvents: 'all',
      }
    }
  }

})


export const CloseCartButton = styled('button', {
  border: 0,
  backgroundColor: 'transparent',
  cursor: 'pointer',
  margin: '1.5rem 1.5rem 1.5rem auto',

  '& > svg': {
    color: '$gray200'
  },

  '&:hover': {
    '& > svg': {
      color: '$gray300'
    },
  }
})

export const ContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '0px 3rem 3rem 3rem',
  height: '100%',
  gap: '2rem',


  '& > h3': {
    fontWeight: 700,
    lineHeight: '160%',
    fontFamily: 'Roboto',
    fontSize: '1.25rem',
    color: '$gray100',
  }

})

export const CartItems = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
})

export const CartItem = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '1.25rem'

})

export const CartItemImageContainer = styled('div', {
  width: '100%',
  maxWidth: 102,
  background: 'linear-gradient(188deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  height: 93,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& > img': {
    objectFit: 'contain',
  },
})

export const CartItemInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.5rem',
})


export const InfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.125rem',

  span: {
    fontFamily: 'Roboto',
    lineHeight: '160%',
    fontSize: '1.125rem',
    fontWeight: 400,
    color: '$gray300',
  },

  strong: {
    fontFamily: 'Roboto',
    lineHeight: '160%',
    fontSize: '1.125rem',
    fontWeight: 700,
    color: '$gray100'
  }
})

export const CartItemButton = styled('button', {
  border: 0,
  backgroundColor: 'transparent',
  color: '$green500',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: '160%',
  fontWeight: 700,
  fontSize: '1.25rem',
  cursor: 'pointer',

  '&:not(:disabled):hover': {
    color: '$green300',
  },

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

})


export const CartFooter = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '3.438rem',
  marginTop: 'auto'
})

export const CartInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  '& > :first-child': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',


    '> p, span': {
      lineHeight: '160%',
      color: '$gray100',
      fontFamily: 'Roboto'
    },

    '> p': {
      fontSize: '1rem',
    },

    '> span': {
      fontSize: '1.125rem',
    }
  },

  '& > :last-child': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    strong: {
      fontFamily: 'Roboto',
      fontWeight: 700,
      lineHeight: '160%',
      color: '$gray100',
    },

    '& > :first-child': {
      fontSize: '1.125rem',
    },

    '& > :last-child': {
      fontSize: '1.5rem',
    },
  }
})