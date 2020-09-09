// IMPORT EXTERNAL LIBRARIES/MODULES
import {takeLatest, fork, call, put} from 'redux-saga/effects';
import _ from 'lodash';
import AsyncStorage from '@react-native-community/async-storage';
import {navigateTo} from '../../services/navigationService';

// WORKER SAGAS
function* workerRequestSignIn(action) {
  yield put({
    type: 'SHOW_PAGE_LOADER',
  });
  try {
    yield put({
      type: 'SIGN_IN_SUCCESS',
      payload: {
        data: [],
      },
    });
    yield navigateTo('flatList');
  } catch (error) {
    yield put({
      type: 'SIGN_OUT',
      payload: {
        errorObj: error,
      },
    });
  } finally {
    yield put({type: 'HIDE_PAGE_LOADER'});
  }
}

// WATCHER SAGAS
function* watcherRequestSignIn() {
  yield takeLatest('SIGN_IN_REQUEST', workerRequestSignIn);
}

// running auth related saga.
export default [fork(watcherRequestSignIn)];
