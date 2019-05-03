import React, { Component } from 'react';

import {
    Grid,
    Typography
} from '@material-ui/core'

class Step3 extends Component {
    state = {
        fistName: "Nick",
        lastName: "Clarity",
        street: "3412 Woodbine Ln",
        city: "Brooklyn Center",
        state: "MN",
        zip: "55429",
        age: "34",
        ethnicity: "caucasian"
    }

    render(){
        return(
            <Grid container direction='column' alignContent="center">
                <Grid container direction='column' item xs="4">
                    <Typography variant="h4">
                        Summary
                    </Typography>
                    <Typography variant="headline">
                       Name
                    </Typography>
                    <Typography variant="body1">
                        { `${this.state.fistName} ${this.state.lastName}` }
                    </Typography>
                    <Typography variant="headline">
                       Address
                    </Typography>
                    <Typography variant="body1">
                       { this.state.street }
                    </Typography>
                    <Typography variant="body1">
                       { `${this.state.city}, ${this.state.state} ${this.state.zip}`}
                    </Typography>
                    <Typography variant="headline">
                       Demographics
                    </Typography>
                    <Typography variant="body1">
                        { `${this.state.age}, ${this.state.ethnicity}` }
                    </Typography>
                </Grid>
            </Grid>
        )
    }
}

export default Step3;