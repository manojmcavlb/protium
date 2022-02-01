import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStocksRequest } from '../store/actions/StockActions';
import { useParams } from "react-router-dom";

const Stocks = (props) => {
	const dataStocks = useSelector(state => state.stock.stocks)
	const dispatch = useDispatch()
	const { id } = useParams();

	useEffect(() => {
		dispatch(getStocksRequest(id));
	}, [dispatch, id])

	let renderStock = () => {
		// console.log('dataStocks', dataStocks)
		return (
			<div className="main-container">
				<table>
					<tr>
						<th>S.No.</th>
						<th>Description</th>
						<th>Currency</th>
						<th>Symbol</th>
						<th>Share Class FIGI</th>
						<th>Type</th>
						<th>Mic</th>
						{/* {"country":"US","currency":"USD","exchange":"NASDAQ NMS - GLOBAL MARKET","finnhubIndustry":"Technology","ipo":"1980-12-12","logo":"https://finnhub.io/api/logo?symbol=AAPL","marketCapitalization":2782234,"name":"Apple Inc","phone":"14089961010.0","shareOutstanding":16334.37,"ticker":"AAPL","weburl":"https://www.apple.com/"} */}
					</tr>
					<tbody>
						{dataStocks ?
							dataStocks && dataStocks.map((stock, index) => {
								if (index < 20)
									return <React.Fragment key={index}>
										<tr>
											<td>
												{index + 1}
											</td>
											<td>
												{stock.description}
											</td>
											<td>
												{stock.currency}
											</td>
											<td>
												{stock.symbol}
											</td>
											<td>
												{stock.shareClassFIGI}
											</td>
											<td>
												{stock.type}
											</td>
											<td>
												{stock.mic}
											</td>
										</tr>
									</React.Fragment>
							})
							:
							null}
					</tbody>
				</table>

				{/* <tr>
					<th>S.No.</th>
					<th>Description</th>
					<th>Currency</th>
					<th>Symbol</th>
					<th>Share Class FIGI</th>
					<th>Type</th>
					<th>Mic</th>		
					</tr>	 */}


				{/* {dataStocks ?
					dataStocks && dataStocks.map((stock, index) => {
						if (index < 20)
							return <div key={index} className="container">
								<div className="row align-items-center">
									<div className="col-md-6 form-control-cus">
										<div className="item-wrapper">
											<div className="item-content">
												
												<div className="control-group row">
													<div className="col-md-6 control-label">
														Description:
													</div>
													<div className="col-md-6 form-control-cus">
														{stock.description}
													</div>
												</div>
												<div className="control-group row">
													<div className="col-md-6 control-label">
														Currency:
													</div>
													<div className="col-md-6 form-control-cus">
														{stock.currency}
													</div>
												</div>
												<div className="control-group row">
													<div className="col-md-6 control-label">
														Symbol:
													</div>
													<div className="col-md-6 form-control-cus">
														{stock.symbol}
													</div>
												</div>
												<div className="control-group row">
													<div className="col-md-6 control-label">
														Share Class FIGI:
													</div>
													<div className="col-md-6 form-control-cus">
														{stock.shareClassFIGI}
													</div>
												</div>
												<div className="control-group row">
													<div className="col-md-6 control-label">
														Type:
													</div>
													<div className="col-md-6 form-control-cus">
														{stock.type}
													</div>
												</div>
												<div className="control-group row">
													<div className="col-md-6 control-label">
														Mic:
													</div>
													<div className="col-md-6 form-control-cus">
														{stock.mic}
													</div>
												</div>
												<div className="row">
													<div className="offset-md-6 col-md-6 control-label">
														<Link to={`/stock_details/${stock.figi}`} target='_blank' className="btn btn-info">
															<button type="button" id={`btnDetail${stock.figi}`} className="btn btn-info btn-md">Detail</button>
														</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
					})
					:
					null} */}
			</div>
		);
	};

	return (
		<div>
			{renderStock()}
		</div>
	);
}

export default Stocks
