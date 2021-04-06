import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import LeftDrawer from '../general/LeftDrawer';

import PlanLesson from '../FeatureComponents/PlanLesson';
import Dashboard from '../FeatureComponents/Dashboard';
import AddReport from '../FeatureComponents/AddReport';
import Progress from '../FeatureComponents/Progress';
import StudentLessons from '../FeatureComponents/StudentLessons';

const StudentDashboard = () => {
    
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const useStyles = makeStyles(theme => ({
        
        studentNameWrapper: {
            flex: 1
        },
        studentNameText: {
            textAlign: "center"
        },
        paper: {
            margin: 5,
            textAlign: 'center',
            height: 350,
            borderRadius: 10,
        },
        cardsWrapper: {
            width: "90%",
            marginLeft: "5%",
            height: "100%",
            display: "flex",
            flexDirection: "column"
        },
        cardContent: {
            flex: 5,
            display: "flex",
            flexDirection: "column"
        },
        cardAction: {
            width: "50%",
            marginLeft: "25%",
            marginBottom: 10,
            flex: 1,
            display: "flex",
            justifyContent: "center"
        },
        button: {
            marginLeft: 5,
            marginRight: 5
        },
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(3),
            marginTop: 50
        }
    }));
    
    const [auth, setAuth] = useState({empty: true});
    const [current, setCurrent] = useState(0);
    
    useEffect(() => {
        getAuth();
    }, []);
    
    const getAuth = async () => {
        
        const response = await fetch("/accounts/auth", {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });
        
        const data = await response.json();
        console.log(data);
        setAuth(data);
        
    }
    
    const classes = useStyles();
    
    if (auth.level < 1) {
        return (
            <div className="app">
            <Typography variant="h1">Back to the login</Typography>
            </div>
        );
    } else if (auth.level == 1) {

        return (
            <div className="App">
            <LeftDrawer changeState={setCurrent} level={auth.level} />
            <div className={classes.content}>
            
            <div className={classes.studentNameWrapper}>
            <Typography variant="h1">John Costa</Typography>
            </div>
            
            {current === 0 ? <Dashboard level={auth.level} /> : <div></div>}
            {current === 1 ? <StudentLessons level={auth.level} /> : <div></div>}
            {current === 2 ? <Progress level={auth.level} /> : <div></div>}
            {current === 3 ? <PlanLesson level={auth.level} /> : <div></div>}
            {current === 4 ? <AddReport level={auth.level} /> : <div></div>}

            </div>
            </div> 
        );

    } else if (auth.level >= 2) {
            return (
                <div className="App">
                <LeftDrawer changeState={setCurrent} />
                <div className={classes.content}>
                
                <div className={classes.studentNameWrapper}>
                <Typography variant="h1">John Costa</Typography>
                </div>
                
                {current === 0 ? <Dashboard /> : <div></div>}
                {current === 1 ? <StudentLessons /> : <div></div>}
                {current === 2 ? <Progress /> : <div></div>}
                {current === 3 ? <PlanLesson /> : <div></div>}
                {current === 4 ? <AddReport /> : <div></div>}

                </div>
                </div>
                
                );
            } else {
                return (
                    <div></div>
                )
            }
    }
        export default StudentDashboard;