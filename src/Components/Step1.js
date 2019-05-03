import React, { Component } from 'react';

import {
    Grid,
    TextField,
    Typography,
    Button
} from '@material-ui/core'

class Step1 extends Component {
    state = {}

    handleNext = () => {

    }

    render(){
        return(
            <Grid container direction='column' alignContent="center">
                <Grid container direction='column' item xs="4">
                    <Typography variant="h4">
                        Step 1
                    </Typography>
                    <Typography variant="h6">
                        Basic Info
                    </Typography>
                    <TextField
                        variant="outlined"
                        label="First Name"
                        />
                    <TextField
                        variant="outlined"
                        label="Last Name"
                        />
                    <Button onClick={this.handleNext}>Next</Button>
                </Grid>
            </Grid>
        )
    }
}

export default Step1;