import Cookies from 'universal-cookie';

import { getText } from '../helpers/Texts';

export function checkIfLoggedIn() {
  const cookies = new Cookies();

  const refreshCookie = cookies.get(getText('CORE', 'HAS_REFRESH_COOKIE'));

  if (refreshCookie === null || refreshCookie === undefined) {
    return false;
  }

  return true;
}
