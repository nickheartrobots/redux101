import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Grid, LinearProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/core';

import LeftNav from './Components/LeftNav';
import Home from './Components/Home';
import Step1 from './Components/Step1';
import Step2 from './Components/Step2';
import Step3 from './Components/Step3';
import Summary from './Components/Summary';

import styles from './styles';

class App extends React.Component {
	state = {
		isLoading: false
	}

	render() {
		const {classes} = this.props;

		return (
			<Fragment>
				{ this.state.isLoading &&
					<div className={classes.loading}>
						<LinearProgress/>
					</div>
				}
				<Grid container className={classes.rootGrid}>
					<Router>
						<Grid item xs={3} className={classes.left}>
							<LeftNav />
						</Grid>
						<Grid item xs className={classes.center}>
							<Switch>
								<Route path="/" exact component={Home} />
								<Route path="/multistep/1" component={Step1} />
								<Route path="/multistep/2" component={Step2} />
								<Route path="/multistep/3" component={Step3} />
								<Route path="/multistep/summary" component={Summary} />
							</Switch>
						</Grid>
					</Router>
				</Grid>
			</Fragment>
		);
	}
}


export default withStyles(styles)(App);
