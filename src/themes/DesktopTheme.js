import { createMuiTheme } from '@material-ui/core/styles';

import BaseTheme from './BaseTheme';

const DesktopTheme = {
  ...BaseTheme,
  overrides: {
    ...BaseTheme.overrides,
  },
};

export default createMuiTheme(DesktopTheme);
