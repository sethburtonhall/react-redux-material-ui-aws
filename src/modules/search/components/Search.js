import React from 'react';

import { Container, withStyles } from '@material-ui/core';

import ContentTitle from '../../core/components/ContentTitle';
import MetaContentContainer from '../../core/containers/MetaContentContainer';

import { getText } from '../../core/helpers/Texts';

const Search = withStyles((theme) => ({
  center: {
    textAlign: 'center',
  },
  contentWrapper: {
    paddingTop: theme.spacing(3),
  },
}))((props) => {
  const { classes, data, numberOfResults } = props;

  // const { searchResults, searchString } = data;
  const { searchString } = data;

  return (
    <>
      <MetaContentContainer
        subtitle={`${getText('SEARCH', 'SEARCH_RESULTS_FOR')} "${searchString}"`}
        title={getText('SEARCH', 'SEARCH')}
      />
      <Container className={classes.contentWrapper} disableGutters>
        <ContentTitle
          bottomPadding
          subtitle={
            searchString !== '' && numberOfResults !== null
              ? `${numberOfResults} ${getText('SEARCH', 'SEARCH_RESULTS_FOR')} "${searchString}"`
              : null
          }
          title={getText('SEARCH', 'SEARCH_RESULTS')}
        />
      </Container>
    </>
  );
});

export default Search;
