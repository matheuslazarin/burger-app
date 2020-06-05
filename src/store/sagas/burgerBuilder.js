import axios from "../../axios-orders";
import {put} from 'redux-saga/effects';
import * as actions from '../actions/index';

export function* initIngredientsSaga(action) {
  try {
    const response = yield axios.get('https://burger-app-7fa2f.firebaseio.com/ingredients.json');
    yield put(actions.setIngredients(response.data));
  } catch (e) {
    yield put(actions.fetchIngredientsFailed());
  }

}