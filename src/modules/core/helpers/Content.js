import React from 'react';

export function contains(password, allowedChars) {
  for (let passwordIndex = 0; passwordIndex < password.length; passwordIndex += 1) {
    const characterAt = password.charAt(passwordIndex);

    if (allowedChars.indexOf(characterAt) >= 0) {
      return true;
    }
  }

  return false;
}

export function generateExternalLink(link) {
  return React.forwardRef((props, ref) => (
    // eslint-disable-next-line  jsx-a11y/anchor-has-content
    <a href={link} ref={ref} rel="noopener noreferrer" target="_blank" {...props} />
  ));
}

export function generateRandomToken(tokenLength) {
  const digits = '0123456789';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const alphaNumeric = `${digits}${lowercase}${uppercase}`;

  let newToken = [];

  for (let tokenIndex = 0; tokenIndex < tokenLength; tokenIndex += 1) {
    const referenceIndex = Math.floor(Math.random() * tokenLength);

    newToken.push(alphaNumeric.substring(referenceIndex, referenceIndex + 1));
  }

  return newToken.join('');
}
