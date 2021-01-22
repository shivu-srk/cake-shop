import { put, takeEvery, all, delay} from 'redux-saga/effects';
import { INCREMENT,DECREMENT, ASYNC_INCREMENT } from './reducer';

function* asyncIncrement(){
    yield put({type: INCREMENT});
    yield delay(1000);
    yield put({type: DECREMENT});
    yield delay(1000);
    yield put({type: INCREMENT});
    yield delay(1000);
    yield put({type: DECREMENT});
    yield delay(1000);
}

function* watchAsyncIncrement(){
    yield takeEvery(ASYNC_INCREMENT, asyncIncrement);
}

export function* rootSagas(){
    yield all([watchAsyncIncrement()]);
}

