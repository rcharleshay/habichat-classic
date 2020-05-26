import styled from 'styled-components'
import DownArrow from 'react-ionicons/lib/IosArrowDown'
import theme from 'assets/theme'

export const HeroBanner = styled('div')({
  height: 'calc(100vh - 60px)',
  background: theme.BACKGROUND_COLOR,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative'
})

export const Content = styled('div')({
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 20,
  maxWidth: theme.MEDIUM_VIEW
})

export const Image = styled('img')({
  zIndex: 3,
  height: 200,
  width: 200,
  [`@media only screen and (max-width: ${theme.LARGE_VIEW}px)`]: {
    height: 150,
    width: 150
  }
})

export const Video = styled('video')({
  zIndex: 1,
  height: `100%`,
  width: `100%`,
  position: 'absolute',
  objectFit: 'cover',
  top: 0,
  left: 0
})

export const BouncingArrow = styled(DownArrow)({
  position: 'absolute',
  bottom: 0,
  width: 50,
  height: 50,
  animation: `bounce 1s infinite alternate`,
  '@keyframes bounce': {
    from: {
      transform: `translateY(0px)`
    },
    to: {
      transform: `translateY(-15px)`
    }
  }
})
