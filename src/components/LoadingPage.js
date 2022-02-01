import React from 'react';
import img from '../assets/images/Loading.gif';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function LoadingPage(props) {
	let renderLoading = ({ loading }) => {
		return (
			loading ?
				<React.Fragment>
					<img src={img} alt='loading' />
					<h1>LOADING...</h1>
				</React.Fragment>
				:
				null
		);
	};

	return (
		<div>
			{
				renderLoading(props.loadingData)
			}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		loadingData: state.stock
	}
}

LoadingPage.propTypes = {
	dispatch: PropTypes.func
}

export default connect(mapStateToProps)(LoadingPage)