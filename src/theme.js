import spacing from 'material-ui/styles/spacing';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {pinkA700,green600,whiteA100,fullWhite,amber50} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';

const CDT = getMuiTheme({
    spacing: spacing,
    fontFamily: 'Roboto, sans-serif',
    borderRadius: 2,
    palette: {
      primary1Color: green600,
      textColor: amber50,
      secondaryTextColor: fade(fullWhite, 0.7),
      alternateTextColor: '#303030',
      canvasColor: '#303030',
      borderColor: fade(fullWhite, 0.3),
      disabledColor: fade(fullWhite, 0.3),
      pickerHeaderColor: fade(fullWhite, 0.12),
      clockCircleColor: fade(fullWhite, 0.12),
      primary2Color: pinkA700,
      primary3Color: green600,
      accent1Color: green600,
      accent2Color: green600,
      accent3Color: whiteA100,

    },
  });

export default CDT