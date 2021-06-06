import React from 'react';
import Section from './Section';
import { Typography } from '@material-ui/core';
import LinkMaterial from '@material-ui/core/Link';
import Logo from '../../images/logo.png';

const LegalInfo = () => {
	return (
		<Section auto={true} background="grey">
			<div style={{ flex: 1 }}>
				<Typography variant="h6" style={{ color: '#bbbbbb' }}>
					Legal information
				</Typography>
				<br></br>
				<Typography variant="body2" style={{ color: '#bbbbbb' }}>
					Company Name: Real Tutor Ltd
				</Typography>
				<Typography variant="body2" style={{ color: '#bbbbbb' }}>
					Company Number: 13320915
				</Typography>
				<br></br>
				<Typography variant="body2" style={{ color: '#bbbbbb' }}>
					<LinkMaterial href="#" color="inherit">
						Our mission
					</LinkMaterial>
				</Typography>
				<Typography variant="body2" style={{ color: '#bbbbbb' }}>
					<LinkMaterial href="#" color="inherit">
						Company information
					</LinkMaterial>
				</Typography>
				<Typography variant="body2" style={{ color: '#bbbbbb' }}>
					<LinkMaterial href="#" color="inherit">
						Privacy Policy
					</LinkMaterial>
				</Typography>
				<Typography variant="body2" style={{ color: '#bbbbbb' }}>
					<LinkMaterial href="#" color="inherit">
						Cookie Usage
					</LinkMaterial>
				</Typography>
			</div>
			<div style={{ flex: 1, display: 'flex', justifyContent: 'center'}}>
				<img src={Logo} style={{width: '40vw', maxWidth: 400}}></img>
			</div>
		</Section>
	);
};
export default LegalInfo;
