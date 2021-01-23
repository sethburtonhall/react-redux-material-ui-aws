import React from 'react';
import Autosuggest from 'react-autosuggest';
import deburr from 'lodash/deburr';
import Hash from 'object-hash';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';

import { InputAdornment, MenuItem, Paper, TextField, withStyles } from '@material-ui/core';
import { Search } from '@material-ui/icons';

import { getText } from '../../core/helpers/Texts';

const SearchBar = withStyles((theme) => ({
  container: {
    position: 'relative',
    width: '100%',
  },
  highlightedSuggestionPart: {
    color: theme.palette.primary.main,
    fontWeight: '500',
  },
  // searchForm: {
  //   margin: '0 20px',
  // },
  searchResults: {
    backgroundColor: 'rbga(0, 0, 0, 0.7)',
    maxHeight: 300,
    overflowY: 'auto',
  },
  searchTextField: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  suggestion: {
    display: 'block',
    fontWeight: 'normal,',
  },
  suggestionsContainerOpen: {
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    left: 0,
    position: 'absolute',
    right: 0,
    zIndex: 1,
  },
  suggestionsList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
}))((props) => {
  const { classes, data, handleSearchChange, handleSuggestionSelect, handleUnfocus } = props;

  const { searchData } = data;

  function getSuggestions(value, suggestions) {
    if (value === undefined || value === null || value === 0) {
      return [];
    }

    const inputValue = deburr(value.trim()).toLowerCase();

    const inputLength = inputValue.length;

    let count = 0;

    if (inputLength === 0) {
      return [];
    }

    let checkValues = [];

    const resultsCount = 25;

    if (count < resultsCount && suggestions.length > 0) {
      checkValues = suggestions.filter((suggestion) => {
        const suggestValue = suggestion.value.toLowerCase();

        const compare = suggestValue.includes(inputValue);

        const keep = count < resultsCount && compare;

        if (keep) {
          count += 1;
        }

        return keep;
      });
    }

    const tempSuggestions = checkValues;

    // tempSuggestions.unshift({
    //   id: '',
    //   label: `${getText('SEARCH', 'SEARCH_FOR')}: ${value}`,
    //   name: `${getText('SEARCH', 'SEARCH_FOR')}: ${value}`,
    //   type: null,
    //   value,
    //   urlName: '',
    // });

    return tempSuggestions;
  }

  let effectiveSearchString = searchData.searchString;

  let displaySuggestions = getSuggestions(effectiveSearchString, data.suggestions);

  function getSuggestionValue(suggestion) {
    return suggestion.label;
  }

  function onSuggestionsClearRequested() {
    displaySuggestions = [];
  }

  function onSuggestionsFetchRequested({ value }) {
    displaySuggestions = getSuggestions(value, data.suggestions);
  }

  function renderInputComponent(inputProps) {
    const { inputRef = () => {}, ref, ...other } = inputProps;

    return (
      <form
        autoComplete="off"
        className={classes.searchForm}
        onSubmit={(event) => event.preventDefault()}
      >
        <TextField
          className={classes.searchTextField}
          fullWidth
          InputProps={{
            autoComplete: 'off',
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
            inputRef: (node) => {
              ref(node);
              inputRef(node);
            },
            name: 'search-bar',
          }}
          margin="dense"
          placeholder={getText('SEARCH', 'SEARCH_DEFAULT')}
          variant="outlined"
          {...other}
        />
      </form>
    );
  }

  function renderSuggestion(suggestion, { query, isHighlighted }) {
    const matches = match(suggestion.label, query);

    const parts = parse(suggestion.label, matches);

    if (isHighlighted) {
      effectiveSearchString = suggestion.label;
    }

    return (
      <MenuItem selected={isHighlighted}>
        <div>
          {parts.map((part, partIndex) =>
            part.highlight ? (
              <span className={classes.highlightedSuggestionPart} key={Hash(`part-${partIndex}`)}>
                {part.text}
              </span>
            ) : (
              <span key={Hash(`part-${partIndex}`)}>{part.text}</span>
            )
          )}
        </div>
      </MenuItem>
    );
  }

  const autosuggestProps = {
    renderInputComponent,
    suggestions: displaySuggestions,
    onSuggestionsFetchRequested,
    onSuggestionsClearRequested,
    getSuggestionValue,
    renderSuggestion,
  };

  return (
    <>
      <Autosuggest
        {...autosuggestProps}
        inputProps={{
          autoFocus: false,
          onChange: (event, { newValue }) => handleSearchChange('searchString', event, newValue),
          onKeyPress: (event) => {
            if (event.key === 'Enter') {
              handleUnfocus(event);
            }
          },
          value: effectiveSearchString,
        }}
        onSuggestionSelected={(event, selected) =>
          handleSuggestionSelect(event, selected.suggestion)
        }
        renderSuggestionsContainer={(options) => (
          <Paper {...options.containerProps} classes={{ root: classes.searchResults }}>
            {options.children}
          </Paper>
        )}
        theme={{
          container: classes.container,
          suggestion: classes.suggestion,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
        }}
      />
    </>
  );
});

export default SearchBar;
