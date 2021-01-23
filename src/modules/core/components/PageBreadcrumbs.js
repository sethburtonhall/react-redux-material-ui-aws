import React from 'react';
import Hash from 'object-hash';

import { Link } from 'react-router-dom';
import { Breadcrumbs, Container, withStyles } from '@material-ui/core';

import { getText } from '../helpers/Texts';

const PageBreadcrumbs = withStyles((theme) => ({
  breadcrumb: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    fontSize: 'small',
  },
  breadcrumbs: {},
  breadcrumbsContent: {
    paddingBottom: theme.spacing(3),
  },
}))((props) => {
  const { breadcrumbs, classes } = props;

  return (
    <Container className={classes.breadcrumbsContent} disableGutters maxWidth="xl">
      <Breadcrumbs className={classes.breadcrumbs} separator="|">
        {breadcrumbs.map((stackElement, stackElementIndex) => (
          <Link
            className={classes.breadcrumb}
            key={Hash(`stackElement-${stackElementIndex}`)}
            to={stackElement.link}
          >
            {stackElement.name}
          </Link>
        ))}
      </Breadcrumbs>
    </Container>
  );
});

PageBreadcrumbs.defaultProps = {
  breadcrumbs: [],
};

export default PageBreadcrumbs;
