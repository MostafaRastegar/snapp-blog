// reducer
import { combineReducers } from 'redux';
// import counter from './counter';
import Auth from './auth';
import Verify from './verify';
import Modals from './modals';
import Loading from './loading';
import Notification from './notification';
import Validation from './validation';
import NotFound from './notFound';
import { connectRouter } from 'connected-react-router';
const rootReducer = (history) => combineReducers({
  Validation,
  Modals,
  Loading,
  Notification,
  Auth,
  Verify,
  NotFound,
  router: connectRouter(history)
});
export default rootReducer;