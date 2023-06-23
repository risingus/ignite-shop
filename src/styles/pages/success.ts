import { styled } from '..';


export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,


  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4
  },

  a: {
    marginTop: '5rem',
    display: 'block',
    fontSize: 'large',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300'
    }
  }

})


export const ImagesContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',

  '& > :not(:first-child)': {
    marginLeft: '-3.5rem'
  }


})


export const ImageContainer = styled('div', {
  width: '8.75rem',
  height: '8.75rem',
  background: 'linear-gradient(188deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '100000px',
  padding: '0.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '4rem',
  boxShadow: '0px 0px 60px 0px rgba(0, 0, 0, 0.80)',

  img: {
    objectFit: 'cover'
  }


})