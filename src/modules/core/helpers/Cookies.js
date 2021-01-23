import Cookies from 'universal-cookie';

import { getText } from './Texts';

export function getCookie(cookie) {
  const cookies = new Cookies();

  let cookieValue = cookies.get(getText('CORE', cookie));

  if (cookieValue !== undefined && cookieValue === 'false') {
    return false;
  } else if (cookieValue !== undefined && cookieValue === 'true') {
    return true;
  }

  return cookieValue;
}

export function setCookie(cookie, value) {
  const cookies = new Cookies();

  const cookieOptions = {
    domain: `.${window.env.DOMAIN}`,
    path: '/',
    sameSite: 'lax',
  };

  cookies.set(getText('CORE', cookie), value, cookieOptions);
}
