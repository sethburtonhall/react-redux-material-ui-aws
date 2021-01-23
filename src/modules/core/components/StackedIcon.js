import React, { forwardRef } from 'react';

import { withStyles, useTheme, Tooltip } from '@material-ui/core';

const StackedIcon = withStyles((theme) => ({
  root: {
    '& .fa-stack': {
      width: '2.4rem',
    },
  },
}))(({ classes, icon, backgroundColor, tooltip, tooltipTitle }) => {
  const theme = useTheme();

  const Icon = forwardRef(function Icon(props, ref) {
    return (
      <span {...props} ref={ref} className="fa-stack">
        <i
          className="fas fa-circle fa-stack-2x circle"
          style={{ color: `${backgroundColor ? backgroundColor : theme.palette.gray3}` }}
        ></i>
        <i
          className={`fal fa-${icon} fa-stack-1x fa-inverse icon`}
          style={{
            color: `${backgroundColor ? theme.palette.white : theme.palette.gray}`,
          }}
        ></i>
      </span>
    );
  });

  return (
    <div className={classes.root}>
      {tooltip ? (
        <Tooltip title={tooltipTitle}>
          <Icon />
        </Tooltip>
      ) : (
        <Icon />
      )}
    </div>
  );
});

export default StackedIcon;
