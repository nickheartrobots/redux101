import React from 'react';

import { Typography } from '@material-ui/core'

function Home(){
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
        </div>
    )
}

export default Home;