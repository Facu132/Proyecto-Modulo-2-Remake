import React from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LogoMateify from '../Images/LogoMateify.png';
import Box from '@material-ui/core/Box';

const NavBar = (props) => {
    return (
      <Box boxShadow="3">
        <AppBar position="static">
          <Toolbar>
            <Grid justify={props.justify} container="bool">
              <Box mr={1}>
                <img src={LogoMateify} alt="LogoMateify"/>
              </Box>
              <Box ml={1}>
                <Typography variant="h6">
                    Mateify
                </Typography>
              </Box>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    )
}

export default NavBar;