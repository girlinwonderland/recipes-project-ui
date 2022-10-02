import { takeEvery, all } from 'redux-saga/effects';
import { SIGN_UP_REQUEST, SIGN_IN_REQUEST, CHECK_AUTH, LOGOUT, RECIPES_REQUEST, RECIPES_DELETE, RECIPES_EDIT } from '../actions';
import { signUpSaga } from './signUp';
import { signInSaga } from './signIn';
import { checkAuth } from './checkAuth';
import { logOutSaga } from './logOut';
import { userRecipes } from './recipes';
import { deleteRecipes } from './deleteRecipes';
import { editRecipes } from './editRecipes';

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
    yield all([
        takeEvery(SIGN_IN_REQUEST, signInSaga),
        takeEvery(SIGN_UP_REQUEST, signUpSaga),
        takeEvery(CHECK_AUTH, checkAuth),
        takeEvery(LOGOUT, logOutSaga),
        takeEvery(RECIPES_REQUEST, userRecipes),
        takeEvery(RECIPES_DELETE, deleteRecipes),
        takeEvery(RECIPES_EDIT, editRecipes)
    ]);
}
