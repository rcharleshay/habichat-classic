import styled from 'styled-components'
import { View, TextInput, Text } from 'react-native'
import theme from 'assets/theme'

export const NameInput = styled(View)({
  width: `100%`,
  marginTop: 20
})

export const Input = styled(TextInput)({
  width: `100%`,
  fontWeight: 400,
  fontSize: theme.FONT_MEDIUM,
  display: 'flex',
  alignItems: 'center',
  color: theme.PRIMARY_COLOR,
  height: 40,
  borderRadius: 25,
  padding: `0% 25px`,
  marginTop: 5,
  marginBottom: 5,
  background: theme.OPAQUE_BRAND,
  border: p => {
    if (p.validation === 'pending') return `1px solid ${theme.BRAND_COLOR}`
    if (p.validation === 'valid') return `1px solid ${theme.VALID_GREEN}`
    if (p.validation === 'invalid') return `1px solid ${theme.INVALID_RED}`
  }
})

export const Title = {
  size: 'h3',
  style: { paddingLeft: 20 }
}

export const ErrorText = styled(Text)({
  color: theme.INVALID_RED,
  fontWeight: 600,
  width: `100%`,
  textAlign: 'center'
})