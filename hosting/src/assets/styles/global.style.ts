import { createGlobalStyle } from 'styled-components'
import cocogoose from 'assets/fonts/cocogoose.otf'

const GlobalStyle = createGlobalStyle({
  '@font-face': { fontFamily: 'cocogoose', src: `url(${cocogoose}); url(${cocogoose}) format("ttf")` },
  dl: { marginBottom: '1rem' },
  h1: { marginBottom: '0' },
  h2: { marginBottom: '0' },
  h3: { marginBottom: '0' },
  h4: { marginBottom: '0' },
  h5: { marginBottom: '0' },
  h6: { marginBottom: '0' },
  ol: { marginBottom: '1rem' },
  p: { marginBottom: '1rem' },
  pre: { MsOverflowStyle: 'scrollbar', flex: 1 },
  ul: { marginBottom: '1rem' },
  address: { fontStyle: 'normal' },
  body: {
    margin: '0',
    fontFamily:
      "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'",
    fontSize: '1rem',
    fontWeight: '400',
    lineHeight: '1.5',
    color: '#212529',
    backgroundColor: `#000`
  },
  caption: { paddingTop: '.75rem', paddingBottom: '.75rem', color: '#868e96', captionSide: 'bottom' },
  button: { WebkitAppearance: 'button' },
  hr: { boxSizing: 'content-box', height: '0' },
  input: { margin: '0', fontFamily: 'inherit', fontSize: 'inherit', lineHeight: 'inherit' },
  textarea: { resize: 'vertical' },
  div: { display: 'flex', boxSizing: 'border-box' },
  article: { display: 'block' },
  aside: { display: 'block' },
  dialog: { display: 'block' },
  figcaption: { display: 'block' },
  figure: { margin: '0 0 1rem' },
  footer: { display: 'block', boxSizing: 'border-box' },
  header: { display: 'block', boxSizing: 'border-box' },
  hgroup: { display: 'block' },
  legend: { width: '100%', maxWidth: '100%', padding: '0', fontSize: '1.5rem', color: 'inherit', whiteSpace: 'normal' },
  main: { display: 'block', boxSizing: 'border-box' },
  nav: { display: 'block' },
  section: { display: 'block' },
  dd: { marginLeft: '0' },
  label: { MsTouchAction: 'manipulation', touchAction: 'manipulation' },
  progress: { verticalAlign: 'baseline' },
  sub: { bottom: '-.25em' },
  sup: { top: '-.5em' },
  output: { display: 'inline-block' },
  after: { boxSizing: 'border-box' },
  before: { boxSizing: 'border-box' },
  html: {
    fontFamily: 'sans-serif',
    lineHeight: '1.15',
    WebkitTextSizeAdjust: '100%',
    MsTextSizeAdjust: '100%',
    MsOverflowStyle: 'scrollbar',
    WebkitTapHighlightColor: 'transparent'
  },
  ms_viewport: { width: 'device-width' },
  tabindex___1___focus: { outline: '0!important' },
  abbr_data_original_title: { WebkitTextDecoration: 'none dotted', textDecoration: 'none dotted', cursor: 'help', borderBottom: '0' },
  abbr_title: { WebkitTextDecoration: 'none dotted', textDecoration: 'none dotted', cursor: 'help', borderBottom: '0' },
  ol_ol: { marginBottom: '0' },
  ol_ul: { marginBottom: '0' },
  ul_ol: { marginBottom: '0' },
  ul_ul: { marginBottom: '0' },
  dt: { fontWeight: '700' },
  blockquote: { margin: '0 0 1rem' },
  dfn: { fontStyle: 'italic' },
  b: { fontWeight: 'bolder' },
  strong: { fontWeight: 'bolder' },
  small: { fontSize: '80%' },
  a: { MsTouchAction: 'manipulation', touchAction: 'manipulation' },
  a_hover: { textDecoration: 'none' },
  a_not__href___not__tabindex: { textDecoration: 'none' },
  a_not__href___not__tabindex___focus: { outline: '0' },
  a_not__href___not__tabindex___hover: { textDecoration: 'none' },
  code: { fontFamily: 'monospace,monospace', fontSize: '1em' },
  kbd: { fontFamily: 'monospace,monospace', fontSize: '1em' },
  samp: { fontFamily: 'monospace,monospace', fontSize: '1em' },
  img: { verticalAlign: 'middle', borderStyle: 'none' },
  svg_not__root: { overflow: 'hidden' },
  role_button: { MsTouchAction: 'manipulation', touchAction: 'manipulation' },
  area: { MsTouchAction: 'manipulation', touchAction: 'manipulation' },
  input_not__type_range: { MsTouchAction: 'manipulation', touchAction: 'manipulation' },
  select: { textTransform: 'none' },
  summary: { display: 'list-item' },
  table: { borderCollapse: 'collapse' },
  th: { textAlign: 'inherit' },
  button_focus: { outline: '-webkit-focus-ring-color auto 5px' },
  optgroup: { margin: '0', fontFamily: 'inherit', fontSize: 'inherit', lineHeight: 'inherit' },
  type_reset: { WebkitAppearance: 'button' },
  type_submit: { WebkitAppearance: 'button' },
  html__type_button: { WebkitAppearance: 'button' },
  type_button____moz_focus_inner: { padding: '0', borderStyle: 'none' },
  type_reset____moz_focus_inner: { padding: '0', borderStyle: 'none' },
  type_submit____moz_focus_inner: { padding: '0', borderStyle: 'none' },
  button___moz_focus_inner: { padding: '0', borderStyle: 'none' },
  input_type_checkbox: { boxSizing: 'border-box', padding: '0' },
  input_type_radio: { boxSizing: 'border-box', padding: '0' },
  input_type_date: { WebkitAppearance: 'listbox' },
  input_type_datetime_local: { WebkitAppearance: 'listbox' },
  input_type_month: { WebkitAppearance: 'listbox' },
  input_type_time: { WebkitAppearance: 'listbox' },
  fieldset: { minWidth: '0', padding: '0', margin: '0', border: '0' },
  type_number____webkit_inner_spin_button: { height: 'auto' },
  type_number____webkit_outer_spin_button: { height: 'auto' },
  type_search: { outlineOffset: '-2px', WebkitAppearance: 'none' },
  type_search____webkit_search_cancel_button: { WebkitAppearance: 'none' },
  type_search____webkit_search_decoration: { WebkitAppearance: 'none' },
  webkit_file_upload_button: { font: 'inherit', WebkitAppearance: 'button' },
  template: { display: 'none' },
  hidden: { display: 'none!important' }
})

export default GlobalStyle
