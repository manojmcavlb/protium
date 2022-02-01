import {
    GET_STOCKS_REQUEST,
    // GET_STOCKS_SUCCESS,
    // GET_STOCKS_FAILURE,
    GET_STOCK_DETAIL_REQUEST,
    // GET_STOCK_DETAIL_SUCCESS,
    // GET_STOCK_DETAIL_FAILURE,

} from '../types/StockTypes';


export const getStocksRequest = (id) => {
    // console.log('getStocksRequest')
    return {
        type: GET_STOCKS_REQUEST,
        id: id,
    }
}

export const getStockDetailRequest = (id) => {
    console.log('getStockDetailRequest')
    return {
        type: GET_STOCK_DETAIL_REQUEST,
        id: id,
    }
}

// export const getStockDetailSuccess = (data) => {
//     return {
//         type: GET_STOCK_DETAIL_SUCCESS,
//         payload: data,
//     }
// }

// export const getStockDetailFailure = (error) => {
//     return {
//         type: GET_STOCK_DETAIL_FAILURE,
//         payload: error,
//     }
// }

// export const getStockDetail = (pageNumber, limit) => {
//     return (dispatch) => {
//         dispatch(getStockDetailRequest())
//         var url = `http://localhost:3100/movies?_page=${pageNumber}&_limit=${limit}`;
//         fetch(url)
//             .then(resp => resp.json())
//             .then(resp => {
//                 dispatch(getStockDetailSuccess(resp))
//             })
//             .catch(error => {
//                 dispatch(getStockDetailFailure(error))
//             })
//     }
// }

