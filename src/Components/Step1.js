import React, { Component } from 'react';

import {
    Grid,
    TextField,
    Typography
} from '@material-ui/core'

class Step1 extends Component {
    state = {}

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
                </Grid>
            </Grid>
        )
    }
}

export default Step1;