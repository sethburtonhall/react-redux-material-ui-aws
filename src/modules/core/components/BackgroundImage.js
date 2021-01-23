import React from 'react';

import { withStyles } from '@material-ui/core'

const BackgroundImage = withStyles((theme) => ({
  imageWrapper: {
  },
  bgImage: {
    position: 'relative',
    display: 'block',
    width: '100%',
    height: 0,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    overflow: 'hidden',
  },
  aspect1x1: {
    paddingTop: '100%',
  },
  aspect2x1: {
    paddingTop: '50%',
  },
  aspect3x1: {
    paddingTop: '33%',
  },
  aspect4x1: {
    paddingTop: '25%',
  },
  aspect4x3: {
    paddingTop: '75%',
  },
  aspect5x7: {
    paddingTop: '120%',
  },
  aspect16x9: {
    paddingTop: '56.25%',
  },
}))((props) => {
  const { classes, imagePath, aspectRatio, width, height } = props;
  const aspectRatioClass = classes['aspect' + aspectRatio]

  return (
    <div
      className={`${classes.bgImage} ${aspectRatioClass}`}
      style={{
        backgroundImage: `url(${imagePath})`,
        width: width,
        height: height
      }}
    />
  );
});

export default BackgroundImage;
