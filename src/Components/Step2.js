import React, { Component } from 'react';

import {
    Grid,
    TextField,
    Typography
} from '@material-ui/core'

class Step2 extends Component {
    state = {}

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
                </Grid>
            </Grid>
        )
    }
}

export default Step2;