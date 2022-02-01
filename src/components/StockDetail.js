import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStockDetailRequest } from '../store/actions/StockActions';
import { useParams } from "react-router-dom";
const StockDetail = (props) => {
	const dataStockDetails = useSelector(state => state.stock)
	const dispatch = useDispatch()
	const { id } = useParams();

	useEffect(() => {
		dispatch(getStockDetailRequest(id));
	}, [dispatch, id])

	let renderStock = () => {
		console.log('dataStockDetails', dataStockDetails)
		return (
			<div className="main-container">
				{dataStockDetails.loading ?
					<div>loading</div> : ""
				}

				{dataStockDetails.stocks ?
					dataStockDetails.stocks && dataStockDetails.stocks.map((stock, index) => {
						if (index < 1)
							return <div key={index} className="container">
								<div className="row align-items-center">
									<div className="col-md-6">
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
														<button type="button" id={`btnRegister${stock.figi}`} className="btn btn-info btn-md">Register</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
					})
					:
					null}
			</div>
		);
	};

	return (
		<div>
			{renderStock()}
		</div>
	);
}

export default StockDetail
