import {
  blue500, blue700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
  yellow400,
} from 'material-ui/styles/colors'
import { fade } from 'material-ui/utils/colorManipulator'
import spacing from 'material-ui/styles/spacing'

export default {
  appBar: {
    height: 56,
  },
  badge: {
    primaryColor: '#fa7252',
  },
  spacing,
  fontFamily: 'Roboto, sans-serif',
  inkBar: {
    backgroundColor: yellow400,
  },
  palette: {
    primary1Color: blue500,
    primary2Color: blue700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: blue500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
    weakColor: '#999',
    msBgColor: '#f0f0eb',
  },
  shadow: {
    boxShadow: '0px 6px 38px 0px rgba(0,0,0,0.24)',
    bg: '#fff',
  },
}

export const secondary = {
  palette: {
    accent1Color: blue500,
  },
  tabs: {
    selectedTextColor: blue500,
    textColor: '#999',
  },
}
