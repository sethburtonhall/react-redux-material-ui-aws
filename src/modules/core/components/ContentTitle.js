import React, { Fragment } from 'react';
import classNames from 'classnames';
import Hash from 'object-hash';

import { isMobileOnly, isTablet } from 'react-device-detect';
import { Button, Container, Grid, IconButton, Typography, withStyles } from '@material-ui/core';

const ContentTitle = withStyles((theme) => ({
  action: {
    paddingRight: theme.spacing(),
  },
  actionButton: {
    marginTop: !(isMobileOnly || isTablet) ? -theme.spacing() * 1.5 : undefined,
  },
  actions: {
    display: !(isMobileOnly || isTablet) ? 'inline' : undefined,
    paddingLeft: !(isMobileOnly || isTablet) ? theme.spacing(3) : undefined,
    paddingTop: isMobileOnly || isTablet ? theme.spacing() : undefined,
  },
  actionTitle: {},
  center: {
    textAlign: 'center',
  },
  highlightedTitle: {
    color: theme.palette.primary.main,
  },
  inline: {
    display: 'inline',
  },
  titleContent: {
    paddingBottom: theme.spacing(3),
  },
  titleGridItem: {
    paddingLeft: theme.spacing(3),
  },
  titleNavHeight: {
    minHeight: 144,
  },
}))((props) => {
  const {
    actions,
    backgroundImage,
    bottomPadding,
    classes,
    highlightedTitle,
    subtitle,
    title,
  } = props;

  return (
    <Container
      className={bottomPadding ? classes.titleContent : undefined}
      disableGutters
      maxWidth="xl"
    >
      <Grid
        alignItems="center"
        className={classNames(
          classes.titleGrid,
          backgroundImage !== null ? classes.titleNavHeight : undefined
        )}
        container
        justify="center"
        style={{
          backgroundColor: backgroundImage !== null ? '#ffffff' : undefined,
          backgroundImage: backgroundImage !== null ? `url('${backgroundImage}')` : undefined,
          backgroundPosition: backgroundImage !== null ? 'center right' : undefined,
          backgroundRepeat: backgroundImage !== null ? 'no-repeat' : undefined,
          backgroundSize: backgroundImage !== null ? 'auto 100%' : undefined,
        }}
      >
        <Grid className={backgroundImage !== null ? classes.titleGridItem : undefined} item xs={12}>
          <Container
            className={isMobileOnly || isTablet ? classes.center : undefined}
            disableGutters
          >
            <Typography
              className={!(isMobileOnly || isTablet) ? classes.inline : undefined}
              variant="h1"
            >
              {highlightedTitle !== null ? (
                <>
                  {title}
                  <span className={classes.highlightedTitle}>{highlightedTitle}</span>
                </>
              ) : (
                title
              )}
            </Typography>
            {subtitle !== null && (
              <Typography
                align={isMobileOnly || isTablet ? 'center' : undefined}
                variant="subtitle1"
              >
                {subtitle}
              </Typography>
            )}
            {actions !== undefined && actions !== null && actions.length > 0 && (
              <div className={classes.actions}>
                {actions.map((action, actionIndex) => (
                  <Fragment key={Hash(`actionIndex-${actionIndex}`)}>
                    <span className={actionIndex < actions.length - 1 ? classes.action : undefined}>
                      {action.label !== undefined ? (
                        <Button
                          className={classes.actionButton}
                          color={action.color !== undefined ? action.color : undefined}
                          component={action.component !== undefined ? action.component : undefined}
                          disabled={action.disabled !== undefined ? action.disabled : undefined}
                          onClick={
                            action.function !== undefined ? () => action.function() : undefined
                          }
                          size="small"
                          startIcon={action.icon !== undefined ? action.icon : undefined}
                          to={action.to !== undefined ? action.to : undefined}
                          variant={action.variant !== undefined ? action.variant : undefined}
                        >
                          {action.label}
                        </Button>
                      ) : (
                        <IconButton
                          className={classes.actionButton}
                          color={action.color !== undefined ? action.color : undefined}
                          component={action.component !== undefined ? action.component : undefined}
                          disabled={action.disabled !== undefined ? action.disabled : undefined}
                          onClick={
                            action.function !== undefined ? () => action.function() : undefined
                          }
                          size="small"
                          to={action.to !== undefined ? action.to : undefined}
                        >
                          {action.icon}
                        </IconButton>
                      )}
                    </span>
                  </Fragment>
                ))}
              </div>
            )}
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
});

export default ContentTitle;
