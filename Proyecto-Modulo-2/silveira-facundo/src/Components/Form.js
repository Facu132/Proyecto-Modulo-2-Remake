import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import blockIcon from '../Images/block-icon.png';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles({ 
    root: {
        height: 50,
    },
    divider: {
        width: '50%',
    },
    accAsk: {
        color: 'grey',
    }
});

const Form = (props) => {

    const classes = useStyles();

    return (
        <Container>
            <Box boxShadow="3" mt={4} py={2} mb={4}>
                <Grid container="bool" direction="column" alignItems="center">
                    <Grid container="bool" justify="center" alignItems="center" direction="column">                
                        <img src={blockIcon} alt="CandadoIcono" />
                        <Typography variant="h4" color="initial">Ingresar</Typography>
                    </Grid>
                    <FormControl fullWidth margin="normal">
                            <Grid container="bool" direction="column" alignItems="center">
                                <Box mt={2} width="50%">
                                    <TextField
                                        fullWidth="bool" 
                                        id="outlined-basic" 
                                        label="Correo electrónico" 
                                        variant="outlined" 
                                    />
                                </Box>
                                <Box mt={4} width="50%">
                                    <TextField
                                        fullWidth="bool"
                                        id="outlined-password-input"
                                        label="Password"
                                        type="password"
                                        autoComplete="current-password"
                                        variant="outlined"
                                    />
                                </Box>
                                <Box mt={4} width="50%"> 
                                    <Button
                                        fullWidth="bool" 
                                        variant="contained" 
                                        classes={{
                                            root: classes.root
                                            }} 
                                        color="secondary"
                                        onClick={props.onClick}
                                        >
                                        COMENZAR A CREAR PLAYLISTS
                                    </Button>
                                </Box>
                                <Box mt={3} mb={3}>
                                    <Button color="primary">¿HAZ OLVIDADO LA CONTRASEÑA?</Button>
                                </Box>
                                <Divider variant="middle" classes={{
                                    root:classes.divider
                                }}/>
                            </Grid>
                            <Grid container="bool" direction="column" alignItems="center">
                                <Box mt={3}>
                                    <Link href="#" underline="none" TypographyClasses={{root:classes.accAsk}}>¿NO TIENES CUENTA?</Link>
                                </Box>
                                <Box mt={3} width="25%" >
                                    <Button variant="outlined" fullWidth="bool" color="primary" href="#">REGISTRATE</Button>
                                </Box>
                            </Grid>
                    </FormControl>
                </Grid>
            </Box>
        </Container>
    )
}

export default Form;