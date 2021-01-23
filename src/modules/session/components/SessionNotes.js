import React from 'react';

// Syncfusion
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from '@syncfusion/ej2-react-richtexteditor';

// Material UI
import {
  withStyles,
  // useTheme
} from '@material-ui/core';

// Syncfusion Styles
import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-icons/styles/material.css';
import '@syncfusion/ej2-buttons/styles/material.css';
import '@syncfusion/ej2-splitbuttons/styles/material.css';
import '@syncfusion/ej2-inputs/styles/material.css';
import '@syncfusion/ej2-lists/styles/material.css';
import '@syncfusion/ej2-navigations/styles/material.css';
import '@syncfusion/ej2-popups/styles/material.css';
import '@syncfusion/ej2-richtexteditor/styles/material.css';

const SessionNotes = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(({ classes }) => {
  // const theme = useTheme();

  const toolbarSettings = {
    items: [
      'Bold',
      'Italic',
      'Underline',
      'StrikeThrough',
      'FontName',
      'FontSize',
      'FontColor',
      'BackgroundColor',
      'LowerCase',
      'UpperCase',
      '|',
      'Formats',
      'Alignments',
      'OrderedList',
      'UnorderedList',
      'Outdent',
      'Indent',
      '|',
      'CreateLink',
      'Image',
      '|',
      'ClearFormat',
      'Print',
      'SourceCode',
      'FullScreen',
      '|',
      'Undo',
      'Redo',
    ],
  };

  const quickToolbarSettings = {
    image: [
      'Replace',
      'Align',
      'Caption',
      'Remove',
      'InsertLink',
      'OpenImageLink',
      '-',
      'EditImageLink',
      'RemoveImageLink',
      'Display',
      'AltText',
      'Dimension',
    ],
  };

  const value = 'this is the <strong>rich text value</strong>';

  // let rteValue: string = rteObj.value;
  // console.log(rteValue)
  return (
    <div className={classes.root}>
      <RichTextEditorComponent
        value={value}
        toolbarSettings={toolbarSettings}
        quickToolbarSettings={quickToolbarSettings}
      >
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
});

export default SessionNotes;
