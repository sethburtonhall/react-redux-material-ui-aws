import React from 'react';

export function generateExternalLink(link) {
  const externalLink = React.forwardRef((props, ref) => (
    // eslint-disable-next-line  jsx-a11y/anchor-has-content
    <a href={link} ref={ref} rel="noopener noreferrer" target="_blank" {...props} />
  ));

  return externalLink;
}

export function isDev() {
  const hostParts = window.location.host.split(':');

  if (hostParts[0] === 'dev.solelife.com' || hostParts[0] === 'dev-local.solelife.com') {
    return true;
  }

  return false;
}

export function isHome() {
  if (window.location.pathname === '/') {
    return true;
  }

  return false;
}

export function isHosted() {
  const hostParts = window.location.host.split(':');

  if (hostParts[0] === 'dev.solelife.com' || hostParts[0] === 'solelife.com') {
    return true;
  }

  return false;
}

export function isPrd() {
  const hostParts = window.location.host.split(':');

  if (hostParts[0] === 'solelife.com') {
    return true;
  }

  return false;
}
