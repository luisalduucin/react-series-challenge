import {FETCH_TRENDING_GIFS, fetchTrendingGifsFail, fetchTrendingGifsOk} from "../actions/trending";
import {call, put, takeEvery} from "redux-saga/effects";
import get from './giphyAPI';

function * onFetchTrendingGifs () {
  let trendingGifs;
  try {
    trendingGifs = yield call(get, 'trending?limit=80');
  } catch (error) {
    yield put(fetchTrendingGifsFail());
  }
  console.log(trendingGifs);
  yield put(fetchTrendingGifsOk(trendingGifs));
}

const trendingWatchers = [
  takeEvery(FETCH_TRENDING_GIFS, onFetchTrendingGifs)
];

export default trendingWatchers;