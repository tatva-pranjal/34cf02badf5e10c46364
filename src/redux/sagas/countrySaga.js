// IMPORT EXTERNAL LIBRARIES/MODULES
import {takeLatest, fork, put, call} from 'redux-saga/effects';
import _ from 'lodash';
import {apiService} from '../../services/apiService';
import {navigateTo} from '../../services/navigationService';
import {endpoint} from '../../constants';

// WORKER SAGAS
function* workerRequestCountry(action) {
  yield put({
    type: 'SHOW_PAGE_LOADER',
  });
  const country_detail = yield apiService(
    endpoint.API_URL + action.payload.countryId,
  );
  if (country_detail.success) {
    yield put({
      type: 'SET_COUNTRY_DETAIL',
      payload: {
        data: country_detail.data,
      },
    });
    yield navigateTo('countryDetail');
  } else {
    yield put({
      type: 'FAILED_TO_SET_DETAIL',
      payload: {
        errorObj: 'somethind went wrong',
      },
    });
  }
  yield put({type: 'HIDE_PAGE_LOADER'});
}

// WORKER SAGAS
function* workerRequestgetweatherDetail(action) {
  yield put({
    type: 'SHOW_PAGE_LOADER',
  });
  console.log('endpoint', endpoint.WEATHER_API, 'action', action);
  const weather_detail = yield apiService(
    endpoint.WEATHER_API + action.payload.name,
  );
  console.log('weather_detail', weather_detail.data.current)
  if (weather_detail.success) {
    yield put({
      type: 'SET_WEATHER_DETAIL',
      payload: {
        weatherDetail: weather_detail.data.current,
      },
    });
    yield navigateTo('countryDetail');
  } else {
    yield put({
      type: 'FAILED_TO_SET_DETAIL',
      payload: {
        errorObj: 'somethind went wrong',
      },
    });
  }
  yield put({type: 'HIDE_PAGE_LOADER'});
}

// WATCHER SAGAS
function* watcherRequestCountry() {
  yield takeLatest('COUNTRY_REQUEST', workerRequestCountry);
}
// WATCHER SAGAS
function* watcherRequestGetWeather() {
  yield takeLatest('WEATHER_REQUEST', workerRequestgetweatherDetail);
}


// running auth related saga.
export default [fork(watcherRequestCountry), fork(watcherRequestGetWeather)];
