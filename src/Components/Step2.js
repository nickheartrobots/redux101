import React, { Component } from 'react';

import {
    Grid,
    TextField,
    Typography,
    Button
} from '@material-ui/core'

class Step2 extends Component {
    state = {}

    handleNext = () => {

    }

    render(){
        return(
            <Grid container direction='column' alignContent="center">
                <Grid container direction='column' item xs="4">
                    <Typography variant="h4">
                        Step 2
                    </Typography>
                    <Typography variant="h6">
                       Address
                    </Typography>
                    <TextField
                        variant="outlined"
                        label="Street Address"
                        />
                    <TextField
                        variant="outlined"
                        label="City"
                        />
                    <TextField
                        variant="outlined"
                        label="State"
                        />
                    <TextField
                        variant="outlined"
                        label="Zip"
                        />          
                    <Button onClick={this.handleNext}>Next</Button>
                </Grid>
            </Grid>
        )
    }
}

export default Step2;