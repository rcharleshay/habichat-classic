import styled from 'styled-components'
import theme from 'assets/theme'
import { TouchableOpacity } from 'react-native'

export const PillButton = styled(TouchableOpacity)(p => ({
  width: `100%`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 40,
  borderRadius: 25,
  borderWidth: 2,
  backgroundColor: p.white ? theme.WHITE : theme.BRAND_COLOR,
  borderColor: p.white ? theme.BRAND_COLOR : theme.WHITE,
  ...p.style
}))
