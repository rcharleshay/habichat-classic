import styled from 'styled-components'
import { View } from 'react-native'
import theme from 'assets/theme'

export const Captcha = styled(View)({
  flex: 1,
  background: theme.BACKGROUND_COLOR,
  opacity: p => (p.loaded ? 1 : 0),
  border: `1px solid #000`,
  paddingTop: 20
})