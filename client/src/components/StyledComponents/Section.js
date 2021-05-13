import react, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import clsx from 'clsx';

const Section = (props) => {

	const [height, setHeight] = useState(600);

	useEffect(() => {
		if (props.small) {
			setHeight(600)
		} else if (props.medium) {
			setHeight(800)
		} else if (props.large) {
			setHeight(1000);
		} else {
			setHeight('100vh');
		}

	}, [])

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
			height: height,
			backgroundPositionY: props.offsetY,
			backgroundImage: props.backgroundimage,
			[theme.breakpoints.down('xs')]: {
				height: 'auto',
			},
		},
		offwhite: {
			backgroundColor: theme.palette.offWhite.main,
		},
		lightteal: {
			backgroundColor: theme.palette.lightTeal.main,
		},
		lightblue: {
			backgroundColor: theme.palette.lightBlue.main,
		},
		alignCenter: {
			alignItems: 'center',
		},
		column: {
			flexDirection: 'column',
		}
	}));

	const classes = useStyles();

	let WrapperList = clsx(classes.smallSection);
	let ChildList = clsx(classes.sectionPaper);

	if (props.background == 'offwhite') {
		WrapperList = clsx(classes.smallSection, classes.offwhite);
	} else if (props.background == 'lightteal') {
		WrapperList = clsx(classes.smallSection, classes.lightteal);
	} else if (props.background == 'lightblue') {
		WrapperList = clsx(classes.smallSection, classes.lightblue);
	}

	if (props.centered) {
		ChildList = clsx(classes.sectionPaper, classes.alignCenter);
	}

	if (props.column) {
		ChildList = clsx(ChildList, classes.column);
	}

	return (
		<div className={WrapperList} id={props.id}>
			<div className={ChildList}>{props.children}</div>
		</div>
	);
};

export default Section;
