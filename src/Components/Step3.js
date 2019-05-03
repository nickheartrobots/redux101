import React, { Component } from 'react';

import {
    Grid,
    TextField,
    Typography
} from '@material-ui/core'

class Step3 extends Component {
    state = [

    ]

    render(){
        return(
            <Grid container direction='column' alignContent="center">
                <Grid container direction='column' item xs="4">
                    <Typography variant="h4">
                        Step 3
                    </Typography>
                    <Typography variant="h6">
                       Demographics
                    </Typography>
                    <TextField
                        variant="outlined"
                        label="Age"
                        />
                    <TextField
                        variant="outlined"
                        label="Ethnicity"
                        />
                </Grid>
            </Grid>
        )
    }
}

export default Step3;