import { styled } from '..';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  height: '100%',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between'
})


export const CartButton = styled('header', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.75rem',
  width: '1.5rem',
  height: '1.5rem',
  borderRadius: '6px',
  backgroundColor: '$gray800',
  cursor: 'pointer',

  '& > svg': {
    color: '$gray200'
  },

  variants: {
    notEmpty: {
      true: {
        '& > svg': {
          color: '$gray300'
        },

      }
    }
  }
})


export const CartCounter = styled('div', {
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$green500',
  width: '1.5rem',
  height: '1.5rem',
  borderWidth: '3px',
  borderStyle: 'solid',
  borderColor: '$grey900',
  borderRadius: '1000px',
  fontFamily: 'Roboto',
  fontSize: '0.875rem',
  lineHeight: '160%',
  color: '$white',
  fontWeight: 700,
  top: '-0.6rem',
  right: '-0.6rem',
})
