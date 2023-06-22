import { styled } from '..';


export const HomeContainer = styled('main', {
  display: 'flex',
  marginLeft: 'auto',
  minHeight: 656,
  variants: {
    start: {
      true: {
        maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
      }
    }
  }
})


export const Product = styled('div', {
  background: 'linear-gradient(188deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  width: '43.5rem',

  img: {
    objectFit: 'cover',
    cursor: 'pointer',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',

    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    'div': {
      display: 'flex',
      flexDirection: 'column'
    },

    'button': {
      flexGrow: '0',
      backgroundColor: '$green500',
      border: 0,
      color: '$white',
      borderRadius: 8,
      padding: '0.75rem',
      cursor: 'pointer',

      '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed',
      },

      '&:not(:disabled):hover': {
        backgroundColor: '$green300'
      }

    },

    'strong': {
      fontSize: '$lg',
      color: '$gray100',
    },

    'span': {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300'
    }
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    }
  },

  variants: {
    isFallback: {
      true: {
        '&:after': {
          position: 'absolute',
          backgroundColor: 'red'
        }
      }
    }
  }


})

export const SliderNav = styled('div', {
  position: 'absolute',
  height: '100vh',
  width: '8.5rem',
  background: 'linear-gradient(90deg, rgba(18, 18, 20, 0.00) 0%, rgba(18, 18, 20, 0.75) 100%)',
  border: 0,
  left: 'auto',
  right: 0,
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  'svg': {
    color: '$gray300'
  },

  'button': {
    backgroundColor: 'transparent',
    border: 0,
    cursor: 'pointer',
    height: '10rem'
  },

  variants: {
    left: {
      true: {
        left: 0,
        right: 'auto',
        background: 'linear-gradient(90deg, rgba(18, 18, 20, 0.75) 0, rgba(18, 18, 20, 0.00) 100%)',
      }
    }
  }
})


