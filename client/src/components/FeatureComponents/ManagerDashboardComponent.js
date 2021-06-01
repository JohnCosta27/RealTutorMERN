import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const ManagerDashboardComponent = () => {

    const useStyles = makeStyles((theme) => ({
        paper: {
			margin: 5,
			textAlign: 'center',
			height: "auto",
			borderRadius: 10,
		}
    }));

    const classes = useStyles();

    return (
        <Grid container>
            <Grid item lg={4} md={6} sm={12} xs={12}>
                <Paper className={classes.paper} elevation={3}>
                    <Typography variant="h2">Company Overview</Typography>
                </Paper>
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
                <Paper className={classes.paper} elevation={3}>
                    <Typography variant="h2">Company Overview</Typography>
                </Paper>
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
                <Paper className={classes.paper} elevation={3}>
                    <Typography variant="h2">Company Overview</Typography>
                </Paper>
            </Grid>
        </Grid>
    );
}
export default ManagerDashboardComponent;