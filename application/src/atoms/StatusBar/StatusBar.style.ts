import { getStatusBarHeight } from 'react-native-status-bar-height'
import styled from 'styled-components'
import theme from 'assets/theme'
import { View } from 'react-native'

export const StatusBar = styled(View)({
  height: getStatusBarHeight(true),
  width: `100%`,
  background: theme.BACKGROUND_COLOR
})

export const SBar = {
  barStyle: theme.DARK_MODE ? 'light-content' : 'dark-content',
  backgroundColor: theme.BACKGROUND_COLOR
}