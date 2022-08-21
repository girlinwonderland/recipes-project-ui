import { takeEvery } from 'redux-saga/effects';

export function* workerSaga() {
    console.log('click from saga')
}



export function* watchClickSaga() {
    yield takeEvery('SIGN_UP', workerSaga);
}


export default function* rootSaga() {
    yield watchClickSaga();
}
