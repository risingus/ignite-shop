import { globalCss } from '.';


export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },

  body: {
    '-webkit-font-smoothing': 'antialieased',
    backgroundColor: '$grey900',
    color: '$gray100',
    overflowX: 'hidden',
    height: '100%',
    width: '100%',
    position: 'relative'
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  }
})