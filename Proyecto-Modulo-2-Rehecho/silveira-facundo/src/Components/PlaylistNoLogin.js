import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Grid, Typography } from '@material-ui/core';
import blockIcon from '../Images/block-icon.png';

const useStyles = makeStyles({ 
    media: {
        height: 200,
    }
});



const PlaylistNoLogin = () => {

    const classes = useStyles();

    return(
        <Container>
            <Box my={4}>
                <Grid container="bool" justify="center" alignItems="center" direction="row">
                    <Box mx={4}>
                        <img src={blockIcon} className={classes.media} title="Padlock" />
                    </Box>
                    <Box>
                        <Grid container="bool" direction="column">
                            <Typography variant="h3">Mmm... algo no salió bien</Typography>
                            <Typography variant="body1">Debes estar autenticado para acceder a esta página</Typography>
                        </Grid>
                    </Box>
                </Grid>
            </Box>
        </Container>
    )
}

export default PlaylistNoLogin;

