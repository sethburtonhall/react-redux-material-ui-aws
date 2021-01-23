import React from 'react';

// Syncfusion
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';

// Syncfusion Styles
import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-react-navigations/styles/material.css';
import '@syncfusion/ej2-inputs/styles/material.css';
import '@syncfusion/ej2-buttons/styles/material.css';

// Material UI
import {
  withStyles,
  // useTheme
} from '@material-ui/core';

const SessionResources = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(({ classes }) => {
  // const theme = useTheme();

  const hierarchicalData = [
    {
      id: '01',
      name: 'Local Disk (C:)',
      expanded: true,
      tooltip: 'Local Disk (C:)',
      subChild: [
        {
          id: '01-01',
          name: 'Program Files',
          tooltip: 'Program Files',
          subChild: [
            { id: '01-01-01', name: '7-Zip', tooltip: '7-Zip' },
            { id: '01-01-02', name: 'Git', tooltip: 'Git' },
            { id: '01-01-03', name: 'IIS Express', tooltip: 'IIS Express' },
          ],
        },
        {
          id: '01-02',
          name: 'Users',
          expanded: true,
          tooltip: 'Users',
          subChild: [
            { id: '01-02-01', name: 'Smith', tooltip: 'Smith' },
            { id: '01-02-02', name: 'Public', tooltip: 'Public' },
            { id: '01-02-03', name: 'Admin', tooltip: 'Admin' },
          ],
        },
        {
          id: '01-03',
          name: 'Windows',
          tooltip: 'Windows',
          subChild: [
            { id: '01-03-01', name: 'Boot', tooltip: 'Boot' },
            { id: '01-03-02', name: 'FileManager', tooltip: 'FileManager' },
            { id: '01-03-03', name: 'System32', tooltip: 'System32' },
          ],
        },
      ],
    },
    {
      id: '02',
      name: 'Local Disk (D:)',
      tooltip: 'Local Disk (D:)',
      subChild: [
        {
          id: '02-01',
          name: 'Personals',
          tooltip: 'Personals',
          subChild: [
            { id: '02-01-01', name: 'My photo.png', tooltip: 'My photo.png' },
            { id: '02-01-02', name: 'Rental document.docx', tooltip: 'Rental document.docx' },
            { id: '02-01-03', name: 'Pay slip.pdf', tooltip: 'Pay slip.pdf' },
          ],
        },
        {
          id: '02-02',
          name: 'Projects',
          tooltip: 'Projects',
          subChild: [
            { id: '02-02-01', name: 'ASP Application', tooltip: 'ASP Application' },
            { id: '02-02-02', name: 'TypeScript Application', tooltip: 'TypeScript Application' },
            { id: '02-02-03', name: 'React Application', tooltip: 'React Application' },
          ],
        },
        {
          id: '02-03',
          name: 'Office',
          tooltip: 'Office',
          subChild: [
            { id: '02-03-01', name: 'Work details.docx', tooltip: 'Work details.docx' },
            { id: '02-03-02', name: 'Weekly report.docx', tooltip: 'Weekly report.docx' },
            { id: '02-03-03', name: 'Wish list.csv', tooltip: 'Wish list.csv' },
          ],
        },
      ],
    },
    {
      id: '03',
      name: 'Local Disk (E:)',
      tooltip: 'Local Disk (C:)',
      icon: 'folder',
      subChild: [
        {
          id: '03-01',
          name: 'Pictures',
          tooltip: 'Pictures',
          subChild: [
            { id: '03-01-01', name: 'Wind.jpg', tooltip: 'Wind.jpg' },
            { id: '03-01-02', name: 'Stone.jpg', tooltip: 'Stone.jpg' },
            { id: '03-01-03', name: 'Home.jpg', tooltip: 'Home.jpg' },
          ],
        },
        {
          id: '03-02',
          name: 'Documents',
          tooltip: 'Documents',
          subChild: [
            {
              id: '03-02-01',
              name: 'Environment Pollution.docx',
              tooltip: 'Environment Pollution.docx',
            },
            { id: '03-02-02', name: 'Global Warming.ppt', tooltip: 'Global Warming.ppt' },
            { id: '03-02-03', name: 'Social Network.pdf', tooltip: 'Social Network.pdf' },
          ],
        },
        {
          id: '03-03',
          name: 'Study Materials',
          tooltip: 'Study Materials',
          subChild: [
            { id: '03-03-01', name: 'UI-Guide.pdf', tooltip: 'UI-Guide.pdf' },
            { id: '03-03-02', name: 'Tutorials.zip', tooltip: 'Tutorials.zip' },
            { id: '03-03-03', name: 'TypeScript.7z', tooltip: 'TypeScript.7z' },
          ],
        },
      ],
    },
  ];

  const fields = {
    dataSource: hierarchicalData,
    id: 'id',
    text: 'name',
    child: 'subChild',
  };

  return (
    <div className={classes.root}>
      <TreeViewComponent fields={fields}></TreeViewComponent>
    </div>
  );
});

export default SessionResources;
