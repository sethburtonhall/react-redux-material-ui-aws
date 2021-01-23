import Cookies from 'universal-cookie';

import AccountTexts from '../../account/i18n/AccountTexts';
import ClientTexts from '../../client/i18n/ClientTexts';
import CoachTexts from '../../coach/i18n/CoachTexts';
import CoreTexts from '../i18n/CoreTexts';
import DashboardTexts from '../../dashboard/i18n/DashboardTexts';
import ScheduleTexts from '../../schedule/i18n/ScheduleTexts';
import SearchTexts from '../../search/i18n/SearchTexts';
import SessionTexts from '../../session/i18n/SessionTexts';

export function getText(type, text) {
  const cookies = new Cookies();

  let locale = cookies.get(CoreTexts['en-us']['LOCALE']);

  if (locale === undefined) {
    locale = 'en-us';
  }

  const defaultText = 'No text found';

  if (
    type !== 'ACCOUNT' &&
    type !== 'CLIENT' &&
    type !== 'COACH' &&
    type !== 'CORE' &&
    type !== 'DASHBOARD' &&
    type !== 'SCHEDULE' &&
    type !== 'SEARCH' &&
    type !== 'SESSION'
  ) {
    return defaultText;
  }

  let localeText = '';

  if (type === 'ACCOUNT') {
    localeText = AccountTexts[locale][text];
  } else if (type === 'CLIENT') {
    localeText = ClientTexts[locale][text];
  } else if (type === 'COACH') {
    localeText = CoachTexts[locale][text];
  } else if (type === 'CORE') {
    localeText = CoreTexts[locale][text];
  } else if (type === 'DASHBOARD') {
    localeText = DashboardTexts[locale][text];
  } else if (type === 'SCHEDULE') {
    localeText = ScheduleTexts[locale][text];
  } else if (type === 'SEARCH') {
    localeText = SearchTexts[locale][text];
  } else if (type === 'SESSION') {
    localeText = SessionTexts[locale][text];
  }

  if (localeText === undefined) {
    return defaultText;
  }

  return localeText;
}
