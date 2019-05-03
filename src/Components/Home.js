import React from 'react';

import { Typography, Button } from '@material-ui/core'
import { connect } from 'react-redux';

import * as AppActions from '../Actions/App';

class Home extends React.Component {

    handleToggle = () => {
        if(this.props.AppState.isWorking){
            // set state to false
            this.props.dispatch(AppActions.setWorkingFalse())
        } else {
            // set state to true
            this.props.dispatch(AppActions.setWorkingTrue())
        }
    }

    handleSetTrue = () => {
        this.props.dispatch(AppActions.setWorking(true))
    }
    
    handleSetFalse = () => {
        this.props.dispatch(AppActions.setWorking(false))        
    }

    render(){
        console.log(this.props);
        return(
            <div>
                <Typography variant="h3">
                    Redux 101
                </Typography>
                <Typography variant="body1">
                    Welcome to this tutorial.  Consider this:
                </Typography>
                <Typography variant="body2">
                    What happens when need to share data between multiple components?
                </Typography>
                <Typography variant="body2">
                    What happens when you want to pass data down 3, 4 or 100 layers deep?
                </Typography>
                { this.props.AppState.isWorking &&
                    <Typography variant="body2">
                        Yipee!!
                    </Typography>            
                }
                <Button onClick={this.handleToggle}>Toggle</Button>
                <Button onClick={this.handleSetTrue}>True</Button>
                <Button onClick={this.handleSetFalse}>False</Button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        AppState: state.App
    }
}

export default connect(mapStateToProps)(Home);