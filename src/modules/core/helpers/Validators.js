import { contains } from './Content';
import { getText } from './Texts';

export function emailRequirements(email) {
  return email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
}

export function passwordRequirements(password, passwordVerify) {
  const rulesNotMet = [];

  if (!contains(password, '0123456789')) {
    rulesNotMet.push(getText('ACCOUNT', 'PASSWORD_VIOLATION_DIGIT'));
  }

  if (password.length < 8) {
    rulesNotMet.push(getText('ACCOUNT', 'PASSWORD_VIOLATION_LENGTH'));
  }

  if (!contains(password, 'abcdefghijklmnopqrstuvwxyz')) {
    rulesNotMet.push(getText('ACCOUNT', 'PASSWORD_VIOLATION_LOWERCASE'));
  }

  if (password !== passwordVerify && password !== '' && passwordVerify !== '') {
    rulesNotMet.push(getText('ACCOUNT', 'PASSWORD_VIOLATION_MISMATCH'));
  }

  if (!contains(password, '?!#%$')) {
    rulesNotMet.push(getText('ACCOUNT', 'PASSWORD_VIOLATION_SPECIAL_CHARACTERS'));
  }

  if (!contains(password, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')) {
    rulesNotMet.push(getText('ACCOUNT', 'PASSWORD_VIOLATION_UPPERCASE'));
  }

  return rulesNotMet;
}
