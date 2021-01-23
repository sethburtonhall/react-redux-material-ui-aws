import { combineReducers } from 'redux';

import AccountReducers from './account/AccountReducers';
import ClientReducers from './client/ClientReducers';
import CoreReducers from './core/CoreReducers';
import ScheduleReducers from './schedule/ScheduleReducers';
import SearchReducers from './search/SearchReducers';
import SessionReducers from './session/SessionReducers';

const RootReducers = combineReducers({
  account: AccountReducers,
  client: ClientReducers,
  core: CoreReducers,
  schedule: ScheduleReducers,
  search: SearchReducers,
  session: SessionReducers,
});

export default RootReducers;
