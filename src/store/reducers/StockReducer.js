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

const initialState = {
    loading: false,
    stocks: [],
    stock: {},
    error: '',
    isRedirect: false,
}

export const StockReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_STOCKS_REQUEST_ASYNC:
            return {
                ...state,
                loading: true,
            }
        case GET_STOCKS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GET_STOCKS_SUCCESS:
            return {
                ...state,
                loading: false,
                stocks: action.payload,
            }
        case GET_STOCKS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case GET_STOCK_DETAIL_REQUEST_ASYNC:
            return {
                ...state,
                loading: true,
            }
        case GET_STOCK_DETAIL_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GET_STOCK_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                stocks: action.payload,
            }
        case GET_STOCK_DETAIL_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default: return state;
    }
}