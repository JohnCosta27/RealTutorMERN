import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const LoadingDisk = (props) => {

	if (props.loading) {
		return (
			<div style={{ marginTop: 20 }}>
				<CircularProgress color="secondary" />
			</div>
		);
	} else {
		return <div></div>;
	}
};

export default LoadingDisk;
