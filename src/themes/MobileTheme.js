import { createMuiTheme } from '@material-ui/core/styles';

import BaseTheme from './BaseTheme';

const MobileTheme = {
  ...BaseTheme,
  overrides: {
    ...BaseTheme.overrides,
  },
};

export default createMuiTheme(MobileTheme);
