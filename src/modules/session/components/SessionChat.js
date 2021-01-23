import React, { Component } from 'react';

// SyncFusion
import { ListViewComponent } from '@syncfusion/ej2-react-lists';

// Material UI
import {
  withStyles,
  // useTheme,
  FilledInput,
  InputAdornment,
  FormControl,
  Grid,
  // Box,
} from '@material-ui/core';

// Custom Components
import StackedIcon from '../../core/components/StackedIcon';

// Images
// TODO: need dynamic image
import EmojiSelectorIcon from '../../../assets/emojiSelector.svg';
import ElevateIcon from '../../../assets/elevate.svg';

const useStyles = (theme) => ({
  root: {
    padding: theme.spacing(2),
    '& .e-listview': {
      fontSize: 12,
      height: '35vh',
      maxHeight: '310px !important',
      overflowY: 'scroll',
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
      '&:not(.e-list-template) .e-list-item': {
        lineHeight: 2,
      },
    },
    '& .e-list-item': {
      cursor: 'default',
      marginBottom: 20,
      '&.e-hover': {
        backgroundColor: 'transparent',
      },
    },
    '& .message': {
      padding: theme.spacing(0, 1),
    },
    '& .senderMessage': {
      backgroundColor: theme.palette.gray3,
      color: theme.palette.black,
    },
    '& .receiverMessage': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.white,
    },
  },
  filledInput: {
    backgroundColor: theme.palette.gray4,
    fontSize: 12,
    border: `1px solid ${theme.palette.gray3}`,
    borderRadius: '4px 4px 0 0',
    '& .MuiFilledInput-input': {
      padding: theme.spacing(2),
    },
  },
  sendIcon: {
    cursor: 'pointer',
    color: theme.palette.primary.main,
  },
  iconGroup: {
    padding: theme.spacing(0, 1),
    backgroundColor: theme.palette.primary.light,
    borderRadius: '0 0 4px 4px',
    '& .MuiGrid-item': {
      padding: theme.spacing(1),
      cursor: 'pointer',
      '&:first-child': {
        paddingLeft: 0,
      },
      '& img': {
        width: 24,
        height: 24,
      },
      '& .fa-stack': {
        width: '1.6rem',
        fontSize: 12,
      },
    },
  },
  dividerIcon: {
    transform: 'rotate(90deg)',
    color: theme.palette.gray1,
    display: 'flex',
    alignItems: 'center',
    padding: '0 !important',
  },
});

class SessionChat extends Component {
  constructor() {
    super(...arguments);
    this.listObj = null;

    this.data = [
      {
        message: 'Hi!',
        id: '1',
        chat: 'sender',
      },
      {
        message: 'Hello!',
        id: '2',
        chat: 'receiver',
      },
      {
        message: 'What kind of application are you going to launch?',
        id: '3',
        chat: 'sender',
      },
      {
        message: 'An app designed by coaches for coaches.',
        id: '4',
        chat: 'receiver',
      },
      {
        message: 'That sounds awesome!',
        id: '5',
        chat: 'sender',
      },
    ];
  }

  listTemplate(data) {
    const sendertemplate = (
      <Grid item className="message senderMessage">
        {data.message}
      </Grid>
    );
    const receivertemplate = (
      <Grid item className="message receiverMessage">
        {data.message}
      </Grid>
    );
    return (
      <Grid container justify={data.chat !== 'receiver' ? 'flex-end' : 'flex-start'}>
        {data.chat !== 'receiver' ? sendertemplate : receivertemplate}
      </Grid>
    );
  }

  btnClick() {
    const value = this.textboxEle.value;
    this.listObj.addItem([{ message: value, id: '6', chat: 'receiver' }]);
    this.textboxEle.value = '';
  }

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <ListViewComponent
          id="List"
          dataSource={this.data}
          showHeader={false}
          template={this.listTemplate}
          ref={(scope) => {
            this.listObj = scope;
          }}
        />

        <Grid container direction="column">
          <Grid item>
            <FormControl fullWidth>
              <FilledInput
                id="filled-adornment-amount"
                className={classes.filledInput}
                inputRef={(textbox) => {
                  this.textboxEle = textbox;
                }}
                endAdornment={
                  <InputAdornment
                    className={classes.sendIcon}
                    position="end"
                    onClick={this.btnClick.bind(this)}
                  >
                    <i className="fal fa-paper-plane"></i>
                  </InputAdornment>
                }
                placeholder="Write a message..."
              />
            </FormControl>
          </Grid>

          <Grid className={classes.iconGroup} item container justify="flex-start">
            <Grid item>
              <img src={EmojiSelectorIcon} alt="Emoji selector" />
            </Grid>

            <Grid item>
              <img src={ElevateIcon} alt="Elevate" />
            </Grid>

            <Grid className={classes.dividerIcon} item>
              <i className="fal fa-horizontal-rule"></i>
            </Grid>

            <Grid item>
              <StackedIcon icon="calendar-check" backgroundColor={theme.palette.success.main} />
            </Grid>

            <Grid item>
              <StackedIcon icon="books" backgroundColor={theme.palette.primary.main} />
            </Grid>

            <Grid item>
              <StackedIcon icon="paperclip" backgroundColor={theme.palette.gray1} />
            </Grid>

            <Grid item>
              <StackedIcon icon="file-invoice-dollar" backgroundColor={theme.palette.error.main} />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(SessionChat);
