import React from 'react'
import PropTypes from 'prop-types'

import {
  withStyles,
  Grid,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Button,
  Typography
} from '@material-ui/core'

const tiers = [
  {
    title: 'Free Consultation',
    price: 'FREE First 15 Minutes',
    features: ['3-4 Word Feature', 'Another Feature'],
    buttonText: 'Select',
    buttonVariant: 'outlined'
  },
  {
    title: 'Single Session',
    subheader: 'Most popular',
    price: '$75 - $150/session',
    features: ['3-4 Word Feature', 'Another Feature', 'More Features'],
    buttonText: 'Select',
    buttonVariant: 'contained',
    popular: 'true'
  },
  {
    title: '5 Session Bundle',
    price: '$100/session',
    features: [
      '3-4 Word Feature',
      'Another Feature',
      'More Features',
      'Even More Features'
    ],
    buttonText: 'Select',
    buttonVariant: 'outlined'
  }
]

// TODO: rename with pricing
const ProgramPricePlans = withStyles((theme) => ({
  root: {
    '& ul': {
      margin: 0,
      padding: 0,
      listStyle: 'none'
    },
    '& .MuiCard-root': {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    },
    '& .MuiCardHeader-root': {
      backgroundColor: theme.palette.primary.main,
      textAlign: 'center',
      padding: '29px 48px',
      borderBottomRightRadius: '0',
      borderBottomLeftRadius: '0',
      '& .MuiTypography-h5': {
        fontSize: '.875rem',
        color: theme.palette.white,
        marginBottom: '3px'
      },
      '& .MuiTypography-body1': {
        fontSize: '0.6875rem',
        color: theme.palette.white
      }
    },
    '& .MuiCardActions-root': {
      marginTop: 'auto'
    }
  },
  features: {
    '& .icon': {
      color: theme.palette.success.main,
      fontSize: '0.6875rem'
    },
    '& li': { fontSize: '0.6875rem', fontWeight: 400 }
  },
  button: {
    margin: '0 16px 20px'
  },
  cornerRibbon: {
    width: '200px',
    background: theme.palette.success.main,
    position: 'absolute',
    top: '15px',
    right: '-75px',
    left: 'auto',
    textAlign: 'center',
    lineHeight: '25px',
    letterSpacing: 1,
    color: theme.palette.white,
    transform: 'rotate(45deg)',
    fontSize: '12px'
  }
}))(({ classes }) => {
  return (
    <>
      {tiers.map((tier) => (
        // Enterprise card is full width at sm breakpoint
        <Grid
          className={classes.root}
          item
          key={tier.title}
          xs={12}
          // md={tier.popular === 'true' ? 12 : 6}
          lg={4}
        >
          <Card>
            <CardHeader
              title={tier.title}
              subheader={tier.price}
              className={classes.cardHeader}
            />
            <CardContent>
              <ul className={classes.features}>
                {tier.features.map((feature) => (
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                      <Typography color="primary">
                        <i className="fal fa-check icon"></i>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        component="li"
                        variant="subtitle2"
                        align="center"
                        key={feature}
                      >
                        {feature}
                      </Typography>
                    </Grid>
                  </Grid>
                ))}
              </ul>
            </CardContent>

            <CardActions>
              <Button
                fullWidth
                variant={tier.buttonVariant}
                color="primary"
                className={classes.button}
              >
                {tier.buttonText}
              </Button>
            </CardActions>

            {tier.popular === 'true' && (
              <div className={classes.cornerRibbon}>Popular</div>
            )}
          </Card>
        </Grid>
      ))}
    </>
  )
})

ProgramPricePlans.propTypes = {
  classes: PropTypes.object
}

export default ProgramPricePlans
