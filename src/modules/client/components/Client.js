import React, { useState } from 'react';
import PropTypes from 'prop-types';
// TODO: remove after API integration
import _ from 'lodash';

// Helpers
import { getText } from '../../core/helpers/Texts';

// Material UI
import {
  withStyles,
  // useTheme,
  Container,
  Grid,
  Typography,
  Paper,
  List,
  ListItem,
  Avatar,
  Divider,
  Box,
} from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';

// Custom Components
import ClientProfile from './ClientProfile';
import ClientStatus from './ClientStatus';

// Containers
import MetaContentContainer from '../../core/containers/MetaContentContainer';

// Images
// TODO: need dynamic image
import VideoImage from '../../../assets/session_hub_video.png';

const ClientHub = withStyles((theme) => ({
  contentWrapper: {
    marginTop: theme.spacing(6),
  },
  toggleButton: {
    textTransform: 'capitalize',
    backgroundColor: theme.palette.gray4,
    color: theme.palette.gray2,
    borderColor: '#EAECF6',
    '&.Mui-selected': {
      backgroundColor: theme.palette.white,
      color: theme.palette.primary.dark,
    },
    '&.MuiToggleButtonGroup-groupedHorizontal:not(:first-child)': {
      borderLeftColor: '#EAECF6',
    },
  },
  clientStatus: {
    '& .success': {
      color: theme.palette.success.main,
    },
    '& .error': {
      color: theme.palette.error.main,
    },
  },
  clientList: {
    [theme.breakpoints.down('xl')]: {
      marginBottom: theme.spacing(2),
    },
  },
  list: {
    padding: theme.spacing(0, 2),
  },
  listItem: {
    margin: theme.spacing('10px', 0),
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.primary.opaque,
      borderRadius: theme.shape.borderRadius,
    },
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}))(({ classes }) => {
  // const theme = useTheme();
  const [clientSort, setClientSort] = useState('ascending');

  const handleClientSort = (event, newClientSort) => {
    setClientSort(newClientSort);
  };

  return (
    <>
      <MetaContentContainer title={getText('CLIENT', 'CLIENTS')} />
      <Container className={classes.contentWrapper} maxWidth="xl" disableGutters>
        <Grid container spacing={2}>
          <Grid
            item
            container
            direction="column"
            xs={12}
            xl={6}
            spacing={1}
            className={classes.clientList}
          >
            <Grid item container alignItems="center">
              <Typography variant="h2">{getText('CLIENT', 'CLIENTS')}</Typography>
              <Box ml="auto">
                <ToggleButtonGroup
                  size="small"
                  value={clientSort}
                  exclusive
                  onChange={handleClientSort}
                  aria-label="client sort"
                  className={classes.toggleButtonGroup}
                >
                  <ToggleButton
                    className={classes.toggleButton}
                    value="ascending"
                    aria-label="ascending sort"
                  >
                    <Typography variant="body2">{getText('CLIENT', 'A_Z')}</Typography>
                  </ToggleButton>
                  <ToggleButton
                    className={classes.toggleButton}
                    value="descending"
                    aria-label="descending sort"
                  >
                    <Typography variant="body2">{getText('CLIENT', 'Z_A')}</Typography>
                  </ToggleButton>
                  <ToggleButton
                    className={classes.toggleButton}
                    value="latest"
                    aria-label="latest activity"
                  >
                    <Typography variant="body2">{getText('CLIENT', 'LATEST_ACTIVITY')}</Typography>
                  </ToggleButton>
                </ToggleButtonGroup>
              </Box>
            </Grid>
            <Grid item>
              <Paper variant="outlined" elevation={0}>
                <List className={classes.list}>
                  {/* TODO: remove after API integration */}
                  {_.times(8, (i) => (
                    <Container key={i}>
                      <ListItem
                        className={classes.listItem}
                        onClick={() => console.log('this will fire a change client event')}
                      >
                        <Grid container alignItems="center">
                          <Grid item>
                            <Box mr={2}>
                              {/* TODO: need dynamic image */}
                              <Avatar
                                className={classes.avatar}
                                alt="Client Image"
                                src={VideoImage}
                              />
                            </Box>
                          </Grid>
                          <Grid item container direction="column" xs>
                            <Grid item container alignItems="center">
                              <Typography variant="h2" style={{ marginRight: '10px' }}>
                                Kiera Cameron
                              </Typography>
                              <ClientStatus />
                            </Grid>
                            <Grid item>
                              <Typography variant="body1" color="textSecondary">
                                34 Year Old – Female
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid item>
                            <Typography color="textSecondary">Sioux Falls, ND</Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                      <Grid container>
                        <Grid item xs={12}>
                          <Divider />
                        </Grid>
                      </Grid>
                    </Container>
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>
          <Grid item container direction="column" xs={12} xl={6} spacing={1}>
            <Grid item container alignItems="center" style={{ height: '41px' }}>
              <Typography variant="h2">{getText('CLIENT', 'CLIENT_PROFILE')}</Typography>
            </Grid>
            <Grid item>
              <Paper variant="outlined" elevation={0}>
                <ClientProfile />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
});

ClientHub.propTypes = {
  classes: PropTypes.object,
};

export default ClientHub;
