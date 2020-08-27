import React, { Fragment } from 'react';
import NavBar from './NavBar';
import Padlock from './Padlock';
import Box from '@material-ui/core/Box';
import { Grid, Container } from '@material-ui/core';

const Snackbar = () => {
    return (
        <Fragment>
            <NavBar justify="center" />
            <Container>
                <Box boxShadow="3" my={15} mx={20} py={2}>
                    <Grid container="bool"  direction="column"   justify="center">
                        <Padlock />
                    </Grid>
                </Box>
            </Container>
        </Fragment>
    )
}

export default Snackbar;