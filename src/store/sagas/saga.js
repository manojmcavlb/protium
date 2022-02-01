import { takeLatest, put } from 'redux-saga/effects';
import {
    GET_STOCKS_REQUEST_ASYNC,
    GET_STOCKS_REQUEST,
    GET_STOCKS_SUCCESS,
    GET_STOCKS_FAILURE,

    GET_STOCK_DETAIL_REQUEST_ASYNC,
    GET_STOCK_DETAIL_REQUEST,
    GET_STOCK_DETAIL_SUCCESS,
    GET_STOCK_DETAIL_FAILURE,

} from '../types/StockTypes';

function* getStocksAsync(action) {
    try {
        yield put({ type: GET_STOCKS_REQUEST_ASYNC });
        var url = 'https://finnhub.io/api/v1/stock/symbol?exchange=US&token=c7rsp92ad3iel5ubie50';
        const output = yield fetch(url)
            .then(res => res.json());

        console.log('output', output)
        yield put({ type: GET_STOCKS_SUCCESS, payload: output });

    }
    catch (error) {
        yield put({ type: GET_STOCKS_FAILURE, payload: error })
    }
}

function* getStockDetailAsync(action) {
    // console.log('getStockDetailAsync', action.id)
    try {
        yield put({ type: GET_STOCK_DETAIL_REQUEST_ASYNC });
        var url = 'https://finnhub.io/api/v1/stock/symbol?exchange=US&token=c7rsp92ad3iel5ubie50';
        const output = yield fetch(url)
            .then(res => res.json());

        console.log('output', output)
        yield put({ type: GET_STOCK_DETAIL_SUCCESS, payload: output });

        // var output2;
        // const api_key = "435c8880fa41fdbe5fba133c47f72ed3d";
        // var url2 = `https://finnhub.io/api/v1/stock/symbol?exchange=US&token=c7rsp92ad3iel5ubie50`;
        // axios({
        //     method: 'GET',
        //     url: url2,
        //     params: {
        //         api_key,
        //         _limit: 100
        //     },
        // }).then(res => {
        //     var output2 = res.data[0]
        //     console.log('output2', output2)
        // })

        // yield put({ type: GET_STOCK_DETAIL_SUCCESS, payload: output2 });
    }
    catch (error) {
        yield put({ type: GET_STOCK_DETAIL_FAILURE, payload: error })
    }
}

export default function* rootSaga() {
    yield takeLatest(GET_STOCKS_REQUEST, getStocksAsync)
    yield takeLatest(GET_STOCK_DETAIL_REQUEST, getStockDetailAsync)

}