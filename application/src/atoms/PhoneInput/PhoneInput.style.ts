import styled from 'styled-components'
import { View } from 'react-native'
import theme from 'assets/theme'

export const PhoneInput = styled(View)({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 20
})

export const Label = {
  size: 'h3',
  style: { paddingLeft: 15, marginBottom: 5 }
}

export const containerStyle = {
  width: `100%`,
  height: 40
}

export const inputStyle = {
  flex: 1,
  width: `100%`,
  borderWidth: 1,
  borderRadius: 25,
  borderColor: theme.BRAND_COLOR,
  backgroundColor: theme.OPAQUE_BRAND,
  color: theme.PRIMARY_COLOR,
  paddingLeft: 20
}