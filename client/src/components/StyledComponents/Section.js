import react from 'react';
import { makeStyles } from '@material-ui/core/styles';

import clsx from 'clsx';

const Section = (props) => {

	const useStyles = makeStyles((theme) => ({
		sectionPaper: {
			width: '80%',
			height: '97.5%',
			marginTop: '1.25%',
			marginBottom: '1.25%',
			marginLeft: '10%',
			marginRight: '10%',
			display: 'flex',
			paddingTop: 20,
			paddingLeft: 20,
			paddingBottom: 20,
			paddingRight: 20,
			justifyContent: 'space-between',
			[theme.breakpoints.down('md')]: {
				flexDirection: 'column',
				justifyContent: 'center',
			},
		},
		smallSection: {
			width: '100%',
			display: 'flex',
			height: ((props.small) ? 600 : '100vh'),
			[theme.breakpoints.down('md')]: {
				height: 'auto',
			},
		},
		offwhite: {
			backgroundColor: theme.palette.offWhite.main,
		},
		lightteal: {
			backgroundColor: theme.palette.lightTeal.main,
		},
		alignCenter: {
			alignItems: 'center',
		},
	}));

	const classes = useStyles();

	let WrapperList = clsx(classes.smallSection);
	let ChildList = clsx(classes.sectionPaper);

	if (props.background == 'offwhite') {
		WrapperList = clsx(classes.smallSection, classes.offwhite);
	} else if (props.background == 'lightteal') {
		WrapperList = clsx(classes.smallSection, classes.lightteal);
	}

	if (props.centered == true) {
		ChildList = clsx(classes.sectionPaper, classes.alignCenter);
	}

	return (
		<div className={WrapperList}>
			<div className={ChildList}>{props.children}</div>
		</div>
	);
};

export default Section;
